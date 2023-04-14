import { instance } from 'api/configAxios';
import { IResponseMessage } from 'types/types';

export const getDecryptedMessage = async (
  messageId: number
): Promise<IResponseMessage | undefined> => {
  try {
    const response = await instance.get<IResponseMessage>(
      `/messages/${messageId}/decrypt`
    );
    return response.data;
  } catch (error) {
    console.error('Cannot get decrypted message.', error);
  }
};
