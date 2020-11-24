import React from 'react';
import { Form, Button } from 'react-bootstrap';

function TodoForm(props) {
  return (
    <>
      <h3>Add Item</h3>
      <Form onSubmit={props.handleSubmit}>
        <Form.Group controlId='addItem'>
          <Form.Label>To Do Item</Form.Label>
          <Form.Control required name='text' onChange={props.handleInputChange} type='text' placeholder='Add To Do List Item' />
        </Form.Group>

        <Form.Group controlId='assign'>
          <Form.Label>Assigned To</Form.Label>
          <Form.Control required name='assignee' onChange={props.handleInputChange} type='text' placeholder='Assigned To' />
        </Form.Group>

        <Form.Group controlId='formBasicRange'>
          <Form.Label>Difficulty Rating</Form.Label>
          <Form.Control required className='slider' name='difficulty' onChange={props.handleInputChange} min='1' max='5' type='range' />
        </Form.Group>

        <Button variant='info' className='btnAdd' type='submit'>
          Add Item
        </Button>
      </Form>
    </>
  );
}

export default TodoForm;
