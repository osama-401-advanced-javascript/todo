import React from 'react';
import { NavLink } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Navbar from 'react-bootstrap/Navbar';
import Auth from '../../auth/auth.js';

const Header = (props) => {
  return (
    <header>
      <Navbar bg='dark' variant='dark'>
        <Navbar.Brand className='mr-auto'>
          <NavLink to='/todo' activeClassName='list-class'>
            TODO
          </NavLink>
        </Navbar.Brand>
        <NavLink to='/todo' activeClassName='list-class'>
          <Button>Home</Button>
        </NavLink>
        <Auth action='read'>
          <NavLink to='/settings' activeClassName='list-class'>
            <Button>Settings</Button>
          </NavLink>
        </Auth>
      </Navbar>
    </header>
  );
};

export default Header;
