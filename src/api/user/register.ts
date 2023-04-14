import { instance } from 'api/configAxios';
import { IResponseToken } from 'types/types';

interface IUserAuth {
  email: string;
  password: string;
}

export const register = async (
  userAuth: IUserAuth
): Promise<IResponseToken | undefined> => {
  try {
    const response = await instance.post<IResponseToken>(
      '/auth/register',
      userAuth
    );
    return response.data;
  } catch (error) {
    console.error('Register error.', error);
  }
};
