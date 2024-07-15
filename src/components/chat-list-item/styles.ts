import { StyleSheet } from "react-native";
import { scale } from "../../styles/scale";

export const styles = StyleSheet.create({
    viewContainer: {
        width: '100%',
        padding: scale(3),

        flexDirection: 'row',
        alignItems: 'center',
    },

    imgGroupImage: {
        width: scale(48),
        height: scale(48),
        borderRadius: 8,

        marginRight: scale(5),
    },

    viewContentContainer: {
        flex: 1,
        flexDirection: 'column',
        gap: scale(5),
    },

    viewTopContent: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },

    viewBottomContent: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
})