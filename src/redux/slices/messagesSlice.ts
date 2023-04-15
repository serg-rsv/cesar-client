import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { IMessage, IMessages, IResponseMessage } from 'types/types';

const initialState: IMessages = {
  messages: [],
};

export const messagesSlice = createSlice({
  name: 'messages',
  initialState,
  reducers: {
    setMessages: (state, action: PayloadAction<IMessages>) => {
      state.messages = action.payload.messages.reverse();
    },
    addMessage: (state, action: PayloadAction<IMessage>) => {
      state.messages.unshift(action.payload);
    },
    setCipheredMessage: (state, action: PayloadAction<IResponseMessage>) => {
      const index = state.messages.findIndex(
        (m) => m.id === parseInt(action.payload.id)
      );
      if (index !== -1) {
        state.messages[index] = {
          ...state.messages[index],
          text: action.payload.text,
          isDecrypted: !state.messages[index].isDecrypted,
        };
      }
    },
  },
});

export const { setMessages, addMessage, setCipheredMessage } =
  messagesSlice.actions;
export const messagesReducer = messagesSlice.reducer;
