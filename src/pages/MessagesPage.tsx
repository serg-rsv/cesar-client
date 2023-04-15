import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Box, Typography } from '@mui/material';

import EncryptionForm from 'components/EncryptionForm';
import MessagesList from 'components/MessagesList';
import { useAppDispatch } from 'redux/store';
import { selectAllMessages } from 'redux/selectors';
import { addMessage, setMessages } from 'redux/slices/messagesSlice';
import { api } from 'api';
import { IMessage, INewMessage, IResponseMessage } from 'types/types';

export const MessagesPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const messages = useSelector(selectAllMessages);
  const dispatch = useAppDispatch();

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const response = await api.messages.getMessages();
        if (response?.messages) {
          const messages = response!.messages.map((m: IResponseMessage) => {
            return {
              id: parseInt(m.id),
              text: m.text,
              isDecrypted: false,
            } as IMessage;
          });
          dispatch(setMessages({ messages }));
        }
      } catch (error) {
        console.error('Failed to fetch messages:', error);
      }
    };

    fetchMessages();
  }, [dispatch]);

  const handleAddMessage = async (newMessage: INewMessage) => {
    setIsLoading(true);
    const savedMessage = await api.messages.addMessage(newMessage);
    setIsLoading(false);

    if (savedMessage) {
      const message: IMessage = {
        ...savedMessage,
        id: parseInt(savedMessage.id),
        isDecrypted: false,
      };
      dispatch(addMessage(message));
    }
  };

  return (
    <Box mt={4}>
      <Typography variant="h6" align="center" mb={2}>
        Create encrypted message
      </Typography>
      <EncryptionForm onSubmit={handleAddMessage} isLoading={isLoading} />
      {messages.length > 0 && (
        <>
          <Typography variant="h6" mt={4} mb={2}>
            Your messages
          </Typography>
          <MessagesList messages={messages} />
        </>
      )}
    </Box>
  );
};
