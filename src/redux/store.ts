import { useDispatch } from 'react-redux';
import { combineReducers, configureStore } from '@reduxjs/toolkit';

import { userReducer } from 'redux/slices/userSlice';
import { messagesReducer } from 'redux/slices/messagesSlice';

const rootReducer = combineReducers({
  user: userReducer,
  messages: messagesReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});

// store.dispatch(checkTokenValidity())

export type RootState = ReturnType<typeof rootReducer>;

type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
