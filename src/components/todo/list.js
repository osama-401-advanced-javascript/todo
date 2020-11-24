import React, { useContext, useState } from 'react';
import { SettingsContext } from '../../context/settings.js';

import { ListGroup, Button, CloseButton, Container, Row, Col } from 'react-bootstrap';

function TodoList(props) {
  const [itemsPerScreen, setItems] = useState([]);
  const context = useContext(SettingsContext);

  props.list.sort(function (a, b) {
    if (a.difficulty < b.difficulty) {
      return -1;
    }
    if (a.difficulty > b.difficulty) {
      return 1;
    }
    return 0;
  });
  let numberOfPages = Math.ceil(props.list.length / 3);
  let numberOfPagesArr = [];
  for (let i = 0; i < numberOfPages; i++) {
    numberOfPagesArr[i] = i;
  }

  let limitedListArr = [];
  for (let i = 0; i < props.list.length && i < Number(context.numberOfItems); i++) {
    limitedListArr[i] = props.list[i];
  }
  function _handleOnClick(event) {
    let limitedListArr = [];

    for (let i = 0, j = (event.target.value - 1) * Number(context.numberOfItems); props.list.length - j && i < Number(context.numberOfItems); j++, i++) {
      limitedListArr[i] = props.list[j];
    }
    console.log(limitedListArr);
    setItems(limitedListArr);
  }

  return (
    <ListGroup>
      {itemsPerScreen.map((item) => (
        <Container key={item._id}>
          <Row>
            <Col sm={6}>
              <ListGroup.Item style={{ padding: '5px', marginTop: '15px' }} variant='dark'>
                Assigned to: <strong>{item.assignee}</strong> | Difficulty: <strong>{item.difficulty}</strong>{' '}
              </ListGroup.Item>
            </Col>
            <Col sm={5}></Col>
            <CloseButton onClick={() => props.handleDelete(item._id)} />
          </Row>
          <Row>
            <Col sm={12}>
              <ListGroup.Item onClick={() => props.handleComplete(item._id)} variant={item.complete ? 'success' : 'danger'}>
                {item.text}
              </ListGroup.Item>
            </Col>
          </Row>
        </Container>
      ))}
      <Container>
        <Row>
          {numberOfPagesArr.map((val, indx) => (
            <Button onClick={_handleOnClick} className='m-2' id={`${indx + 1}`} value={indx + 1} key={indx + 1}>
              {' '}
              {indx + 1}
            </Button>
          ))}
        </Row>
      </Container>
    </ListGroup>
  );
}

export default TodoList;
