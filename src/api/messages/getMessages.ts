import { instance } from 'api/configAxios';
import { IResponseMessages } from 'types/types';

export const getMessages = async (): Promise<IResponseMessages | undefined> => {
  try {
    const { data } = await instance.get<IResponseMessages>('/messages');
    return data;
  } catch (error) {
    console.error('Cannot create message.', error);
  }
};
