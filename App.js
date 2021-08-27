import React from "react";
import { View, StatusBar } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import styles from "./style.js";

import HomeScreen from "./src/Home.js";
import ProfileScreen from "./src/Profile.js";

function App() {
	const Stack = createNativeStackNavigator();

	return(
		<View style={styles.container}>
			<StatusBar />
			<NavigationContainer>
				<Stack.Navigator initialRouteName="Home">
					<Stack.Screen name="Home" component={HomeScreen} />
					<Stack.Screen name="Profile" component={ProfileScreen} />
				</Stack.Navigator>
			</NavigationContainer>
		</View>
	);
};

export default App;