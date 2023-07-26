import { createContext, useCallback, useContext, useEffect, useState } from "react";
import api, { suapApi } from '../services/api'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useStudent } from "./StudentContext";
import { Alert } from "react-native";

const AuthContext = createContext({});

const AuthProvider = ({ children }) => {

	const { getDisciplines, getWeekSchedules, getMonthSchedules, setStudent } = useStudent();

	const [user, setUser] = useState();

	const registerStudent = useCallback(async (new_student) => {
		try {
			const { data } = await api.post('students/', new_student);
			console.log('register', data)
			return data;
		} catch (error) {
			console.log('register', JSON.stringify(error))
			throw new Error(error)
		}
	}, []);

	const getStudentIsRegistered = useCallback(async (registration) => {
		try {
			const { data } = await api.get(`students/byregistration/${registration}/`);

			console.log('isregistered', data)
			if (data?.details == 'Não encontrado') return false
			return data;
		} catch (error) {
			console.log('isregistered', JSON.stringify(error))
			throw new Error(error)
		}
	}, []);

	const getStudentProfile = useCallback(async () => {
		try {
			const { data } = await suapApi.get('minhas-informacoes/meus-dados/');


			if (data.tipo_vinculo !== "Aluno") {
				Alert.alert('Acesso restrito para estudantes', 'Este aplicativo é voltado para os alunos da instituição, apenas eles podem se autenticar.')
				return;
			}

			let student = await getStudentIsRegistered(data.vinculo.matricula);

			if (!student) {
				const periods = await getReferencePeriods();
				
				let virtualClasses = [];

				try {
					const { ano_letivo, periodo_letivo } = periods.at(-1);
					virtualClasses = await getVirtualClasses(ano_letivo, periodo_letivo);
				} catch {
					const { ano_letivo, periodo_letivo } = periods.at(-2);
					virtualClasses = await getVirtualClasses(ano_letivo, periodo_letivo);
				}
				
				const disciplines = virtualClasses?.map(({ sigla }) => sigla) || [];

				const findShift = virtualClasses.at(-1).horarios_de_aula.split('').find((letter) => letter === "M" || letter === "V" || letter === "N")
				const shifts = {
					'M': 'Manhã',
					'V': 'Tarde',
					'N': 'Noite'
				}
				console.log(shifts[findShift], data.url_foto_75x100, data)
				student = await registerStudent({
					"registration": data.vinculo.matricula,
					"name": data.nome_usual,
					"course": data.vinculo.curso,
					"shift": shifts[findShift],
					"email": data.email,
					"disciplines": disciplines,
					"avatar": data.url_foto_75x100
				})
			}

			setUser(data);
			setStudent(student);

			await AsyncStorage.setItem('@ClassPlanner:user', JSON.stringify(data));
			await AsyncStorage.setItem('@ClassPlanner:student', JSON.stringify(student));
		} catch (error) {
			throw new Error(error)
		}
	}, []);

	const getReferencePeriods = useCallback(async () => {
		try {
			const { data } = await suapApi.get('minhas-informacoes/meus-periodos-letivos/');

			return data;
		} catch (error) {

			console.log('tutz1', JSON.stringify(error))
			throw new Error(error)
		}
	}, []);

	const getVirtualClasses = useCallback(async (year, period) => {
		try {
			const { data } = await suapApi.get(`minhas-informacoes/turmas-virtuais/${year}/${period}/`);

			return data;
		} catch (error) {

			console.log('tutz2', JSON.stringify(error))
			throw new Error(error)
		}
	}, []);

	const getVirtuaClassDetails = useCallback(async (id) => {
		try {
			const { data } = await suapApi.get(`minhas-informacoes/turma-virtual/${id}/`);

			return data;
		} catch (error) {
			throw new Error(error)
		}
	}, []);

	const login = useCallback(async (username, password) => {
		try {
			const params = {
				'username': username,
				'password': password,
			}

			const { data } = await suapApi.post('autenticacao/token/', params);

			await AsyncStorage.multiSet([
				['@ClassPlanner:token', data.access],
				['@ClassPlanner:refresh', data.refresh]
			])

			getStudentProfile();
		} catch (error) {
			throw new Error(error)
		}
	}, []);

	const logout = useCallback(async () => {
		setUser(undefined);
		setStudent(undefined);

		await AsyncStorage.multiRemove(
			['@ClassPlanner:user', '@ClassPlanner:student', '@ClassPlanner:token', '@ClassPlanner:refresh']
		)
	}, []);

	const loadSavedSession = async () => {
		const storagedSession = await AsyncStorage.getItem('@ClassPlanner:user');
		const storagedStudent = await AsyncStorage.getItem('@ClassPlanner:student');

		const user = storagedSession ? JSON.parse(storagedSession) : null
		const student = storagedStudent ? JSON.parse(storagedStudent) : null

		if (user && student) {
			setUser(user);
			setStudent(student)
		}
	}

	useEffect(() => {
		loadSavedSession()
	}, [])

	return (
		<AuthContext.Provider
			value={{
				user,
				setUser,
				login,
				logout,
				getReferencePeriods,
				getVirtuaClassDetails,
				getVirtualClasses
			}}
		>
			{children}
		</AuthContext.Provider>
	);
};

const useAuth = () => {
	const context = useContext(AuthContext);

	return context;
};

export { useAuth, AuthProvider };
