import React from "react";
import { View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Colors from "../utils/Colors";
import AppSVG from "../reusables/AppSVG";
import CatList from "../screens/CatList";
import FavoriteCats from "../screens/FavoriteCats";
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
          fontFamily: "SFR",
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

          if (route.name === "All Cats") {
            IconComponent = CatIcon;
          } else if (route.name === "Cats I like") {
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
      initialRouteName="All Cats"
    >
      <Tab.Screen name="All Cats" component={CatList} />
      <Tab.Screen name="Cats I like" component={FavoriteCats} />
    </Tab.Navigator>
  );
};

export default TabNavigator;
