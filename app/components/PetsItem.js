import React, { memo } from "react";
import { Image, View, TouchableOpacity } from "react-native";
import AppSVG from "../reusables/AppSVG";
import AppText from "../reusables/AppText";
import HeartOutlined from "../../assets/icons/heart-outline.svg";
import HeartRed from "../../assets/icons/heart-fill.svg";
import FastImage from "react-native-fast-image";

const PetsItem = ({ item, onToggle }) => {
  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginVertical: "3%",
        marginHorizontal: "3%",
      }}
    >
      <View
        style={{
          alignItems: "center",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <FastImage
          source={
            item.url
              ? {
                  uri: item.url,
                  priority: FastImage.priority.high,
                }
              : require("../../assets/icons/placeholder.png")
          }
          style={{ width: 45, height: 45, borderRadius: 10 }}
        />

        <AppText title={item.name} fontSize={16} marginLeft={10} />
      </View>
      <TouchableOpacity activeOpacity={0.7} onPress={onToggle}>
        {item.toggled ? (
          <AppSVG svgName={HeartRed} width={27} height={27} />
        ) : (
          <AppSVG svgName={HeartOutlined} width={27} height={27} />
        )}
      </TouchableOpacity>
    </View>
  );
};

export default memo(PetsItem);
