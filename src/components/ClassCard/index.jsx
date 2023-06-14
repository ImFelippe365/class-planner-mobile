import { View, Text } from "react-native";

import styles from "./styles";
import { User } from "react-native-feather";
import theme from "../../styles/theme";

const ClassCard = () => {

	const currentTime = new Date();

	return (
		<View style={styles.cardContainer}>
			<Text style={styles.classTime}>13:00 até 14:30</Text>
			<Text style={styles.classDiscipline}>Arquitetura de Software</Text>

			<View style={styles.classTeacherContainer}>
				<User color={theme.colors.primary} width={16} />
				<Text numberOfLines={1} style={styles.classTeacher}>
					Raphael de Carvalho
				</Text>
			</View>
		</View>
	);
};

export default ClassCard;
