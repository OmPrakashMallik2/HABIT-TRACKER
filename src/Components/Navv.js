import React from 'react';
import './Nav.css';
import { Link } from 'react-router-dom';

function Navv() {
  return (
    <div className='Nav'>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/ourmodels">Our Models</Link>
        </li>
        <li>
          <Link to="/buyonline">Buy Online</Link>
        </li>
        <li>
          <Link to="/finance">Finance</Link>
        </li>
        <li>
          <Link to="/services">Services</Link>
        </li>
        <li>
          <Link to="/ourbrand">Our Brand</Link>
        </li>
      </ul>
    </div>
  )
}

export default Navv