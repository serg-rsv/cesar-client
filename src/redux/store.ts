import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { userReducer } from './slices/userSlice';
import { messagesReducer } from './slices/messagesSlice';

const rootReducer = combineReducers({
  user: userReducer,
  messages: messagesReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
