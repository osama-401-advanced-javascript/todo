import React from 'react';
import { AuthContext } from './context.js';
import Show from '../show/show';
import { Navbar, Button, Form, FormControl } from 'react-bootstrap';

class Login extends React.Component {
  static contextType = AuthContext;

  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      role: '',
    };
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSigningSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
    console.log('in handleSubmit');
    this.context.login(this.state.username, this.state.password);
  };
  handleSignupSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
    console.log('in handleSubmit');
    this.context.signup(this.state.username, this.state.password, this.state.role);
  };
  _handleLogout = (e) => {
    this.context.logout();
  };

  render() {
    console.log('this.context.loggedIn >> ', this.context.loggedIn);

    return (
      <>
        <Navbar bg='primary' variant='dark'>
          <Show condition={this.context.loggedIn}>
            <Button onClick={this._handleLogout} variant='outline-light'>
              Logout
            </Button>
          </Show>

          <Show condition={!this.context.loggedIn}>
            <Form onSubmit={this.handleSigningSubmit} inline>
              <FormControl onChange={this.handleChange} type='text' required placeholder='usernsme' name='username' className='mr-sm-2' />
              <FormControl onChange={this.handleChange} type='text' required placeholder='password' name='password' className='mr-sm-2' />
              <Button type='submit' variant='outline-light'>
                Login
              </Button>
            </Form>
          </Show>
        </Navbar>
        <Navbar bg='primary' variant='dark'>
          <Show condition={!this.context.loggedIn}>
            <Form onSubmit={this.handleSignupSubmit} inline>
              <FormControl onChange={this.handleChange} type='text' required placeholder='usernsme' name='username' className='mr-sm-2' />
              <FormControl onChange={this.handleChange} type='text' required placeholder='password' name='password' className='mr-sm-2' />
              <span> Role </span>
              <select onChange={this.handleChange} name='role'>
                <option value='admin'>admin</option>
                <option value='editor'>editor</option>
                <option value='user'>user</option>
              </select>

              <Button type='submit' variant='outline-light'>
                sign-up
              </Button>
            </Form>
          </Show>
        </Navbar>
      </>
    );
  }
}

export default Login;
