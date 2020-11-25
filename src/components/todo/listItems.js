import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import ListGroup from 'react-bootstrap/ListGroup';
import Auth from '../../auth/auth';

function TodoItems(props) {
  const [listArr, setListArr] = useState([...props.listArr.listArr]);
  console.log('TodoItems', props.listArr.listArr);
  useEffect(() => {}, []);

  useEffect(() => {
    setListArr([...props.listArr.listArr]);
  }, [props]);
  return (
    <>
      <ListGroup>
        {listArr.map((item) => (
          <ListGroup.Item className='mb-3 ' variant='' key={item._id}>
            <Container>
              <Row>
                <Col xs={1}>
                  <Button size='sm' pill={'true'} variant={item.complete ? 'danger' : 'success'}>
                    {' '}
                    {item.complete ? <span> complete</span> : <span>Pending</span>}
                    <Auth action='update'>
                      <span onClick={() => props.handlers.handleComplete(item._id)}>&#128393;</span>
                    </Auth>
                  </Button>
                </Col>

                <Col xs={{ span: 1, offset: 10 }}>
                  <Auth action='delete'>
                    <Button size='sm' onClick={() => props.handlers.handleDelete(item._id)}>
                      <span> X </span>
                    </Button>
                  </Auth>
                </Col>
              </Row>
              <hr />
              <Row className='pb-1 pt-1'>
                <Col>
                  <span>{item.text}</span>
                </Col>
              </Row>
              <hr />
              <Row>
                <Col xs={{ span: 4, offset: 10 }}>
                  <span>Difficulty: {item.difficulty}</span>
                </Col>
              </Row>
            </Container>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </>
  );
}

export default TodoItems;
