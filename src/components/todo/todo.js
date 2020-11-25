import React from 'react';
import TodoConnected from './todo-connected.js';
import Auth from '../../auth/auth';

function ToDo(props) {
  return (
    <>
      <Auth action='read'>
        <TodoConnected />
      </Auth>
    </>
  );
}
export default ToDo;
