import React, { useCallback, useEffect, useState } from "react";
import {
  ActivityIndicator,
  Dimensions,
  FlatList,
  Image,
  RefreshControl,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { fetchPets } from "../redux/petSlice";
import AppCard from "../reusables/AppCard";
import AppSVG from "../reusables/AppSVG";
import AppText from "../reusables/AppText";
import Colors from "../utils/Colors";
import HeartOutlined from "../../assets/icons/heart-outline.svg";
import FastImage from "react-native-fast-image";

// const _HEIGHT = Dimensions.get(window).height;

const CatList = () => {
  const [refreshing, setRefreshing] = useState(false);
  const petReducer = useSelector((state) => state.petSlice);
  const dispatch = useDispatch();

  const handleReload = () => {
    dispatch(fetchPets());
  };

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 100);
    dispatch(fetchPets());
  }, []);

  useEffect(() => {
    if (petReducer.status == "idle") {
      dispatch(fetchPets());
    }
  }, []);

  if (petReducer && petReducer.pets.length == 0) {
    return (
      <View style={styles.indicator}>
        <AppText title={"No Items found"} />
        <TouchableOpacity onPress={handleReload}>
          <AppText title={"Reload"} fontSize={18} />
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <View>
      {petReducer.status === "loading" ? (
        <View style={styles.indicator}>
          <ActivityIndicator color={Colors.danger} size={"large"} />
        </View>
      ) : (
        <View style={{ margin: "3%" }}>
          <AppText
            title={"All Cats"}
            margin="3%"
            marginTop="10%"
            fontSize={16}
            fontFamily="SFSB"
          />
          <FlatList
            data={petReducer.pets}
            showsVerticalScrollIndicator={false}
            refreshControl={
              <RefreshControl
                refreshing={refreshing}
                onRefresh={onRefresh}
                colors={[Colors.danger]}
              />
            }
            renderItem={({ item }) => {
              return (
                <View
                  key={item.id}
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
                    marginVertical: "3%",
                    marginHorizontal: "3%",
                  }}
                >
                  <View style={{ alignItems: "center", flexDirection: "row" }}>
                    <FastImage
                      source={{
                        uri: item.image.url,
                        priority: "high",
                      }}
                      style={{ width: 45, height: 45, borderRadius: 10 }}
                    />

                    <AppText title={item.name} fontSize={16} marginLeft="10%" />
                  </View>
                  <TouchableOpacity>
                    <AppSVG svgName={HeartOutlined} width={22} height={22} />
                  </TouchableOpacity>
                </View>
              );
            }}
          />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.default,
  },
  indicator: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginVertical: "100%",
  },
  noItem: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default CatList;
