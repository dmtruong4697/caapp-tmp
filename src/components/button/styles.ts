import { StyleSheet } from "react-native";
import { ThemeStore } from "../../mobx/theme";
import { colors } from "../../styles/colors";
import { scale } from "../../styles/scale";

export const styles = StyleSheet.create({
    btnContainer: {
        width: '100%',
        height: scale(52),
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 6,
        borderWidth: 1,
        borderColor: ThemeStore.theme.PrimaryColor,
        backgroundColor: ThemeStore.theme.PrimaryColor,
    },

    txtTitle: {
        fontSize: 16,
        fontWeight: '400',
        color: colors.White,
    },
})