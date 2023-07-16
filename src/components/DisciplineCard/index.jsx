import { View, Text } from "react-native";
import styles from "./styles";
import { BookOpen, Clock, User } from "react-native-feather";
import theme from "../../styles/theme";
import { formatDisciplineName } from "./../../utils/formatDisciplineName";

const DisciplineCard = ({ item }) => {
	return (
		<View style={styles.cardContainer}>
			<BookOpen color={theme.colors.primary} />
			<View style={styles.cardHeader}>
				<Text style={styles.disciplineCode}>{item.code}</Text>
				<Text style={styles.disciplineName}>
					{formatDisciplineName(item.name)}
				</Text>
			</View>

			<View style={styles.cardContent}>
				{item.taught_by.map((teacher) => (
					<View key={teacher.id} style={styles.rowContainer}>
						<User color={theme.colors.gray} width={16} />
						<Text numberOfLines={2} style={styles.disciplineTeachers}>
							{teacher.name}
						</Text>
					</View>
				))}

				<View style={styles.rowContainer}>
					<Clock color={theme.colors.gray} width={16} />
					<Text numberOfLines={2} style={styles.disciplineWorkload}>
						{item.workload_in_clock}h/{item.workload_in_class} aulas
					</Text>
				</View>
			</View>
		</View>
	);
};

export default DisciplineCard;
