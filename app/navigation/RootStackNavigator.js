import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import TabNavigator from "./TabNavigator";

const Stack = createStackNavigator();

const RootStackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{ headerMode: "screen", headerShown: false }}
      presentation="none"
    >
      <Stack.Screen
        options={({ navigation }) => ({})}
        name="Tab"
        component={TabNavigator}
      />
    </Stack.Navigator>
  );
};

export default RootStackNavigator;
