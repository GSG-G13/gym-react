import { useContext } from 'react';
import AuthContext from '../context/authContex';
import useLocalStorage from './useLocalStorage';

const useUser = () => {
  const { user, setUser } = useContext(AuthContext);
  const { setItem } = useLocalStorage();

  const addUser = (userData) => {
    setUser(userData);
    setItem('user', JSON.stringify(userData));
  };

  const removeUser = () => {
    setUser(null);
    setItem('user', '');
  };

  return { user, addUser, removeUser };
};

export default useUser;
