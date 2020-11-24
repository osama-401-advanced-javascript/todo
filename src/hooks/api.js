import axios from 'axios';

function useAjax() {
  const todoAPI = 'https://zatar-api-server.herokuapp.com/api/v1/todo';

  const handler = (url, method, body) => {
    return axios({
      method: method,
      url: url,
      data: body,
    }).then((data) => data.data);
  };

  return [handler, todoAPI];
}

export default useAjax;
