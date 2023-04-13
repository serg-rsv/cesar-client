import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IMessage, IMessages } from '../../types/types';

const initialState: IMessages = {
  messages: [],
};

export const messagesSlice = createSlice({
  name: 'messages',
  initialState,
  reducers: {
    setMessages: (state, action: PayloadAction<IMessages>) => {
      state.messages = action.payload.messages;
    },
    addMessage: (state, action: PayloadAction<IMessage>) => {
      state.messages.push(action.payload);
    },
    setCipheredMessage: (state, action: PayloadAction<IMessage>) => {
      state.messages = state.messages.map((message) => {
        if (message.id === action.payload.id) {
          return {
            ...message,
            text: action.payload.text,
            isDecrypted: !message.isDecrypted,
          };
        }
        return message;
      });
    },
  },
});

export const { setMessages, addMessage, setCipheredMessage } =
  messagesSlice.actions;
export const messagesReducer = messagesSlice.reducer;
