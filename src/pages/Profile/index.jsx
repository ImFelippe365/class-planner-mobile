import { View, Text, Image, TouchableOpacity } from "react-native";
import { Edit, FileText, LogOut, Shield, User } from "react-native-feather";
import { useAuth } from "../../hooks/AuthContext";
import theme from "../../styles/theme";
import styles from "./styles";
import { useStudent } from "../../hooks/StudentContext";

const Profile = () => {
	const { user, logout } = useAuth();
	const { monthSchedules } = useStudent();

	return (
		<View style={styles.container}>
			<View style={styles.userImageContainer}>
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
			</View>
			<Text style={styles.userName}>{user.nome_usual}</Text>
			<Text style={styles.userEstablishment}>{user.matricula}</Text>

			<View style={styles.userConfig}>
				{/* <TouchableOpacity style={styles.configOption}>
					<Edit color={theme.colors.black} width={24} height={24} />
					<Text style={styles.configLabel}>Editar perfil</Text>
				</TouchableOpacity>
				<TouchableOpacity style={styles.configOption}>
					<Shield color={theme.colors.black} width={24} height={24} />
					<Text style={styles.configLabel}>Política de privacidade</Text>
				</TouchableOpacity>
				<TouchableOpacity style={styles.configOption}>
					<FileText color={theme.colors.black} width={24} height={24} />
					<Text style={styles.configLabel}>Termos e condições</Text>
				</TouchableOpacity> */}
				<TouchableOpacity onPress={() => logout()} style={styles.configOption}>
					<LogOut color={theme.colors.danger} width={24} height={24} />
					<Text style={[styles.configLabel, { color: theme.colors.danger }]}>
						Sair
					</Text>
				</TouchableOpacity>
			</View>
		</View>
	);
};

export default Profile;
