import { useState } from 'react';

const useLocalStorage = () => {
  const [value, setValue] = useState(null);

  const setItem = (key, val) => {
    localStorage.setItem(key, val);
    setValue(value);
  };

  const getItem = (key) => {
    const val = localStorage.getItem(key);
    setValue(val);
    return val;
  };

  const removeItem = (key) => {
    localStorage.removeItem(key);
    setValue(null);
  };

  return {
    value,
    setItem,
    getItem,
    removeItem,
  };
};

export default useLocalStorage;
