import { login } from 'api/user/login';
import { register } from 'api/user/register';
import { checkToken } from 'api/user/checkToken';
import { addMessage } from 'api/messages/addMessage';
import { getMessages } from 'api/messages/getMessages';
import { getDecryptedMessage } from 'api/messages/getDecryptedMessage';
import { getEncryptedMessage } from 'api/messages/getEncryptedMessage';

export const api = {
  user: { login, register, checkToken },
  messages: {
    addMessage,
    getMessages,
    getDecryptedMessage,
    getEncryptedMessage,
  },
};
