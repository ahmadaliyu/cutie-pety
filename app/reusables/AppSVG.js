import React from "react";
import { View } from "react-native";
import { SvgXml } from "react-native-svg";

const AppSVG = ({ style, svgName, alignItems, ml, mr, mb, mt, ...props }) => {
  return (
    <View
      style={[
        style,
        {
          alignItems: alignItems,
          ...props,
        },
      ]}
    >
      <SvgXml {...props} xml={svgName} />
    </View>
  );
};

export default AppSVG;
