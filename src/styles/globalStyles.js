import { StyleSheet } from "react-native";
import theme from "./theme";

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: theme.colors.background,
		paddingHorizontal: 20
	},

	title: {
		fontFamily: theme.fonts.bold,
		color: theme.colors.black,
		fontSize: 28,
	},

	subtitle: {
		fontFamily: theme.fonts.regular,
		color: theme.colors.gray,
		fontSize: 12
	},

	description: {
		fontFamily: theme.fonts.regular,
		color: theme.colors.gray,
		fontSize: 12,
		marginBottom: 8
	},

	emptyListText: {
		fontFamily: theme.fonts.regular,
		color: theme.colors.gray,
		fontSize: theme.sizes.md,
		textAlign: 'center',
		marginTop: 4,
	}
});

export default styles;
