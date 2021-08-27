import React from "react";
import { View, Text, Button } from "react-native";

function ProfileScreen({navigation}) {
    return(
        <View>
            <Text>Profile</Text>
            <Button title="Another one" onPress={() => navigation.push("Profile")} />
            <Button title="Go Back" onPress={() => navigation.goBack()} />
            <Button title="GO to Home" onPress={() => navigation.navigate("Home")} />
        </View>
    );
};

export default ProfileScreen;