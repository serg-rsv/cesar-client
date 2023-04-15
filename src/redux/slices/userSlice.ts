import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { IResponseEmail, IResponseAuth } from 'types/types';

interface IUserState {
  email: string | null;
  token: string | null;
  isLoggedIn: boolean;
}

const initialState: IUserState = {
  email: null,
  token: null,
  isLoggedIn: false,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    logIn: (state, action: PayloadAction<IResponseAuth>) => {
      state.email = action.payload.email;
      state.token = action.payload.accessToken;
      localStorage.setItem('token', JSON.stringify(action.payload.accessToken));
      state.isLoggedIn = true;
    },
    logOut: (state) => {
      state.email = null;
      state.token = null;
      localStorage.removeItem('token');
      state.isLoggedIn = false;
    },
    getUser: (state, action: PayloadAction<IResponseEmail>) => {
      state.email = action.payload.email;
      localStorage.getItem('token');
      state.isLoggedIn = true;
    },
  },
});

export const { logIn, logOut, getUser } = userSlice.actions;
export const userReducer = userSlice.reducer;
