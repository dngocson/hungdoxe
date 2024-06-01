import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import counterSlice from "./apiSlice/counter";
import { apiSlice } from "./appSlice";

// Creating the Redux store
export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer, // Adding the apiSlice reducer to the store
    counter: counterSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});

setupListeners(store.dispatch); // optional, but required for refetchOnFocus/refetchOnReconnect behaviors

// Defining the RootState type
export type RootState = ReturnType<typeof store.getState>;

// Defining the AppDispatch type
export type AppDispatch = typeof store.dispatch;

// Defining a custom hook for accessing dispatch function
// This hook provides the AppDispatch type to useDispatch
export const useAppDispatch = () => useDispatch<AppDispatch>(); // Hook for accessing dispatch function with the correct type
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector; // Hook for accessing userSelector fuction with the correct type
