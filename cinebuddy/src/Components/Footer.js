// Footer.js
import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      <p>&copy; {currentYear} #Cinebuddy</p>
    </footer>
  );
};

export default Footer;
