import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import Header from "../../components/Header";
import globalStyles from "../../styles/globalStyles";
import { formatDate } from "../../utils/formatDate";
import { Send, Calendar } from "react-native-feather";
import theme from "../../styles/theme";
import styles from "./styles";
import DayCard from "../../components/DayCard";
import ClassCard from "../../components/ClassCard";
import { useAuth } from "../../hooks/AuthContext";
import { useCallback, useEffect, useState } from "react";
import { useStudent } from "../../hooks/StudentContext";
import { useNavigation } from "@react-navigation/core";
import DateTimePicker from "@react-native-community/datetimepicker";
import Modal from "../../components/Modal";
import AlertEmissionModal from "../Shared/AlertEmissionModal";

const Home = () => {
	const {
		student,
		weekSchedules,
		monthSchedules,
		getDisciplines,
		getMonthSchedules,
		getWeekSchedules,

		selectedWeekday,
		setSelectedWeekday,
		selectedDate,
		setSelectedDate,
	} = useStudent();

	const { navigate } = useNavigation();

	const [showDatePicker, setShowDatePicker] = useState(false);
	const [showAlertModal, setShowAlertModal] = useState(false);

	const toggleDatePicker = () => setShowDatePicker((visible) => !visible);

	const todayDate = formatDate(new Date(), {
		month: "long",
		day: "numeric",
	});

	useEffect(() => {
		getDisciplines();
		getWeekSchedules();
		getMonthSchedules();
	}, []);

	const currentDaySchedules = weekSchedules.filter(({ weekday }) => {
		const currentWeekday = weekday + 1 === 7 ? 0 : weekday + 1;

		return currentWeekday === selectedWeekday;
	});

	const getWeekDates = useCallback(() => {
		return [0, 1, 2, 3, 4, 5, 6].map((day) => {
			let today = selectedDate ? new Date(selectedDate) : new Date();

			while (today.getDay() !== day) {
				if (today.getDay() > day) {
					today.setDate(today.getDate() - 1);
				} else if (today.getDay() < day) {
					today.setDate(today.getDate() + 1);
				}
			}

			return today;
		});
	}, [selectedDate]);

	return (
		<View style={globalStyles.container}>
			{showDatePicker && (
				<DateTimePicker
					locale="pt-br"
					value={selectedDate ? selectedDate : new Date()}
					accentColor={theme.colors.primary}
					themeVariant="dark"
					onChange={({ type }, date) => {
						toggleDatePicker();
						if (type !== "dismissed") {
							setSelectedDate(date);
							setSelectedWeekday(date.getDay());
						}
					}}
				/>
			)}

			{showAlertModal && (
				<AlertEmissionModal
					isVisible={showAlertModal}
					setIsVisible={setShowAlertModal}
				/>
			)}

			<Header />
			<View style={styles.header}>
				<View>
					<Text style={globalStyles.subtitle}>{todayDate}</Text>
					<Text style={globalStyles.title}>Hoje</Text>
				</View>
				<View style={styles.buttonsContainer}>
					<TouchableOpacity
						onPress={() => toggleDatePicker()}
						style={styles.iconButtonContainer}
					>
						<Calendar color={theme.colors.primary} width={20} />
					</TouchableOpacity>

					{student?.student_class?.class_leader_id === student.id.toString() && (
						<TouchableOpacity
							onPress={() => setShowAlertModal(true)}
							style={styles.iconButtonContainer}
						>
							<Send color={theme.colors.primary} width={20} />
						</TouchableOpacity>
					)}
				</View>
			</View>
			<View style={styles.scheduleListHeader}>
				{getWeekDates().map((date) => (
					<DayCard
						key={date.getDay().toString()}
						day={date.getDate()}
						weekday={date.getDay()}
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
