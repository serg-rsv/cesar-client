import { instance } from './configAxios';
import { IResponseMessages } from '../types/types';

export const getMessages = async (): Promise<IResponseMessages | undefined> => {
  try {
    const response = await instance.get<IResponseMessages>('/messages');
    return response.data;
  } catch (error) {
    console.error('Cannot create message.', error);
  }
};
