import { View, Text, Image, TouchableOpacity } from "react-native";
import { Edit, FileText, LogOut, Shield, User } from "react-native-feather";
import { useAuth } from "../../hooks/AuthContext";
import theme from "../../styles/theme";
import styles from "./styles";
import { useStudent } from "../../hooks/StudentContext";
import globalStyles from "./../../styles/globalStyles";
import Header from "../../components/Header";

const Profile = () => {
	const { user, logout } = useAuth();
	const { student } = useStudent();

	return (
		<View style={styles.container}>
			<Header />
			<View style={styles.header}>
				<View>
					<Text style={globalStyles.subtitle}>Olá, {student.name}</Text>
					<Text style={globalStyles.title}>Seu perfil</Text>
				</View>
				<TouchableOpacity onPress={() => logout()} style={styles.logoutButton}>
					<LogOut color={theme.colors.danger} width={20} height={20} />
					<Text style={styles.logoutButtonText}>Sair</Text>
				</TouchableOpacity>
			</View>

			<View style={styles.profileHeader}>
				<View style={{ position: "relative" }}>
					{user.url_foto_150x200 ? (
						<Image
							source={{
								uri: `https://suap.ifrn.edu.br/${user.url_foto_150x200}`,
							}}
							style={styles.userImage}
						/>
					) : (
						<View style={[styles.userImage, styles.userWithoutImage]}>
							<User width={65} height={65} color={theme.colors.primary} />
						</View>
					)}
				</View>
				<View style={styles.student}>
					<Text style={styles.studentRegistration}>{student.registration}</Text>
					<Text style={styles.userName}>{student.name}</Text>
					<Text style={styles.studentReferencePeriod}>
						{student.student_class.course.byname} -{" "}
						{student.student_class.reference_period}°{" "}
						{student.student_class.course.degree === "Ensino superior"
							? "período"
							: "ano"}
					</Text>
				</View>
			</View>

			<View style={styles.userConfig}>
				
			</View>
		</View>
	);
};

export default Profile;
