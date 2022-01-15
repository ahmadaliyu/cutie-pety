import React from "react";
import { Text, View } from "react-native";

function AppText({
  title,
  color = "#333333",
  fontSize = 14,
  textAlign,
  width,
  style,
  fontFamily = "SFR",
  lineHeight = 18,
  alignItems,
  textStyle,
  ...otherProps
}) {
  return (
    <View
      style={[
        otherProps.style,
        style,
        {
          alignItems: alignItems,
          width: width,
          ...otherProps,
        },
      ]}
    >
      <Text
        style={[
          {
            color: color,
            fontSize: fontSize,
            textAlign: textAlign,
            fontFamily: fontFamily,
            lineHeight: lineHeight,
          },
        ]}
      >
        {title}
      </Text>
    </View>
  );
}

export default AppText;
