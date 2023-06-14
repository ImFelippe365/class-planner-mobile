import { View, Text, TouchableOpacity } from "react-native";

import { shortWeekdays } from "../../utils/weekdays";
import styles from "./styles";

const DayCard = ({ weekday, day, onSelectWeekday }) => {
	const currentDayName = shortWeekdays[weekday];

	const today = new Date();
	const todayWeekday = today.getDay() - 1;

	return (
		<TouchableOpacity
			onPress={onSelectWeekday}
			style={[
				styles.cardContainer,
				todayWeekday === weekday && styles.cardContainerActive,
			]}
		>
			<Text
				style={[
					styles.cardDayName,
					todayWeekday === weekday && styles.cardTextActive,
				]}
			>
				{currentDayName}
			</Text>
			<Text
				style={[
					styles.cardDay,
					todayWeekday === weekday && styles.cardTextActive,
				]}
			>
				{day}
			</Text>
		</TouchableOpacity>
	);
};

export default DayCard;
