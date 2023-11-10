import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    made: "dark",
    userId: "63701cc1f03239867500011e",
};

export const globalSlice = createSlice({
    name: "global",
    initialState,
    reducers: {
      setMode: (state) => {
        state.mode = state.mode === "light" ? "dark" : "light";
      },
    },
  });
  
  export const { setMode } = globalSlice.actions;
  
  export default globalSlice.reducer;