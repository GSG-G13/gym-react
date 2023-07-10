import { useState, useEffect } from 'react';

import Cookies from 'js-cookie';
import jwtDecode from 'jwt-decode';

const useAuth = () => {
  const [user, setUser] = useState({
    id: null,
    username: null,
    email: null,
    role: null,
  });
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const token = Cookies.get('token');
    if (token) {
      const decode = jwtDecode(token);
      if (decode) {
        setUser({ ...decode });
      }
    }

    setIsLoading(false);
  }, []);

  return {
    user,
    isLoading,
  };
};

export default useAuth;
