import { StyleSheet } from "react-native";
import theme from "../../styles/theme";

const styles = StyleSheet.create({
	cardContainer: {
		backgroundColor: theme.colors.white,
		borderRadius: 16,
		paddingVertical: 18,
		paddingHorizontal: 20,
	},

	cardHeader: {
		flexDirection: 'row',
		alignItems: 'center',
		gap: 6
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
	},

	cardSubstituteClass: {
		backgroundColor: theme.colors.warning + '20'
	},

	cardCanceledClass: {
		backgroundColor: theme.colors.danger + '20'
	},

	cardNowClass: {
		backgroundColor: theme.colors.primary + '20'
	},

	substituteDiscipline: {
		color: theme.colors.gray,
		fontSize: 13,
	},

	textHighlight: {
		fontWeight: 'bold'
	},

	nowClassTag: {
		backgroundColor: theme.colors.primary,
		borderRadius: 8,
		color: theme.colors.white,
		paddingVertical: 2,
		paddingHorizontal: 8,
		fontSize: 10
	},
	
	replacedClassTag: {
		backgroundColor: theme.colors.warning,
		borderRadius: 8,
		color: theme.colors.white,
		paddingVertical: 2,
		paddingHorizontal: 8,
		fontSize: 10
	},

	canceledClassTag: {
		backgroundColor: theme.colors.danger,
		borderRadius: 8,
		color: theme.colors.white,
		paddingVertical: 2,
		paddingHorizontal: 8,
		fontSize: 10
	}

});

export default styles;
