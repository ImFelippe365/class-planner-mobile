import { createContext, useCallback, useContext, useState } from "react";
import { api } from './../services/api'

const StudentContext = createContext({});

const StudentProvider = ({ children }) => {

	const [student, setStudent] = useState();
	const [disciplines, setDisciplines] = useState([]);
	const [weekSchedules, setWeekSchedules] = useState([]);
	const [monthSchedules, setMonthSchedules] = useState([]);

	const getMonthSchedules = useCallback(async () => {
		try {
			const { data } = await api.get(`students/${student.id}/schedules/month/`);

			setMonthSchedules(data)
		} catch (error) {
			console.log('Erro ao tentar requisitar os horários do mês ->', error)
		}
	}, [student]);

	const getWeekSchedules = useCallback(async () => {
		try {
			const { data } = await api.get(`students/${student.id}/schedules/week/`);

			setWeekSchedules(data)
		} catch (error) {
			console.log('Erro ao tentar requisitar os horários da semana ->', error)
		}
	}, [student]);

	const getDisciplines = useCallback(async () => {
		try {
			const { data } = await api.get(`students/${student.id}/disciplines/`);

			setDisciplines(data)
		} catch (error) {
			console.log('Erro ao tentar requisitar as disciplinas->', error)
		}
	}, [student]);

	return (
		<StudentContext.Provider
			value={{
				student,
				disciplines,
				weekSchedules,
				monthSchedules,

				setStudent,
				setDisciplines,
				setWeekSchedules,
				setMonthSchedules,

				getWeekSchedules,
				getMonthSchedules,
				getDisciplines
			}}
		>
			{children}
		</StudentContext.Provider>
	);
};

const useStudent = () => {
	const context = useContext(StudentContext);

	return context;
};

export { useStudent, StudentProvider };
