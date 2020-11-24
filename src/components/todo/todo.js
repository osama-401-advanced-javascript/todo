import React, { useEffect } from 'react';
import TodoForm from './form.js';
import TodoList from './list.js';
import { Navbar, Nav, Container, Row, Col } from 'react-bootstrap';
import useForm from '../../hooks/form';
import useList from '../../hooks/list';
import useAjax from '../../hooks/api';
import './todo.scss';

function ToDo() {
  const [list, setList, handleInputChange, handleSubmit] = useForm();
  const [handler, todoAPI] = useAjax();
  const [loader, toggleComplete, deleteTask] = useList(handler, todoAPI, setList, list);

  useEffect(() => {
    loader();
  });

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
                  <TodoForm handleInputChange={handleInputChange} handleSubmit={handleSubmit} />
                </Col>
                <Col sm={2}></Col>
                <Col sm={6}>
                  <TodoList list={list} handleComplete={toggleComplete} handleDelete={deleteTask} />
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
