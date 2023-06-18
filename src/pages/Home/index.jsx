import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import Header from "../../components/Header";
import globalStyles from "../../styles/globalStyles";
import { formatDate } from "../../utils/formatDate";
import { Plus } from "react-native-feather";
import theme from "../../styles/theme";
import styles from "./styles";
import DayCard from "../../components/DayCard";
import ClassCard from "../../components/ClassCard";
import { useAuth } from "../../hooks/AuthContext";
import { useEffect, useState } from "react";
import { useStudent } from "../../hooks/StudentContext";

const Home = () => {
	const {
		weekSchedules,
		monthSchedules,
		getDisciplines,
		getMonthSchedules,
		getWeekSchedules,

		selectedWeekday,
		setSelectedWeekday,
	} = useStudent();

	const todayDate = formatDate(new Date(), {
		month: "long",
		day: "numeric",
	});

	useEffect(() => {
		getDisciplines();
		getWeekSchedules();
		getMonthSchedules();
	}, []);

	const currentDaySchedules = weekSchedules.filter(
		({ weekday }) => weekday === selectedWeekday
	);

	return (
		<View style={globalStyles.container}>
			<Header />
			<View style={styles.header}>
				<View>
					<Text style={globalStyles.subtitle}>{todayDate}</Text>
					<Text style={globalStyles.title}>Hoje</Text>
				</View>
				<TouchableOpacity style={styles.actionAlertButton}>
					<Plus color={theme.colors.white} width={18} />
					<Text style={styles.actionAlertButtonText}>Emitir alerta</Text>
				</TouchableOpacity>
			</View>
			<View style={styles.scheduleListHeader}>
				{[0, 1, 2, 3, 4, 5, 6].map((item) => (
					<DayCard
						key={item.toString()}
						day={`${item + 5}`}
						weekday={item}
						selectedWeekday={selectedWeekday}
						onSelectWeekday={(weekday) => setSelectedWeekday(weekday)}
					/>
				))}
			</View>
			
			<ScrollView showsVerticalScrollIndicator={false}>
				<View style={styles.scheduleListContent}>
					{currentDaySchedules.length === 0 ? (
						<Text style={globalStyles.emptyListText}>Sem aulas neste dia</Text>
					) : (
						<Text style={globalStyles.description}>Horários das aulas</Text>
					)}
					{currentDaySchedules.map((item) => (
						<ClassCard key={item.id.toString()} item={item} />
					))}
				</View>
			</ScrollView>
		</View>
	);
};

export default Home;
