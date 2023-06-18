import { View, Text, TouchableOpacity } from "react-native";

import { shortWeekdays } from "../../utils/weekdays";
import styles from "./styles";

const DayCard = ({ weekday, day, selectedWeekday, onSelectWeekday }) => {
	const currentDayName = shortWeekdays[weekday];
	
	return (
		<TouchableOpacity
			onPress={() => onSelectWeekday(weekday)}
			style={[
				styles.cardContainer,
				selectedWeekday === weekday && styles.cardContainerActive,
			]}
		>
			<Text
				style={[
					styles.cardDayName,
					selectedWeekday === weekday && styles.cardTextActive,
				]}
			>
				{currentDayName}
			</Text>
			<Text
				style={[
					styles.cardDay,
					selectedWeekday === weekday && styles.cardTextActive,
				]}
			>
				{day}
			</Text>
		</TouchableOpacity>
	);
};

export default DayCard;
