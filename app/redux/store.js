import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import petReducer from "./petReducer";

// const middleWares = [];

const store = configureStore({
  reducer: {
    petSlice: petReducer,
  },
  middleware: [
    ...getDefaultMiddleware({
      serializableStateInvariant: false,
      serializableCheck: false,
    }),
  ],
});

export default store;
