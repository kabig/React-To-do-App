import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header style={headerStyle}>
      <h2> To Do List</h2>
      <Link style={{ color: 'white', textDecoration: 'none' }} to="/">
        Home
      </Link>
      |
      <Link style={{ color: '#ffff', textDecoration: 'none' }} to="about">
        About
      </Link>
    </header>
  );
}

const headerStyle = {
  color: '#fff',
  background: '#333',
  textAlign: 'center',
  padding: 10
};
export default Header;
