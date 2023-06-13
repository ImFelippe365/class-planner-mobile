import { StyleSheet } from "react-native";
import theme from './../../styles/theme';


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 24,
        width: '100%',
        backgroundColor: theme.colors.white
    },

    userEstablishment: {
        fontFamily: theme.fonts.regular,
        fontSize: theme.sizes.md,
        color: theme.colors.gray
    },

    userImageContainer: {
        marginBottom: 12,
        position: 'relative'
    },

    userImage: {
        aspectRatio: 1 / 1,
        borderRadius: 300,
        height: 160,
        width: 160,

    },

    userImageLoading: {
        backgroundColor: theme.colors.shadowWhite,
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 128,
        zIndex: 99
    },

    userWithoutImage: {
        backgroundColor: theme.colors.shadowPrimary,
        justifyContent: 'center',
        alignItems: 'center'
    },

    userName: {
        fontFamily: theme.fonts.bold,
        color: theme.colors.black,
        fontSize: theme.sizes['xl']
    },

    imageEditButton: {
        backgroundColor: theme.colors.primary,
        borderRadius: 64,
        width: 30,
        height: 30,
        justifyContent: 'center',
        alignItems: 'center',
        right: 10,
        top: 10,
        position: 'absolute',
        zIndex: 99
    },

    userConfig: {
        marginTop: 24,
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        width: '100%'
    },

    configOption: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 18
    },

    configLabel: {
        fontFamily: theme.fonts.semiBold,
        color: theme.colors.black,
        fontSize: theme.sizes.lg,
        marginLeft: 18
    }
})

export default styles;