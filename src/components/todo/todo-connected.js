import React from 'react';
import TodoForm from './form.js';
import TodoList from './list.js';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Badge from 'react-bootstrap/Badge';
import Spinner from 'react-bootstrap/Spinner';
import './todo.scss';
import useAjax from '../../hooks/useAjax';
import Auth from '../../auth/auth';

const todoAPI = 'https://api-js401.herokuapp.com/api/v1/todo';

const ToDo = () => {
  const [list, isLoading, addItem, toggleComplete, deleteItem] = useAjax(todoAPI);

  return (
    <>
      <Container>
        <Row>
          <Col></Col>
        </Row>
      </Container>
      <section className='todo'>
        <Container className='board-color'>
          <Row className=' p-3 mb-3 bg-dark text-white '>
            <Col xs={10}>
              <h2>
                There are{' '}
                <Badge pill variant={list.filter((item) => !item.complete).length ? 'success' : 'danger'}>
                  {' '}
                  {list.filter((item) => !item.complete).length}{' '}
                </Badge>{' '}
                Items To Complete
              </h2>
            </Col>
            {isLoading ? (
              <Col>
                <Spinner animation='border' role='status'>
                  <span className='sr-only'>Loading...</span>
                </Spinner>
              </Col>
            ) : null}
          </Row>
          <Row className='pl-3 pr-3'>
            <Col md={4} className='p-sm-0'>
              <Auth action='create'>
                <TodoForm handleSubmit={addItem} />
              </Auth>
            </Col>
            <Col md={8} className='justify-content-center p-sm-0 pl-md-5'>
              <TodoList list={list} handleComplete={toggleComplete} handleDelete={deleteItem} />
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};
export default ToDo;
