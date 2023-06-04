import React from 'react';
import './Nav.css';
import { Link } from 'react-router-dom';

function Nav() {
  return (
    <div class='Nav'>
      <div class="container p-4">
        <ul class="nav nav-fill p-2">
          <li class="nav-item">
            <Link class="nav-link active" aria-current="page" to="/">Home</Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link" to="/footer">Log in</Link>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Servces</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Contact Us</a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Nav
