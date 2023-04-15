import { instance } from 'api/configAxios';
import { IResponseAuth } from 'types/types';

interface IUserAuth {
  email: string;
  password: string;
}

export const register = async (
  userAuth: IUserAuth
): Promise<IResponseAuth | undefined> => {
  try {
    const { data } = await instance.post<IResponseAuth>(
      '/auth/register',
      userAuth
    );
    return data;
  } catch (error) {
    console.error('Register error.', error);
  }
};
