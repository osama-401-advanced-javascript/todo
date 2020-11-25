import React from 'react';
import { AuthContext } from './context.js';
import Show from '../show/show';

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
        <Show condition={this.context.loggedIn}>
          <button onClick={this._handleLogout}>Logout</button>
        </Show>
        <Show condition={!this.context.loggedIn}>
          <form onSubmit={this.handleSigningSubmit}>
            <input onChange={this.handleChange} required placeholder='username' name='username' />
            <input onChange={this.handleChange} required placeholder='password' name='password' />
            <button>Login</button>
          </form>
        </Show>
        <Show condition={!this.context.loggedIn}>
          <form onSubmit={this.handleSignupSubmit}>
            <label>
              {' '}
              <span> Username </span>
              <input onChange={this.handleChange} required placeholder='username' name='username' />
            </label>
            <label>
              {' '}
              <span> Password </span>
              <input onChange={this.handleChange} required placeholder='password' name='password' />
            </label>
            <label>
              {' '}
              <span> Role </span>
              <select onChange={this.handleChange} name='role'>
                <option value='admin'>admin</option>
                <option value='editor'>editor</option>
                <option value='writer'>writer</option>
                <option value='user'>user</option>
              </select>
            </label>
            <button> sign-up</button>
          </form>
        </Show>
      </>
    );
  }
}

export default Login;
