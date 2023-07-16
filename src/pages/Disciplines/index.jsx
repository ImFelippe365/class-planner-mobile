import { View, Text, Image, TouchableOpacity, ScrollView } from "react-native";
import { Edit, FileText, LogOut, Shield, User } from "react-native-feather";
import { useAuth } from "../../hooks/AuthContext";
import theme from "../../styles/theme";
import styles from "./styles";
import { useStudent } from "../../hooks/StudentContext";
import Header from "../../components/Header";
import globalStyles from "../../styles/globalStyles";
import DisciplineCard from "../../components/DisciplineCard";

const Disciplines = () => {
	const { user, logout } = useAuth();
	const { student, disciplines } = useStudent();


	return (
		<View style={globalStyles.container}>
			<ScrollView>
				<Header />
				<View style={styles.header}>
					<View>
						<Text style={globalStyles.subtitle}>Olá, {student.name}</Text>
						<Text style={globalStyles.title}>Suas disciplinas</Text>
					</View>
				</View>

				<View style={styles.disciplinesContainer}>
					{disciplines.map((discipline) => (
						<DisciplineCard key={discipline.id} item={discipline} />
					))}
				</View>
			</ScrollView>
		</View>
	);
};

export default Disciplines;
