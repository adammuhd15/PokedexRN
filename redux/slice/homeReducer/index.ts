import { createSlice } from "@reduxjs/toolkit"

// Local imports
import type { RootState } from "../../store";
import { HomeReducerProps } from "./HomeReducerProps";

// Define the initial state using that type
const initialState: HomeReducerProps = {
  pokemonList: [],
  offSetNumber: 0,
  isFetching: true,
  pokemonName: [],
}

export const homeSlice = createSlice({
  name: "homeReducer",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    resetPokemonList: (state, action) => {
      state.pokemonList = [...action.payload];
    },
    resetOffSet: (state, action) => {
      state.offSetNumber = action.payload;
    },
    updatePokemonList: (state, action) => {
      state.pokemonList = [...state.pokemonList, ...action.payload];
    },
    updateOffSet: (state, action) => {
      state.offSetNumber = state.offSetNumber + action.payload;
    },
    updateIsFetching: (state, action) => {
      state.isFetching = action.payload;
    },
    updatePokemonDetail: (state, action) => {
      state.pokemonName.push(action.payload);
    },
  },
})

export const {
  resetPokemonList,
  resetOffSet,
  updatePokemonList,
  updateOffSet,
  updateIsFetching,
  updatePokemonDetail
} = homeSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectCount = (state: RootState) => state.home;

export default homeSlice.reducer
