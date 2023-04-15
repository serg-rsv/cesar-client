import { instance } from 'api/configAxios';
import { INewMessage, IResponseMessage } from 'types/types';

export const addMessage = async (
  newMessage: INewMessage
): Promise<IResponseMessage | undefined> => {
  try {
    const { data } = await instance.post<IResponseMessage>(
      '/messages',
      newMessage
    );
    return data;
  } catch (error) {
    console.error('Cannot create message.', error);
  }
};
