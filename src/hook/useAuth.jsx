import { useEffect } from 'react';

import useUser from './useUser';
import useLocalStorage from './useLocalStorage';

const useAuth = () => {
  const { user, addUser, removeUser } = useUser();
  const { getItem } = useLocalStorage();

  useEffect(() => {
    const localUserData = getItem('user');
    if (localUserData) {
      addUser(JSON.parse(localUserData));
    }
  }, []);

  const login = (userData) => {
    addUser(userData);
  };

  const logout = () => {
    removeUser();
  };

  return { user, login, logout };
};

export default useAuth;
