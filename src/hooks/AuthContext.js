import { createContext, useCallback, useContext, useEffect, useState } from "react";
import { suapApi } from '../services/api'
import AsyncStorage from '@react-native-async-storage/async-storage';

const AuthContext = createContext({});

const AuthProvider = ({ children }) => {
	const [user, setUser] = useState();

	const getStudentProfile = useCallback(async () => {
		try {
			const { data } = await suapApi.get('minhas-informacoes/meus-dados/');

			setUser(data)
			await AsyncStorage.setItem('@ClassPlanner:user', JSON.stringify(data))
		} catch (error) {
			console.log('Erro ao tentar pegar o perfil do usuário ->', error)
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

			getStudentProfile()
		} catch (error) {
			console.log('Erro ao tentar fazer login ->', JSON.stringify(error.response))
		}
	}, []);

	const logout = useCallback(async () => {
		setUser(undefined);

		await AsyncStorage.multiRemove(
			['@ClassPlanner:token', '@ClassPlanner:refresh']
		)
	}, []);

	const loadSavedSession = async () => {
		const storagedSession = await AsyncStorage.getItem('@ClassPlanner:user');
		const user = storagedSession ? JSON.parse(storagedSession) : null

		if (user) setUser(user)
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
				logout
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
