import { instance } from 'api/configAxios';
import { store } from 'redux/store';
import { getUser, logOut } from 'redux/slices/userSlice';
import { IResponseEmail } from 'types/types';

export const checkToken = async (): Promise<IResponseEmail | undefined> => {
  const token = localStorage.getItem('token');
  if (!token) {
    return;
  }

  try {
    const { data } = await instance.get<IResponseEmail>('/auth/user');
    if (data) {
      store.dispatch(getUser(data));
    } else {
      store.dispatch(logOut());
    }
    return data;
  } catch (error) {
    console.error('Not authorized.', error);
  }
};
