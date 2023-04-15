import { useState } from 'react';
import { List } from '@mui/material';

import MessageItem from './MessageItem';
import { useAppDispatch } from 'redux/store';
import { setCipheredMessage } from 'redux/slices/messagesSlice';
import { api } from 'api';
import { IMessage, IMessages } from 'types/types';

const MessagesList = ({ messages }: IMessages) => {
  const [isLoadingIds, setIsLoadingIds] = useState<number[]>([]);
  const dispatch = useAppDispatch();

  const handleDecrypt = async (id: number) => {
    setIsLoadingIds([...isLoadingIds, id]);
    const response = await api.messages.getDecryptedMessage(id);
    setIsLoadingIds(isLoadingIds.filter((loadingId) => loadingId !== id));
    if (response) {
      dispatch(setCipheredMessage(response));
    }
  };

  const handleEncrypt = async (id: number) => {
    setIsLoadingIds([...isLoadingIds, id]);
    const response = await api.messages.getEncryptedMessage(id);
    setIsLoadingIds(isLoadingIds.filter((loadingId) => loadingId !== id));
    if (response) {
      dispatch(setCipheredMessage(response));
    }
  };

  return (
    <List>
      {messages.map((m: IMessage) => (
        <MessageItem
          key={m.id}
          isLoading={isLoadingIds.includes(m.id)}
          message={m}
          onEncrypt={handleEncrypt}
          onDecrypt={handleDecrypt}
        />
      ))}
    </List>
  );
};

export default MessagesList;
