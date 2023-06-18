import { StyleSheet } from "react-native";
import theme from "../../styles/theme";

const styles = StyleSheet.create({
  
	cardContainer: {
		width: '13%',
		justifyContent: 'center',
		alignItems: 'center',
		paddingHorizontal: 4,
		paddingVertical: 8,
		backgroundColor: theme.colors.white,
		borderRadius: 8
	},
	
	cardDayName: {
		fontFamily: theme.fonts.regular,
		color: theme.colors.gray,
		fontSize: 10
	},

	cardDay: {
		fontFamily: theme.fonts.bold,
		color: theme.colors.gray,
		fontSize: 20
	},

	cardContainerActive: {
		backgroundColor: theme.colors.primary
	},

	cardTextActive: {
		color: theme.colors.white
	}
	
});

export default styles;
