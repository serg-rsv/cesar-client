import { RootState } from './store';

export const selectIsLoggedIn = (state: RootState) => state.user.isLoggedIn;
export const selectAllMessages = (state: RootState) => state.messages.messages;