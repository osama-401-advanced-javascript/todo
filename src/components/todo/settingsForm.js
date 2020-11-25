import React, { useContext } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import './form.scss';
import { SettingsContext } from '../../context/settings';
import { Container } from 'react-bootstrap';
function SettingsForm() {
  const settingsContext = useContext(SettingsContext);
  console.log('settingsContext>>>>>>>>', settingsContext.value);
  return (
    <>
      <Container>
        <Form onSubmit={settingsContext.handleSubmit} className=' shadow-lg bg-white rounded p-3 mb-3 mr-0'>
          <h3 className='text-center mb-2'>Set Your Preferences</h3>
          <Form.Group>
            <Form.Label>Number of items to display per screen</Form.Label>
            <Form.Control type='number' name='numberOfItems' defaultValue={settingsContext.value.numberOfItems} placeholder='Number of items to display per screen' required onChange={settingsContext.handleChange} />
          </Form.Group>
          <Form.Group>
            <Form.Label>Show Completed Tasks:</Form.Label>
            <Form.Check onChange={settingsContext.handleChange} type='radio' name='completedTasks' label='True' value='true' defaultChecked={'true' === settingsContext.value.completedTasks ? true : false} key={`1`} required />
            <Form.Check type='radio' name='completedTasks' label='False' defaultChecked={'false' === settingsContext.value.completedTasks ? true : false} value='false' key={`2`} required onChange={settingsContext.handleChange} />
          </Form.Group>
          <Form.Group>
            <Form.Label>Sort By Difficulty:</Form.Label>
            <Form.Control as='select' name='sort' placeholder='Number of items to display per screen' required onChange={settingsContext.handleChange}>
              <option value='descending' selected={'descending' === settingsContext.value.sort ? true : false}>
                Descending Order
              </option>
              <option value='ascending' selected={'ascending' === settingsContext.value.sort ? true : false}>
                Ascending Order
              </option>
            </Form.Control>
          </Form.Group>
          <Button type='submit' variant='secondary'>
            Save
          </Button>
        </Form>
      </Container>
    </>
  );
}

export default SettingsForm;
