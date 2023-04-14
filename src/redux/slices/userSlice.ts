import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { IResponseToken } from 'types/types';

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
    logIn: (state, action: PayloadAction<IResponseToken>) => {
      state.token = action.payload.accessToken;
      localStorage.setItem('token', JSON.stringify(action.payload.accessToken));
      state.isLoggedIn = true;
    },
    logOut: (state) => {
      state.token = null;
      localStorage.removeItem('token');
      state.isLoggedIn = false;
    },
    // checkTokenValidity: (state) => {
    // Додати на бекенд ендпоінт для валідації токена
    // },
  },
});

export const { logIn, logOut } = userSlice.actions;
export const userReducer = userSlice.reducer;
