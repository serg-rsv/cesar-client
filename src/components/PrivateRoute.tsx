import { ReactNode } from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

import { selectIsLoggedIn } from 'redux/selectors';

interface IPrivateRouteProps {
  element: ReactNode;
}

const PrivateRoute = ({ element }: IPrivateRouteProps) => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return <>{isLoggedIn ? element : <Navigate to="/" />}</>;
};

export default PrivateRoute;
