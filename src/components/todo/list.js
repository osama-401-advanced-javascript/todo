import React from 'react';
import { ListGroup } from 'react-bootstrap';

function TodoList(props) {
  return (
    <ListGroup>
      {props.list.map((item) => (
        <ListGroup.Item onClick={() => props.handleComplete(item._id)} key={item._id} variant={item.complete ? 'success' : 'danger'}>
          {item.text}
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
}

export default TodoList;
