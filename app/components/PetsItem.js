import React, { memo, useMemo } from "react";
import { Image, View, TouchableOpacity } from "react-native";
import AppSVG from "../reusables/AppSVG";
import AppText from "../reusables/AppText";
import HeartOutlined from "../../assets/icons/heart-outline.svg";
import HeartRed from "../../assets/icons/heart-fill.svg";

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
        <Image
          source={
            item.url
              ? {
                  uri: item.url,

                  cache: "only-if-cached",
                }
              : require("../../assets/icons/placeholder.png")
          }
          style={{ width: 45, height: 45, borderRadius: 10 }}
        />

        <AppText title={item.name} fontSize={16} marginLeft={10} />
      </View>
      <TouchableOpacity activeOpacity={0.7} onPress={onToggle}>
        {item.toggled ? (
          <AppSVG svgName={HeartRed} width={22} height={22} />
        ) : (
          <AppSVG svgName={HeartOutlined} width={22} height={22} />
        )}
      </TouchableOpacity>
    </View>
  );
};

export default memo(PetsItem);
