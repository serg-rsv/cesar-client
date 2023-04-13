import { instance } from './configAxios';
import { INewMessage, IResponseMessage } from '../types/types';

export const addMessage = async (
  newMessage: INewMessage
): Promise<IResponseMessage | undefined> => {
  try {
    const response = await instance.post<IResponseMessage>('/messages', newMessage);
    return response.data;
  } catch (error) {
    console.error('Cannot create message.',error);
  }
};
