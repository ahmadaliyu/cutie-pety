import React, { useCallback, useEffect, useState } from "react";
import {
  ActivityIndicator,
  FlatList,
  RefreshControl,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { fetchPets } from "../redux/petSlice";
import AppText from "../reusables/AppText";
import Colors from "../utils/Colors";
import PetsItem from "../components/PetsItem";
import { toggler } from "../helpers/toggler";
import { pushAsFavorite } from "../redux/petReducer";
import { NoDataItem, TextItem } from "../components/FlatListComponent";

// const _HEIGHT = Dimensions.get(window).height;

const PetList = () => {
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

  let petsToRender = [];
  if (petReducer.pets.length != 0) {
    petReducer.pets.map((pet) => {
      petsToRender.push({
        id: pet.id,
        name: pet.name,
        url: pet.image.url,
        toggled: false,
      });
    });
  }

  const [lists, setList] = useState(petsToRender);

  // This is to make sure the list is always sorted
  const sortedlist = lists.sort((a, b) => (a.id > b.id ? 1 : -1));

  const favoritePets = () => {
    let fav = [];
    sortedlist.forEach((elm) => {
      if (elm.toggled) {
        fav.push({
          id: elm.id,
          name: elm.name,
          url: elm.url,
        });
      }
    });
    return fav;
  };

  useEffect(() => {
    dispatch(pushAsFavorite(favoritePets()));
  }, [favoritePets().length]);

  useEffect(() => {
    if (petsToRender.length != 0) setList(petsToRender);
  }, [petsToRender.length]);

  useEffect(() => {
    if (petReducer.status === "idle") dispatch(fetchPets());
  }, [petReducer.status]);

  if (petReducer.status == "loading") {
    return (
      <View style={styles.indicator}>
        <ActivityIndicator color={Colors.danger} size={"large"} />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={sortedlist}
        showsVerticalScrollIndicator={false}
        onEndReached={() => {}}
        onEndReachedThreshold={0.7}
        initialNumToRender={9}
        removeClippedSubviews={true}
        updateCellsBatchingPeriod={100}
        getItemLayout={(data, index) => ({
          length: 100,
          offset: 100 * 0.7,
          index,
        })}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
            colors={[Colors.danger]}
          />
        }
        keyExtractor={(item, index) => index}
        renderItem={({ item }) => {
          return (
            <PetsItem
              onToggle={() => {
                toggler(setList, item);
              }}
              item={item}
            />
          );
        }}
        ListHeaderComponent={() => {
          return <TextItem title={"All Dogs"} />;
        }}
        ListEmptyComponent={() => {
          return <NoDataItem onReload={handleReload} />;
        }}
      />
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
    backgroundColor: Colors.default,
  },
});

export default PetList;
