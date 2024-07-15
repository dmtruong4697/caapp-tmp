import { StyleSheet } from "react-native";
import { colors } from "../../../styles/colors";
import { scale } from "../../../styles/scale";
import { ThemeStore } from "../../../mobx/theme";

export const styles = StyleSheet.create({
    viewContainer: {
        flex: 1,
        padding: scale(12),
    },

    txtTitle: {
        fontSize: 24,
        fontWeight: '500',
        color: colors.PrimaryText,

        marginTop: scale(20),
        marginBottom: scale(15),
    },

    txtSub: {
        fontSize: 16,
        fontWeight: '400',
        color: colors.SecondText,

        marginBottom: scale(35),
    },

    viewFormContainer: {
        width: '100%',
        flexDirection: 'column',
        gap: scale(10),

        marginBottom: scale(15),
    },

    viewOption: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',

        marginBottom: scale(15),
    },

    txtOption: {
        fontSize: 14,
        fontWeight: '400',
        color: ThemeStore.theme.PrimaryColor,
    },

    viewButtonGroup: {
        width: '100%',
        gap: scale(10),
        flexDirection: 'column',

        marginBottom: scale(15),
        marginTop: scale(30),

        position: 'absolute',
        bottom: scale(10),
        alignSelf: 'center',
    },
})