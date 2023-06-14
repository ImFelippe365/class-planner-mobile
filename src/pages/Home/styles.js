import { StyleSheet } from "react-native";
import theme from "../../styles/theme";

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		alignItems: "flex-start",
		padding: 24,
		width: "100%",
		backgroundColor: theme.colors.white,
	},

	header: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between'
	},

	actionAlertButton: {
		backgroundColor: theme.colors.primary,
		borderRadius: 16,
		flexDirection: 'row',
		height: 40,
		justifyContent: "center",
		alignItems: 'center',
		gap: 4,
		width: 120
	},

	actionAlertButtonText: {
		color: theme.colors.white,
		fontSize: theme.sizes.md,
		fontFamily: theme.fonts.regular
	},

	scheduleListHeader: {
		marginTop: 18,
		flexDirection: 'row',
		justifyContent: 'space-between',
		paddingBottom: 16
	},

	scheduleListContent: {
		gap: 8
	}
});

export default styles;