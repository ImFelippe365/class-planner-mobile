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

  title: {
    fontFamily: theme.fonts.bold,
    color: theme.colors.black,
    fontSize: theme.sizes["xl"],
  },

  subtitle: {
    fontFamily: theme.fonts.regular,
    color: theme.colors.gray,
    marginBottom: 16,
    fontSize: theme.sizes["md"],
  },

  forgetPassword: {
    color: theme.colors.primary,
    fontFamily: theme.fonts.semiBold,
    alignSelf: "flex-end",
    fontSize: theme.sizes.xs,
    marginTop: 12,
    marginBottom: 18,
  },

  signUpMessage: {
    color: theme.colors.gray,
    fontFamily: theme.fonts.regular,
    fontSize: theme.sizes.md,
    alignSelf: "center",
  },

  signUpAnchor: {
    color: theme.colors.primary,
    fontFamily: theme.fonts.semiBold,
  },

  registrationField: {
    marginBottom: 12,
  },

  passwordField: {
    marginBottom: 24,
  },

  horizontalLine: {
    marginVertical: 16,
  },

  authError: {
    color: theme.colors.danger,
    fontSize: theme.sizes.xs,
  },
});

export default styles;
