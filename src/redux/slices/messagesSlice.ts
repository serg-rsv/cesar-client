import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Message {
  id: number;
  text: string;
  isDecrypted: boolean;
}

interface Messages {
  messages: Message[];
}

const initialState: Messages = {
  messages: [],
};

export const messagesSlice = createSlice({
  name: 'messages',
  initialState,
  reducers: {
    setMessages: (state, action: PayloadAction<Messages>) => {
      state.messages = action.payload.messages;
    },
    addMessage: (state, action: PayloadAction<Message>) => {
      state.messages.push(action.payload);
    },
    setCipheredMessage: (state, action: PayloadAction<Message>) => {
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
