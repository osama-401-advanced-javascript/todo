import React from 'react';
import base64 from 'base-64';
import jwt from 'jsonwebtoken';
import cookie from 'react-cookies';

export const AuthContext = React.createContext();

const API = 'https://auth-server-401.herokuapp.com';

class AuthProvider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedIn: false,
      login: this.login,
      logout: this.logout,
      signup: this.signup,
      user: {},
      isValidAction: this.isValidAction,
    };
  }

  isValidAction = (action) => {
    console.log(' this.state.user.capabilities', this.state.user.capabilities, action);

    const role = this.state.user.capabilities;
    console.log(' role.includes(action)', role.includes(action));
    console.log(' role', role);

    return role.includes(action);
  };

  login = async (username, password) => {
    try {
      const encodedData = base64.encode(`${username}:${password}`);
      const result = await fetch(`${API}/signin`, {
        method: 'post',
        mode: 'cors',
        cache: 'no-cache',
        headers: { Authorization: `Basic ${encodedData}` },
      });

      let res = await result.json();
      console.log('res: ', res);
      // res has token {token: token, user: user};
      this.validateToken(res.token);
    } catch (e) {
      console.log('error : ', e);
    }
  };
  signup = async (username, password, role) => {
    try {
      var myHeaders = new Headers();
      myHeaders.append('Content-Type', 'application/json');
      var raw = JSON.stringify({ username: username, password: password, role: role });
      var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow',
      };

      const result = await fetch(`${API}/signup`, requestOptions);
      let res = await result.json();
      console.log('res: ', res);
      // res has token {token: token, user: user};
      this.validateToken(res.token);
    } catch (e) {
      alert('error : ', e);
    }
  };
  validateToken = (token) => {
    // validate token using jwt
    // we can use jwt.verify against secret-> .env
    let decodedToken = jwt.decode(token); // from docs its not very recommended .
    // // jwt lets try without secret.
    // // get user object
    if (decodedToken) {
      this.setAuthState(true, token, decodedToken); // to set cookie and update state.
    }
  };

  setAuthState = (loggedIn, token, user) => {
    console.log('here ');
    cookie.save('auth', token); // save token as a cookie in browser
    //update conext with user object
    this.setState({ loggedIn, user });
  };

  logout = () => {
    this.setAuthState(false, null, {});
  };

  componentDidMount() {
    // get the cookie -> validate cookie -> of valid -> update the state
    const cookieToken = cookie.load('auth');
    const token = cookieToken || null;
    this.validateToken(token);
  }

  render() {
    return <AuthContext.Provider value={this.state}>{this.props.children}</AuthContext.Provider>;
  }
}

export default AuthProvider;
