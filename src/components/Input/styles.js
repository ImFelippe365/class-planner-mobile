import { StyleSheet } from "react-native";
import theme from '../../styles/theme';

const styles = StyleSheet.create({
    input: {
        borderRadius: 8,
        borderStyle: 'solid',
        borderColor: theme.colors.lightgray,
        borderWidth: 1,
        paddingHorizontal: 14,
        paddingVertical: 12,
        height: 45,
        fontFamily: theme.fonts.regular,
        color: theme.colors.gray,
        fontSize: theme.sizes.md
    },

    container: {
        width: '100%'
    },

    label: {
        fontFamily: theme.fonts.semiBold,
        color: theme.colors.gray,
        marginBottom: 6,
        textAlign: 'left'
    },

    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 8,
        borderStyle: 'solid',
        borderColor: theme.colors.lightgray,
        borderWidth: 1,
        paddingVertical: 12,
        paddingHorizontal: 14,
        height: 45,
        fontFamily: theme.fonts.regular,
        color: theme.colors.gray,
        fontSize: theme.sizes.md
    },

    inputContent: {
        flex: 1,
        fontFamily: theme.fonts.regular,
        color: theme.colors.gray
    },

    errorText: {
        color: theme.colors.danger,
        fontSize: theme.sizes.xs,
        marginTop: 4
    },

    errorMode: {
        color: theme.colors.danger,
        borderColor: theme.colors.danger,
    },
})

export default styles;