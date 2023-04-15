import { instance } from 'api/configAxios';
import { IResponseMessage } from 'types/types';

export const getDecryptedMessage = async (
  messageId: number
): Promise<IResponseMessage | undefined> => {
  try {
    const { data } = await instance.get<IResponseMessage>(
      `/messages/${messageId}/decrypt`
    );
    return data;
  } catch (error) {
    console.error('Cannot get decrypted message.', error);
  }
};
