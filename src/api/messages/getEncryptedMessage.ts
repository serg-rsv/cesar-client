import { instance } from 'api/configAxios';
import { IResponseMessage } from 'types/types';

export const getEncryptedMessage = async (
  messageId: number
): Promise<IResponseMessage | undefined> => {
  try {
    const { data } = await instance.get<IResponseMessage>(
      `/messages/${messageId}`
    );
    return data;
  } catch (error) {
    console.error('Cannot get decrypted message.', error);
  }
};
