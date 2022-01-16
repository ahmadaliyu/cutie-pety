import React from "react";
import { View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Colors from "../utils/Colors";
import AppSVG from "../reusables/AppSVG";
import PetList from "../screens/PetList";
import FavoritePets from "../screens/FavoritePets";
import HeartIcon from "../../assets/icons/heart.svg";
import CatIcon from "../../assets/icons/cat-dark.svg";

const Tab = createBottomTabNavigator();

const TabNavigator = (props) => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarActiveTintColor: Colors.dark,
        tabBarInactiveTintColor: Colors.light,
        tabBarActiveBackgroundColor: "#F2F8E7",
        tabBarInactiveBackgroundColor: "#FFFFFF",
        tabBarItemStyle: { backgroundColor: Colors.default },
        tabBarLabelStyle: {
          fontFamily: "SFB",
          fontSize: 13,
          marginBottom: "10%",
        },
        tabBarStyle: [
          {
            display: "flex",
            height: "10%",
          },
          null,
        ],
        tabBarIcon: ({ focused, color, size }) => {
          let IconComponent;

          if (route.name === "All Dogs") {
            IconComponent = CatIcon;
          } else if (route.name === "Dogs I like") {
            IconComponent = HeartIcon;
          }

          return (
            <View>
              <AppSVG
                marginTop="4%"
                width={25}
                height={25}
                svgName={IconComponent}
              />
            </View>
          );
        },
      })}
      initialRouteName="All Dogs"
    >
      <Tab.Screen name="All Dogs" component={PetList} />
      <Tab.Screen name="Dogs I like" component={FavoritePets} />
    </Tab.Navigator>
  );
};

export default TabNavigator;
