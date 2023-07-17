import { View, Text } from "react-native";
import styles from "./styles";
import { User } from "react-native-feather";
import theme from "../../styles/theme";
import { formatDisciplineName } from "./../../utils/formatDisciplineName";

import { useStudent } from "./../../hooks/StudentContext";

const ClassCard = ({ item }) => {
	const { currentSchedule } = useStudent();

	const discipline = formatDisciplineName(
		item?.class_to_replace
			? item.class_to_replace.discipline.name
			: item.discipline.name
	);

	const teachers = item.class_to_replace
		? item?.class_to_replace?.teacher?.name
		: item.discipline.taught_by.map(({ name }) => name).join(" / ");

	return (
		<View
			style={[
				styles.cardContainer,
				currentSchedule?.id === item?.id && styles.cardNowClass,
				item.canceled_class && styles.cardCanceledClass,
				item.class_to_replace && styles.cardSubstituteClass,
			]}
		>
			<View style={styles.cardHeader}>
				<Text style={styles.classTime}>
					{item.start_time.slice(0, 5)} até {item.end_time.slice(0, 5)}
				</Text>
				{currentSchedule?.id === item?.id ? (
					<Text style={styles.nowClassTag}>AGORA</Text>
				) : item.class_to_replace ? (
					<Text style={styles.replacedClassTag}>Substituída</Text>
				) : (
					item.canceled_class && (
						<Text style={styles.canceledClassTag}>Cancelada</Text>
					)
				)}
			</View>
			<Text style={styles.classDiscipline}>{discipline}</Text>
			{item.class_to_replace && (
				<Text style={styles.substituteDiscipline}>
					<Text style={styles.textHighlight}>Substituindo: </Text>
					{formatDisciplineName(item?.discipline?.name)}
				</Text>
			)}

			<View style={styles.classTeacherContainer}>
				<User color={theme.colors.primary} width={16} />
				<Text numberOfLines={2} style={styles.classTeacher}>
					{teachers}
				</Text>
			</View>
		</View>
	);
};

export default ClassCard;
