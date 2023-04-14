import { instance } from 'api/configAxios';
import { IResponseToken } from 'types/types';

interface IUserAuth {
  email: string;
  password: string;
}

export const login = async (
  userAuth: IUserAuth
): Promise<IResponseToken | undefined> => {
  try {
    const { data } = await instance.post<IResponseToken>(
      '/auth/login',
      userAuth
    );
    return data;
  } catch (error) {
    console.error('Login error.', error);
  }
};
