import { StyleSheet } from "react-native";
import theme from "../../styles/theme";

const styles = StyleSheet.create({
  
	cardContainer: {
		width: '18%',
		justifyContent: 'center',
		alignItems: 'center',
		paddingHorizontal: 6,
		paddingVertical: 16,
		backgroundColor: theme.colors.white,
		borderRadius: 8
	},
	
	cardDayName: {
		fontFamily: theme.fonts.regular,
		color: theme.colors.gray
	},

	cardDay: {
		fontFamily: theme.fonts.bold,
		color: theme.colors.gray,
		fontSize: 24
	},

	cardContainerActive: {
		backgroundColor: theme.colors.primary
	},

	cardTextActive: {
		color: theme.colors.white
	}
	
});

export default styles;
