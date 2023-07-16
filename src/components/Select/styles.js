import { StyleSheet } from "react-native";
import theme from "../../styles/theme";

const styles = StyleSheet.create({
	relativeContainer: {
		position: 'relative',
		zIndex: 99,
	},

	container: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
		width: '100%',
		borderRadius: 8,
		borderStyle: "solid",
		borderColor: theme.colors.lightgray,
		borderWidth: 1,
		paddingHorizontal: 14,
		paddingVertical: 12,
		height: 45,

	},

	label: {
		fontFamily: theme.fonts.semiBold,
		color: theme.colors.gray,
		textAlign: "left",
	},

	inputContainer: {
		flexDirection: "row",
		alignItems: "center",
		borderRadius: 8,
		borderStyle: "solid",
		borderColor: theme.colors.lightgray,
		borderWidth: 1,
		paddingVertical: 12,
		paddingHorizontal: 14,
		height: 45,
	},

	selectedOptionText: {
		verticalAlign: 'middle',
		fontFamily: theme.fonts.regular,
		color: theme.colors.gray,
		fontSize: theme.sizes.md,
	},

	inputContent: {
		flex: 1,
		fontFamily: theme.fonts.regular,
		color: theme.colors.gray,
	},

	errorText: {
		color: theme.colors.danger,
		fontSize: theme.sizes.xs,
		marginTop: 4,
	},

	errorMode: {
		color: theme.colors.danger,
		borderColor: theme.colors.danger,
	},

	selectDisabled: {
		opacity: 0.5
	},

	optionsContainer: {
		position: 'absolute',
		top: 48,
		width: '100%',
		borderRadius: 8,
		borderStyle: "solid",
		borderColor: theme.colors.lightgray,
		backgroundColor: theme.colors.white,
		borderWidth: 1,
		zIndex: 99,
		height: 140,
	},

	optionButton: {
		paddingHorizontal: 14,
		paddingVertical: 12,
	},

	optionButtonText: {
		color: theme.colors.gray,
		fontFamily: theme.fonts.regular
		
	}
});

export default styles;
