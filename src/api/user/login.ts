import { instance } from 'api/configAxios';
import { IResponseAuth } from 'types/types';

interface IUserAuth {
  email: string;
  password: string;
}

export const login = async (
  userAuth: IUserAuth
): Promise<IResponseAuth | undefined> => {
  try {
    const { data } = await instance.post<IResponseAuth>(
      '/auth/login',
      userAuth
    );
    return data;
  } catch (error) {
    console.error('Login error.', error);
  }
};
