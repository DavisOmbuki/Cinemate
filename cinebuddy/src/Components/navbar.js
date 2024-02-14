import React from 'react';
import { Link } from 'react-router-dom';

function Navigation() {
  return (
    <nav>
      <ul>
        <li><Link to="/">Browse</Link></li>
        {/* Add more navigation links as needed */}
      </ul>
    </nav>
  );
}

export default Navigation;
