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

	iconButtonContainer: {
		borderRadius: 16,
		flexDirection: 'row',
		justifyContent: "center",
		alignItems: 'center',
	},

	scheduleListHeader: {
		marginTop: 18,
		flexDirection: 'row',
		justifyContent: 'space-between',
		paddingBottom: 16
	},

	scheduleListContent: {
		gap: 8
	},

	buttonsContainer: {
		flexDirection: 'row',
		alignItems: 'center',
		gap: 24

	}
});

export default styles;
