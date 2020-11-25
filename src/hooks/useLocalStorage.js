import { useState, useEffect } from 'react';
const useLocalStorage = (key, defaultValue) => {
  let temp = {};

  const [value, setValue] = useState({});

  useEffect(() => {
    let localStorageValue = localStorage.getItem(key);
    setValue(localStorageValue ? JSON.parse(localStorageValue) : defaultValue);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value]);

  const handleChange = (event) => {
    if (!Object.keys(temp).length) temp = JSON.parse(localStorage.getItem(key));
    let name = event.target.name;
    let eventValue = event.target.value;
    temp = { ...temp, [name]: eventValue };
    console.log('temp1>>>>>>>', temp);
  };
  const handleSubmit = (event) => {
    // event.persist();
    event.preventDefault();
    setValue({ ...temp });
    console.log('temp12>>>>>>>', temp);
    localStorage.setItem(key, JSON.stringify(value));
  };

  return {
    value,
    handleChange,
    handleSubmit,
  };
};

export default useLocalStorage;
