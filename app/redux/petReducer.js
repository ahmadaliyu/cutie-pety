import { createSlice } from "@reduxjs/toolkit";
import { fetchPets } from "./petSlice";

const initialState = {
  pets: [],
  favoritePets: [],
  status: "idle",
  error: null,
};

const petSlice = createSlice({
  name: "fetch-pets",
  initialState,
  reducers: {
    pushToFavorites: (state, action) => {
      state.favoritePets = action.payload;
    },
  },
  extraReducers: {
    [fetchPets.pending]: (state, action) => {
      state.status = "loading";
    },
    [fetchPets.fulfilled]: (state, action) => {
      state.status = "succeeded";
      state.error = null;
      state.pets = action.payload;
    },
    [fetchPets.rejected]: (state, action) => {
      state.status = "error";
      state.error = action.error.message;
    },
  },
});

export default petSlice.reducer;

export const PetReducer = (state) => state.petSlice;

//action creators
export const pushAsFavorite = (state) =>
  petSlice.actions.pushToFavorites(state);
