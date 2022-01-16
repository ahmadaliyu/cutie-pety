import React, { useEffect } from "react";
import { FlatList, Image, View, TouchableOpacity } from "react-native";
import AppSVG from "../reusables/AppSVG";
import AppText from "../reusables/AppText";
import Icon from "../../assets/icons/heart-fill.svg";
import { useSelector } from "react-redux";

const FavoritePets = () => {
  const favorites = useSelector((state) => state.petSlice.favoritePets);

  // console.log(favorites);

  useEffect(() => {});
  return (
    <View style={styles.container}>
      {favorites.length == 0 ? (
        <View style={styles.noItem}>
          <AppText title={"You don't have any favorites yet"} />
          <TouchableOpacity></TouchableOpacity>
        </View>
      ) : (
        <View>
          <View style={{ margin: "3%" }}>
            <AppText
              title={"Dogs I like"}
              margin="3%"
              marginTop="10%"
              fontSize={16}
              fontFamily="SFSB"
            />
          </View>
          <FlatList
            data={favorites}
            showsVerticalScrollIndicator={false}
            onEndReached={() => {}}
            onEndReachedThreshold={0.7}
            initialNumToRender={9}
            removeClippedSubviews={true}
            numColumns={2}
            keyExtractor={(item, index) => item.id}
            renderItem={({ item }) => {
              return (
                <View style={styles.content}>
                  <Image
                    source={{ uri: item.url }}
                    style={{
                      width: "100%",
                      height: 130,
                      borderTopLeftRadius: 10,
                      borderTopRightRadius: 10,
                      borderBottomLeftRadius: 10,
                      borderBottomRightRadius: 10,
                    }}
                  />
                  <View
                    style={{
                      flexDirection: "row",
                      // alignItems: "center",
                      justifyContent: "space-between",
                      margin: "2%",
                      marginVertical: "7%",
                    }}
                  >
                    <AppText
                      width={"85%"}
                      fontSize={14}
                      title={`${item.name}`}
                    />
                    <AppSVG svgName={Icon} />
                  </View>
                </View>
              );
            }}
          />
        </View>
      )}
    </View>
  );
};

const styles = {
  container: {
    flex: 1,
    marginTop: "10%",
  },
  content: {
    paddingHorizontal: "0%",
    paddingVertical: "0%",
    width: "40%",
    marginLeft: "6.5%",
  },
  noItem: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: "70%",
  },
};

export default FavoritePets;
