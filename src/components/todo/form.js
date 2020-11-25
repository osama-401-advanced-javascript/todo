import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import './form.scss';
import useForm from '../../hooks/useForm.js';
function TodoForm(props) {
  const { handleChange, handleSubmit } = useForm(props.handleSubmit);
  return (
    <>
      <Form onSubmit={handleSubmit} className=' shadow-lg bg-white rounded p-3 mb-3 mr-0'>
        <h3 className='text-center mb-2'>Add Item</h3>
        <Form.Group>
          <Form.Label>To Do Item</Form.Label>
          <Form.Control name='text' placeholder='Add To Do List Item' onChange={handleChange} />
        </Form.Group>
        <Form.Group>
          <Form.Label>Difficulty Rating</Form.Label>
          <Form.Control type='range' className='custom-range' variant='dark' defaultValue='1' min='1' max='5' name='difficulty' onChange={handleChange} />
        </Form.Group>
        <Form.Group>
          <Form.Label>Assigned To</Form.Label>

          <Form.Control type='text' name='assignee' placeholder='Assigned To' onChange={handleChange} />
        </Form.Group>
        <Button type='submit' variant='secondary'>
          Add Item
        </Button>
      </Form>
    </>
  );
}

export default TodoForm;
