import { StyleSheet, Platform, StatusBar } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#000000",
        //paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
    }
});

export default styles;