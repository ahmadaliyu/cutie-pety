import { createSlice } from "@reduxjs/toolkit";
import { favorites, fetchPets } from "./petSlice";

const initialState = {
  pets: [],
  favoritePets: [],
  status: "idle",
  error: null,
};

const petSlice = createSlice({
  name: "fetch-pets",
  initialState,
  reducers: {},
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
    [favorites.pending]: (state, action) => {
      state.status = "loading";
    },
    [fetchPets.fulfilled]: (state, action) => {
      state.status = "succeeded";
      state.error = null;
      state.favorites = action.payload;
    },
    [fetchPets.rejected]: (state, action) => {
      state.status = "error";
      state.error = action.error.message;
    },
  },
});

export default petSlice.reducer;

export const PetReducer = (state) => state.petSlice;
