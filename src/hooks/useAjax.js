import { useState, useEffect } from 'react';
import axios from 'axios';

const useAjax = (url) => {
  const [list, setList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const _create = async (item) => {
    const options = {
      method: 'post',
      url,
      mode: 'cors',
      cache: 'no-cache',
      headers: { 'Content-Type': 'application/json' },
      data: item,
    };
    setIsLoading(!isLoading);
    await axios(options)
      .then((response) => {
        setIsLoading(() => isLoading);
        console.log('respnse>>>>>', response);
        setList([...list, response.data]);
      })
      .catch((error) => {
        console.log('POST AXIOS >>>>', error);
      });
  };
  const _update = async (id) => {
    let item = list.filter((i) => i._id === id)[0] || {};
    if (item._id) {
      let updateUrl = `${url}/${id}`;
      item.complete = !item.complete;
      const options = {
        method: 'put',
        url: updateUrl,
        mode: 'cors',
        cache: 'no-cache',
        headers: { 'Content-Type': 'application/json' },
        data: item,
      };
      setIsLoading(!isLoading);
      console.log('agter read reade ', isLoading);
      await axios(options)
        .then((response) => {
          setIsLoading(() => isLoading);

          console.log('list after update >>>>>>>', response.data);

          setList(list.map((listItem) => (listItem._id === item._id ? response.data : listItem)));
        })
        .catch(console.error);
    }
  };
  const _read = async () => {
    setIsLoading(!isLoading);
    await axios
      .get(url)
      .then((response) => {
        setIsLoading(() => isLoading);
        setList(response.data.results);
      })
      .catch(console.error);
  };
  const _delete = async (id) => {
    let item = list.filter((i) => i._id === id)[0] || {};
    if (item._id) {
      let deleteUrl = `${url}/${id}`;
      setIsLoading(!isLoading);
      await axios
        .delete(deleteUrl)
        .then((response) => {
          setIsLoading(() => isLoading);
          setList(list.filter((listItem) => listItem._id !== item._id));
        })
        .catch(console.error);
    }
  };

  useEffect(() => {
    _read();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return [list, isLoading, _create, _update, _delete, _read];
};

export default useAjax;
