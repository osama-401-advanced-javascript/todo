import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

// class TodoForm extends React.Component {

//   constructor(props) {
//     super(props);
//     this.state = { item: {} };
//   }
//   handleInputChange = e => {
//     this.setState({ item: {...this.state.item, [e.target.name]: e.target.value } });
//   };

//   handleSubmit = (e) => {
//     e.preventDefault();
//     e.target.reset();
//     this.props.handleSubmit(this.state.item);
//     const item = {};
//     this.setState({item});
//   };

//   render() {
//     return (
//       <>
//         <h3>Add Item</h3>
//         <form onSubmit={this.handleSubmit}>
//           <label>
//             <span>To Do Item</span>
//             <input
//               name="text"
//               placeholder="Add To Do List Item"
//               onChange={this.handleInputChange}
//             />
//           </label>
//           <label>
//             <span>Difficulty Rating</span>
//             <input defaultValue="1" type="range" min="1" max="5" name="difficulty" onChange={this.handleInputChange} />
//           </label>
//           <label>
//             <span>Assigned To</span>
//             <input type="text" name="assignee" placeholder="Assigned To" onChange={this.handleInputChange} />
//           </label>
//           <button>Add Item</button>
//         </form>
//       </>
//     );
//   }
// }

function TodoForm(props) {
  const [item, setItem] = useState({});

  const handleInputChange = (e) => {
    setItem({ ...item, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    e.target.reset();
    props.handleSubmit(item);
    const itemReset = {};
    setItem({ itemReset });
  };

  return (
    <>
      <h3>Add Item</h3>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId='addItem'>
          <Form.Label>To Do Item</Form.Label>
          <Form.Control name='text' onChange={handleInputChange} type='text' placeholder='Add To Do List Item' />
        </Form.Group>

        <Form.Group controlId='assign'>
          <Form.Label>Assigned To</Form.Label>
          <Form.Control name='assignee' onChange={handleInputChange} type='text' placeholder='Assigned To' />
        </Form.Group>

        <Form.Group controlId='formBasicRange'>
          <Form.Label>Difficulty Rating</Form.Label>
          <Form.Control className='slider' name='difficulty' onChange={handleInputChange} min='1' max='5' type='range' />
        </Form.Group>

        <Button variant='info' className='btnAdd' type='submit'>
          Add Item
        </Button>
      </Form>
    </>
  );
}

export default TodoForm;
