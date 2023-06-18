import { View, Text } from "react-native";
import styles from "./styles";
import { User } from "react-native-feather";
import theme from "../../styles/theme";
import { formatDisciplineName } from "./../../utils/formatDisciplineName";

const ClassCard = ({ item }) => {
	const currentTime = new Date().getTime();

	const discipline = item.canceled_class
		? ""
		: formatDisciplineName(item.discipline.name);
	
	const teachers = item.canceled_class
		? []
		: item.discipline.taught_by.map(({ teacher }) => teacher.name);

	return (
		<View style={styles.cardContainer}>
			<Text style={styles.classTime}>
				{item.start_time} até {item.end_time}
			</Text>
			<Text style={styles.classDiscipline}>{discipline}</Text>

			<View style={styles.classTeacherContainer}>
				<User color={theme.colors.primary} width={16} />
				<Text numberOfLines={2} style={styles.classTeacher}>
					{teachers.join(" / ")}
				</Text>
			</View>
		</View>
	);
};

export default ClassCard;
