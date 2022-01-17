import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import * as Font from "expo-font";
import Toast from "react-native-toast-message";
import { useState } from "react";
import AppLoading from "expo-app-loading";
import { NavigationContainer } from "@react-navigation/native";
import { Provider } from "react-redux";
import store from "./app/redux/store";
import RootStackNavigator from "./app/navigation/RootStackNavigator";
import { toastConfig } from "./app/helpers/toastConfiguration";

const fetchFonts = () => {
  return Font.loadAsync({
    SFB: require("./assets/fonts/SourceSansPro-Bold.ttf"),
    SFR: require("./assets/fonts/SourceSansPro-Regular.ttf"),
    SFSB: require("./assets/fonts/SourceSansPro-SemiBold.ttf"),
  });
};

export default function App() {
  const [fontLoaded, setFontLoaded] = useState();

  if (!fontLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => {
          setFontLoaded(true);
        }}
        onError={console.warn}
      />
    );
  }
  return (
    <Provider store={store}>
      <View style={styles.container}>
        <NavigationContainer>
          <RootStackNavigator />
          <Toast config={toastConfig} />
        </NavigationContainer>
        <StatusBar style="auto" />
      </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    // marginTop: 5,
  },
});
