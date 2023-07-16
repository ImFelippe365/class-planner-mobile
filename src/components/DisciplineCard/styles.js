import { StyleSheet } from "react-native";
import theme from "../../styles/theme";

const styles = StyleSheet.create({
	cardContainer: {
		width: '48%',
		backgroundColor: theme.colors.shadowPrimary,
		borderRadius: 16,
		paddingVertical: 16,
		paddingHorizontal: 16
	},

	cardHeader: {
		marginTop: 8,
		
	},

	disciplineCode: {
		color: theme.colors.gray,
		fontFamily: theme.fonts.regular,
		fontSize: theme.sizes.xs
	},

	disciplineName: {
		color: theme.colors.black,
		fontFamily: theme.fonts.bold,
		fontSize: theme.sizes.base,
	},

	rowContainer: {
		gap: 4,
		flexDirection: 'row',
		alignItems: 'center'
	},

	disciplineTeachers: {
		color: theme.colors.gray,
		fontFamily: theme.fonts.regular,
		fontSize: theme.sizes.xs
	},

	disciplineWorkload: {
		color: theme.colors.gray,
		fontFamily: theme.fonts.regular,
		fontSize: theme.sizes.xs
	},

	textHighlight: {
		fontWeight: 'bold'
	},

	cardContent: {
		marginTop: 8,
	}

});

export default styles;
