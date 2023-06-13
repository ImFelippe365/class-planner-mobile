import { StyleSheet } from 'react-native';
import theme from '../../styles/theme';

const styles = StyleSheet.create({
    buttonContainer: {
        backgroundColor: theme.colors.primary,
        width: '100%',
        height: 48,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 8
    },

    buttonDisabled: {
        backgroundColor: theme.colors.lightgray,
    },

    buttonText: {
        fontFamily: theme.fonts.bold,
        color: theme.colors.white,
        fontSize: theme.sizes.base
    }
})

export default styles;