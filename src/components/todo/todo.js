import React, { useState, useEffect } from 'react';
import TodoForm from './form.js';
import TodoList from './list.js';
import { Navbar, Nav, Container, Row, Col } from 'react-bootstrap';

import './todo.scss';

function ToDo() {
  const [list, setList] = useState([]);

  const addItem = (item) => {
    item._id = Math.random();
    item.complete = false;
    setList([...list, item]);
  };

  const toggleComplete = (id) => {
    let item = list.filter((i) => i._id === id)[0] || {};

    if (item._id) {
      item.complete = !item.complete;
      let listN = list.map((listItem) => (listItem._id === item._id ? item : listItem));
      setList(listN);
    }
  };

  useEffect(() => {
    let list = [
      { _id: 1, complete: false, text: 'Clean the Kitchen', difficulty: 3, assignee: 'Person A' },
      { _id: 2, complete: false, text: 'Do the Laundry', difficulty: 2, assignee: 'Person A' },
      { _id: 3, complete: false, text: 'Walk the Dog', difficulty: 4, assignee: 'Person B' },
      { _id: 4, complete: true, text: 'Do Homework', difficulty: 3, assignee: 'Person C' },
      { _id: 5, complete: false, text: 'Take a Nap', difficulty: 1, assignee: 'Person B' },
    ];

    setList(list);
  }, []);

  useEffect(() => {
    document.title = `To Do List: ${list.filter((item) => !item.complete).length}`;
  }, [list]);

  return (
    <>
      <Navbar className='nav' variant='dark'>
        <Nav className='mr-auto'>
          <Nav.Link href='' style={{ color: '#eeeeee' }}>
            Home
          </Nav.Link>
        </Nav>
      </Navbar>
      <Container fluid='lg'>
        <Row className='title'>
          <Col>
            <h2>There are {list.filter((item) => !item.complete).length} Items To Complete</h2>
          </Col>
        </Row>
        <Row>
          <Col>
            <Container>
              <Row>
                <Col sm={4}>
                  <TodoForm handleSubmit={addItem} />
                </Col>
                <Col sm={2}></Col>
                <Col sm={6}>
                  <TodoList list={list} handleComplete={toggleComplete} />
                </Col>
              </Row>
            </Container>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default ToDo;
