import { StyleSheet } from "react-native";
import theme from "../../styles/theme";

const styles = StyleSheet.create({
	cardContainer: {
		backgroundColor: theme.colors.shadowPrimary,
		borderRadius: 16,
		paddingVertical: 18,
		paddingHorizontal: 20
	},

	classTime: {
		color: theme.colors.gray,
		fontFamily: theme.fonts.regular,
		fontSize: theme.sizes.xs
	},

	classDiscipline: {
		color: theme.colors.black,
		fontFamily: theme.fonts.bold,
		fontSize: theme.sizes.base,
	},

	classTeacherContainer: {
		marginTop: 8,
		gap: 4,
		flexDirection: 'row',
		alignItems: 'center'
	},

	classTeacher: {
		color: theme.colors.primary,
		fontFamily: theme.fonts.regular,
		fontSize: theme.sizes.md
	}

});

export default styles;
