import { StyleSheet } from "react-native";
import theme from "./../../styles/theme";

const styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingHorizontal: 24,
		backgroundColor: theme.colors.white,
	},

	studentRegistration: {
		fontFamily: theme.fonts.regular,
		fontSize: theme.sizes.xs,
		color: theme.colors.gray,
	},

	studentReferencePeriod: {
		fontFamily: theme.fonts.regular,
		fontSize: theme.sizes.md,
		color: theme.colors.gray,
		marginTop: 6
	},

	header: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',

	},

	profileHeader: {
		marginBottom: 12,
		position: "relative",
		flexDirection: 'row',
		alignItems: 'center',
		gap: 16,
		marginTop: 24,
	},

	logoutButton: {
		flexDirection: 'row',
		alignItems: 'center',
		gap: 8
	},

	logoutButtonText: {
		fontFamily: theme.fonts.semiBold,
		color: theme.colors.danger,

	},

	userImage: {
		aspectRatio: 1 / 1,
		borderRadius: 300,
		height: 100,
		width: 100,
	},

	userImageLoading: {
		backgroundColor: theme.colors.shadowWhite,
		position: "absolute",
		left: 0,
		right: 0,
		top: 0,
		bottom: 0,
		justifyContent: "center",
		alignItems: "center",
		borderRadius: 128,
		zIndex: 99,
	},

	userWithoutImage: {
		backgroundColor: theme.colors.shadowPrimary,
		justifyContent: "center",
		alignItems: "center",
	},

	userName: {
		fontFamily: theme.fonts.bold,
		color: theme.colors.black,
		fontSize: theme.sizes["lg"],
	},

	imageEditButton: {
		backgroundColor: theme.colors.primary,
		borderRadius: 64,
		width: 30,
		height: 30,
		justifyContent: "center",
		alignItems: "center",
		right: 10,
		top: 10,
		position: "absolute",
		zIndex: 99,
	},

	userConfig: {
		marginTop: 24,
		flexDirection: "column",
		alignItems: "flex-start",
		justifyContent: "flex-start",
		width: "100%",
	},

	configOption: {
		flexDirection: "row",
		alignItems: "center",
		padding: 18,
	},
});

export default styles;
