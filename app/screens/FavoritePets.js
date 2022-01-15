import React from "react";
import { FlatList, Image, View, TouchableOpacity } from "react-native";
import AppSVG from "../reusables/AppSVG";
import AppText from "../reusables/AppText";
import Icon from "../../assets/icons/heart-fill.svg";

const dogs = [
  {
    id: 1,
    name: "blabla",
    image: require("../../assets/images/test.png"),
    icon: Icon,
  },
  {
    id: 2,
    name: "blabla",
    image: require("../../assets/images/test.png"),
    icon: Icon,
  },
  {
    id: 3,
    name: "blabla",
    image: require("../../assets/images/test.png"),
    icon: Icon,
  },
];

const FavoritePets = () => {
  return (
    <View style={styles.container}>
      {dogs.length == 0 ? (
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
            data={dogs}
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
                    source={item.image}
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
                      width={"60%"}
                      fontSize={16}
                      title={`${item.name}`}
                    />
                    <AppSVG svgName={item.icon} />
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
