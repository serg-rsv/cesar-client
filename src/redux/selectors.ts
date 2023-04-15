import { RootState } from 'redux/store';

export const selectIsLoggedIn = (state: RootState) => state.user.isLoggedIn;
export const selectAllMessages = (state: RootState) => state.messages.messages;
export const selectEmail = (state: RootState) => state.user.email;
