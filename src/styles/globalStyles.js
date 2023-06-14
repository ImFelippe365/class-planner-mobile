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
	}
});

export default styles;
