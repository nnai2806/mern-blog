import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  currentUser: null,
  error: null,
  loading: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    signInStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    signInSucess: (state, action) => {
      state.loading = false;
      state.currentUser = action.payload;
    },
    signInFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { signInStart, signInSucess, signInFailure } = userSlice.actions;

export default userSlice.reducer;
