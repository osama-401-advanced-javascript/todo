import { useState } from 'react';

const todoAPI = 'https://zatar-api-server.herokuapp.com/api/v1/todo';

function useForm() {
  const [list, setList] = useState([]);
  const [item, setItem] = useState({});

  const addItem = (item) => {
    fetch(todoAPI, {
      method: 'post',
      mode: 'cors',
      cache: 'no-cache',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(item),
    })
      .then((response) => response.json())
      .then((savedItem) => {
        setList([...list, savedItem]);
      });
  };

  const handleInputChange = (e) => {
    setItem({ ...item, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    e.target.reset();
    addItem(item);
    const itemReset = {};
    setItem({ itemReset });
  };

  return [list, setList, handleInputChange, handleSubmit];
}

export default useForm;
