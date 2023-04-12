import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface IUserState {
  token: string | null;
  isLoggedIn: boolean;
}

const initialState: IUserState = {
  token: null,
  isLoggedIn: false,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    logIn: (state, action: PayloadAction<IUserState>) => {
      state.token = action.payload.token;
      state.isLoggedIn = true;
    },
    logOut: (state) => {
      state.token = null;
      state.isLoggedIn = false;
    },
  },
});

export const { logIn, logOut } = userSlice.actions;
export const userReducer = userSlice.reducer;
