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
      localStorage.setItem('token', JSON.stringify(action.payload.token));
      state.isLoggedIn = true;
    },
    logOut: (state) => {
      state.token = null;
      localStorage.setItem('token', JSON.stringify(null));
      state.isLoggedIn = false;
    },
    // checkTokenValidity: (state) => {
    //   const token = JSON.parse(localStorage.getItem('token'));
    //   if (token) {
    //     axios
    //       .get('/api/check-token', {
    //         headers: { Authorization: `Bearer ${token}` },
    //       })
    //       .then((response) => {
    //         state.token = token;
    //         state.isLoggedIn = true;
    //       })
    //       .catch((error) => {
    //         localStorage.removeItem('token');
    //         state.token = null;
    //         state.isLoggedIn = false;
    //       });
    //   }
    // },
  },
});

export const { logIn, logOut } = userSlice.actions;
export const userReducer = userSlice.reducer;
