import { StyleSheet } from "react-native";
import theme from "../../styles/theme";

const styles = StyleSheet.create({
  container: {
    justifyContent: "flex-end",
    alignItems: "center",
    ...StyleSheet.absoluteFillObject,
    backgroundColor: theme.colors.shadow,
    zIndex: 1,
  },

  content: {
    width: '100%',
    backgroundColor: theme.colors.background,
    paddingTop: 24,
    paddingBottom: 24,
    paddingHorizontal: 24,
    borderTopStartRadius: 24,
    borderTopEndRadius: 24,
    elevation: 4,
  },

	closeButtonContainer: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'flex-end'
	},

	title: {
		fontFamily: theme.fonts.bold,
		fontSize: 20,
		color: theme.colors.black
	},

	description: {
		fontFamily: theme.fonts.regular,
		fontSize: 14,
		marginTop: 8,
		marginBottom: 24,
		color: theme.colors.gray
	},

	childrenContainer: {
		marginBottom: 24,
		gap: 6,
		marginTop: 12
	}
	
});

export default styles;
