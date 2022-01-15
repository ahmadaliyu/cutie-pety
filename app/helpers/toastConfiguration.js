import React from "react";
import { View, Text } from "react-native";

const toastBody = (props) => (
  <View>
    <View style={{ marginLeft: "5%" }}>
      <Text
        style={{
          fontFamily: "SFR",
          fontSize: 16,
          marginTop: "2%",
          lineHeight: 20,
          color: "#FFFFFF",
        }}
      >
        {props.subTitle}
      </Text>
    </View>
  </View>
);
export const toastConfig = {
  success: ({ text, props, ...rest }) => (
    <View
      style={{
        width: "93%",
        backgroundColor: "rgba(105, 240, 174, 1)",
        padding: "3%",
        borderRadius: 10,
        marginTop: "2%",
      }}
    >
      {toastBody(props)}
    </View>
  ),
  error: ({ text, props, ...rest }) => (
    <View
      style={{
        width: "93%",
        backgroundColor: "rgba(253, 39, 39, 0.6)",
        padding: "3%",
        borderRadius: 10,
        marginTop: "2%",
      }}
    >
      {toastBody(props)}
    </View>
  ),
  info: ({ text, props, ...rest }) => (
    <View
      style={{
        width: "93%",
        backgroundColor: "#2691CB",
        padding: "3%",
        borderRadius: 10,
        marginTop: "2%",
      }}
    >
      {toastBody(props)}
    </View>
  ),
  warning: ({ text, props, ...rest }) => (
    <View
      style={{
        width: "93%",
        backgroundColor: "#FDBF00",
        padding: "3%",
        borderRadius: 10,
        marginTop: "2%",
      }}
    >
      {toastBody(props)}
    </View>
  ),
};
