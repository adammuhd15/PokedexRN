import React, { useRef, useEffect, useCallback } from "react";
import {
  SafeAreaView,
  View,
  Text,
  ActivityIndicator,
  RefreshControl,
  FlatList,
  StyleSheet,
  ViewStyle,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { useScrollToTop } from "@react-navigation/native";
import { useBottomTabBarHeight } from "@react-navigation/bottom-tabs";

// Local imports
import { HomeStackNavProps } from "../../navigation/stacks/main/HomeStackParamList";
import * as Colors from "../../constants/Colors";
import PokemonCard from "../../components/main/PokemonCard";
import { getAllPokemon, getThatPokemonInfo } from "../../services/api/pokemon_list";
import {
  resetPokemonList,
  resetOffSet,
  updatePokemonList,
  updateOffSet,
  updateIsFetching,
  updatePokemonDetail,
} from "../../redux/slice/homeReducer";
import { capitalizeFirstAlphabet } from "../../services/helper/CapitalizeFirst";
import { AppDispatch, RootState } from "../../redux/store";
import { PokemonProps } from "../../utils/pokemon/AllPokemonProps";
import { GetPokemonDetailsProps } from "../../utils/pokemon/PokemonDetailProps";
import { HomeStyleProps } from "./HomeProps";

const HomeScreen: React.FC<HomeStackNavProps<"Home">> = (props) => {
  const scrollToTop = useRef<null>(null); // For scroll to top when tap on Home Tab.
  useScrollToTop(scrollToTop);
  // Bottom tab height reference
  const bottomTabHeight = useBottomTabBarHeight();
  // Scrolling reference end
  const dispatch = useDispatch<AppDispatch>();
  const pokemonList = useSelector<RootState, PokemonProps[]>((state) => state.home.pokemonList);
  const offSetNumber = useSelector<RootState, number>((state) => state.home.offSetNumber);
  const isFetching = useSelector<RootState, boolean>((state) => state.home.isFetching);
  const pokemonName = useSelector<RootState, GetPokemonDetailsProps[]>((state) => state.home.pokemonName);

  const loadPokemonList = async () => {
    try {
      let response = await getAllPokemon(offSetNumber);
      if (offSetNumber === 0) {
        dispatch(resetPokemonList(response.results));
      } else {
        dispatch(updatePokemonList(response.results));
      }
    }
    catch (error) {
      console.log(error);
    }
    finally {
      dispatch(updateIsFetching(false));
    }
  }

  const handleCallDetails = useCallback(async (pokemonID: string) => {
    let searchPokemon = pokemonName.find((value) => value.name === pokemonID)
    if (searchPokemon) {
      props.navigation.navigate("Detail", {
        pokemonInformation: searchPokemon,
        name: capitalizeFirstAlphabet(searchPokemon.name),
      });
    } else {
      try {
        let response = await getThatPokemonInfo(pokemonID);
        dispatch(updatePokemonDetail(response));
        props.navigation.navigate("Detail", {
          pokemonInformation: response,
          name: pokemonID,
        });
      }
      catch (error) {
        console.log(error);
      }
    }
  }, [pokemonName]);

  const handleFetchMore = async () => {
    dispatch(updateOffSet(20));
    dispatch(updateIsFetching(true));
  }

  const handleResetPokemonList = async () => {
    dispatch(resetOffSet(0));
    dispatch(updateIsFetching(true));
  }
  
  useEffect(() => {
    if (isFetching) {
      loadPokemonList();
    }
  }, [isFetching])

  return (
    <SafeAreaView style={homeStyles.homeContainer}>
      <FlatList
        ref={scrollToTop}
        data={pokemonList}
        renderItem={({ item, index }) => (
          <PokemonCard
            item={item}
            index={index}
            onDetailPressItem={handleCallDetails}
            pokemonName={pokemonName}
          />
        )}
        style={homeStyles.homeFlatList}
        keyExtractor={(_, index) => index.toString()}
        ListEmptyComponent={() => (
          <View style={homeStyles.homeEmptyContainer}>
            <Text style={homeStyles.homeEmptyText}>Empty List</Text>
          </View>
        )}
        ListFooterComponent={() => {
          if (isFetching) {
            return (
              <ActivityIndicator
                size={"large"}
                color={Colors.primaryTheme}
                style={activityIndicatorStyle(bottomTabHeight)}
              />
            );
          }
        }}
        onEndReached={handleFetchMore}
        onEndReachedThreshold={1}
        refreshControl={
          <RefreshControl
            refreshing={isFetching}
            onRefresh={handleResetPokemonList}
            tintColor={Colors.primaryTheme}
            title="Pull to refresh"
            titleColor={Colors.primaryTheme}
          />
        }
      />
    </SafeAreaView>
  );
}

// Function for dynamic style
const activityIndicatorStyle = (bottomTabHeight: number): ViewStyle => ({
  paddingBottom: bottomTabHeight,
});

const homeStyles = StyleSheet.create<HomeStyleProps>({
  homeContainer: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  homeFlatList: {
    padding: 10,
  },
  homeEmptyContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  homeEmptyText: {
    fontWeight: "bold",
    fontSize: 20,
    color: Colors.primaryTheme,
  },
})

export default HomeScreen;
