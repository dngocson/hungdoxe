import { createSlice } from "@reduxjs/toolkit/react";

// Define the initial state for the counter slice
const initialState = {
  count: 0, // Initial count value
};

// Create a slice for managing the counter state
const counterSlice = createSlice({
  name: "counter", // Name of the slice
  initialState, // Initial state
  reducers: {
    // Reducer function for incrementing the count
    increment: (state) => {
      state.count += 1; // Increment the count by 1
    },
    // Reducer function for decrementing the count
    decrement: (state) => {
      state.count -= 1; // Decrement the count by 1
    },
    // Reducer function for resetting the count to 0
    reset: (state) => {
      state.count = 0; // Reset the count to 0
    },
    // Reducer function for incrementing the count by a specific amount
    incrementByAmount: (state, action) => {
      state.count = state.count + action.payload; // Increment the count by the payload value
    },
  },
});

// Export the action creators
export const { increment, decrement, reset, incrementByAmount } =
  counterSlice.actions;

// Export the reducer function
export default counterSlice.reducer;
