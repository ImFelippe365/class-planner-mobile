import { createContext, useCallback, useContext, useEffect, useState } from "react";
import { api } from './../services/api'
import theme from "../styles/theme";

const StudentContext = createContext({});

const StudentProvider = ({ children }) => {

	const [student, setStudent] = useState();
	const [disciplines, setDisciplines] = useState([]);
	const [weekSchedules, setWeekSchedules] = useState([]);
	const [monthSchedules, setMonthSchedules] = useState([]);

	const [selectedWeekday, setSelectedWeekday] = useState(new Date().getDay());
	const [selectedDate, setSelectedDate] = useState();
	const [calendarSchedulesStatus, setCalendarSchedulesStatus] = useState([]);

	const getMonthSchedules = useCallback(async () => {
		try {
			const { data } = await api.get(`students/${student.id}/schedules/month/`);

			setMonthSchedules(data);
			getCalendarScheduleStatus();
		} catch (error) {
			console.log('Erro ao tentar requisitar os horários do mês ->', error)
		}
	}, [student]);

	const getWeekSchedules = useCallback(async (date) => {
		try {
			const currentDate = new Date(date);
			const formattedDate = date ? `${currentDate?.toLocaleDateString('pt-BR')}` : ''
			
			const { data } = await api.get(formattedDate ? `students/${student.id}/schedules/week?date=${formattedDate}` : `students/${student.id}/schedules/week/`);
			
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

	// const dayStatus = monthSchedules.find(({ class_date }) => {
	// 	const scheduleDate = new Date(`${class_date}T03:00:00.000Z`);
	// 	return (
	// 		scheduleDate.toLocaleDateString() === day.date.toLocaleDateString()
	// 	);
	// });

	const getCalendarScheduleStatus = useCallback(() => {
		const newStatus = monthSchedules.reduce((accumulator, currentValue) => {
			const lastIndex = accumulator.length === 0 ? currentValue : accumulator.reverse()[0]
			

			const currentClassStatus = {
				selected: false,
				marked: true,
				selectedColor: currentValue.class_to_replace ? theme.colors.warning : currentValue.canceled_class ? theme.colors.danger : theme.colors.primary,
			}
			const newAccumulator = (lastIndex.class_date !== currentValue.class_date) ? { ...accumulator, [currentValue.class_date]: currentClassStatus } : accumulator

			return newAccumulator
		}, {})
		console.log(newStatus)
		setCalendarSchedulesStatus(newStatus)
	}, [monthSchedules]);

	useEffect(() => {
		if (selectedDate) getWeekSchedules(selectedDate)
	}, [selectedDate])

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
				getDisciplines,

				selectedWeekday,
				setSelectedWeekday,
				selectedDate,
				setSelectedDate,

				calendarSchedulesStatus,
				getCalendarScheduleStatus
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
