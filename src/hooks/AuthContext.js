import { createContext, useCallback, useContext, useEffect, useState } from "react";
import api, { suapApi } from '../services/api'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useStudent } from "./StudentContext";

const AuthContext = createContext({});

const AuthProvider = ({ children }) => {

	const { getDisciplines, getWeekSchedules, getMonthSchedules, setStudent } = useStudent();

	const [user, setUser] = useState();

	const registerStudent = useCallback(async (new_student) => {
		try {
			const { data } = await api.post('students/', new_student);

			return data[0];
		} catch (error) {
			console.warn('Erro ao tentar cadastrar estudante ->', error)
		}
	}, []);

	const getStudentIsRegistered = useCallback(async (registration) => {
		try {
			const { data } = await api.get(`students/byregistration/${registration}/`);

			if (data?.details == 'Não encontrado') return false

			return data;
		} catch (error) {
			console.warn('Erro ao tentar verificar se estudante está registrado ->', JSON.stringify(error))
		}
	}, []);

	const getStudentProfile = useCallback(async () => {
		try {
			const { data } = await suapApi.get('minhas-informacoes/meus-dados/');

			if (data.tipo_vinculo !== "Aluno") {
				console.warn('Apenas estudantes podem se autenticar')
				return;
			}

			let student = await getStudentIsRegistered(data.vinculo.matricula);

			if (!student) {
				const periods = await getReferencePeriods();
				const { ano_letivo, periodo_letivo } = periods.at(-1);

				const virtualClasses = await getVirtualClasses(ano_letivo, periodo_letivo);
				const disciplines = virtualClasses.map(({ sigla }) => sigla);

				student = await registerStudent({
					"registration": data.vinculo.matricula,
					"name": data.nome_usual,
					"course": data.vinculo.curso,
					"shift": "Tarde",
					"email": data.email,
					"disciplines": disciplines
				})
			}
			
			setUser(data);
			setStudent(student);

			await AsyncStorage.setItem('@ClassPlanner:user', JSON.stringify(data));
			await AsyncStorage.setItem('@ClassPlanner:student', JSON.stringify(student));
		} catch (error) {
			console.log('Erro ao tentar pegar o perfil do usuário ->', error)
		}
	}, []);

	const getReferencePeriods = useCallback(async () => {
		try {
			const { data } = await suapApi.get('minhas-informacoes/meus-periodos-letivos/');

			return data;
		} catch (error) {
			console.log('Erro ao tentar requisitar os periodos letivos do estudante ->', error)
		}
	}, []);

	const getVirtualClasses = useCallback(async (year, period) => {
		try {
			const { data } = await suapApi.get(`minhas-informacoes/turmas-virtuais/${year}/${period}/`);

			return data;
		} catch (error) {
			console.log('Erro ao tentar requisitar as turmas virtuais ->', error)
		}
	}, []);

	const getVirtuaClassDetails = useCallback(async (id) => {
		try {
			const { data } = await suapApi.get(`minhas-informacoes/turma-virtual/${id}/`);

			return data;
		} catch (error) {
			console.log('Erro ao tentar requisitar a turma virtual ->', error)
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

			return 'success'
		} catch (error) {
			console.log('Erro ao tentar fazer login ->', JSON.stringify(error))
			return 'error'
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
