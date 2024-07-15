import { StyleSheet } from "react-native";
import { ThemeStore } from "../../mobx/theme";

export const styles = StyleSheet.create({
    test: {
        position: 'absolute',
        bottom: 10,
        left: 10,
        right: 10,

        backgroundColor: ThemeStore.theme.LightColor,
        borderRadius: 10,
    }
})