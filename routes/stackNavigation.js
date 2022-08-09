import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SafeAreaProvider } from "react-native-safe-area-context";
import Home from "../screens/home";
import Details from "../screens/details";

const Stack = createStackNavigator();

function StackNavigation() {
  return (
    <SafeAreaProvider>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Details" component={Details} />
      </Stack.Navigator>
    </SafeAreaProvider>
  );
}

export default StackNavigation;
