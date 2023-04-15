import { ReactNode } from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

import { selectIsLoggedIn } from 'redux/selectors';

interface IPublicRouteProps {
  element: ReactNode;
  restricted?: boolean;
}

const PublicRoute = ({ element, restricted }: IPublicRouteProps) => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const shouldRedirect = isLoggedIn && restricted;
  return <>{shouldRedirect ? <Navigate to="/messages" /> : element}</>;
};

export default PublicRoute;
