import React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import AppText from "../reusables/AppText";
import Colors from "../utils/Colors";

export const TextItem = ({ title }) => {
  return (
    <AppText
      title={title}
      margin="3%"
      marginTop="10%"
      fontSize={16}
      fontFamily="SFSB"
    />
  );
};

export const NoDataItem = ({ onReload }) => {
  return (
    <View style={styles.noItem}>
      <AppText title={"No Items found"} />
      <TouchableOpacity onPress={onReload}>
        <AppText title={"Reload"} fontSize={18} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  noItem: {
    flex: 1,
    alignItems: "center",
    backgroundColor: Colors.default,
    marginTop: "70%",
  },
});
