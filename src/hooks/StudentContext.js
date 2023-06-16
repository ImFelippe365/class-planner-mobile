import { createContext, useContext, useState } from "react";

const StudentContext = createContext({});

const StudentProvider = ({ children }) => {

	const [student, setStudent] = useState([]);
	const [disciplines, setDisciplines] = useState([]);
	const [weekSchedules, setWeekSchedules] = useState([]);
	const [monthSchedules, setMonthSchedules] = useState([]);
	
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
				setMonthSchedules
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
