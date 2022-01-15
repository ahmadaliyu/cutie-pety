import { createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "../helpers/api";

export const fetchPets = createAsyncThunk("fetchPets/pets", async (data) => {
  const response = await api("https://api.thedogapi.com/v1/breeds");
  if (response) {
    return response;
  }
});

export const favorites = createAsyncThunk(
  "favoritePets/pets",
  async (action) => {
    return action.payload;
  },
);
