import React from 'react';
import CartButton from '../CartButton/CartButton';
import SearchBar from '../SearchBar/SearchBar';
import ml from './ml.png';

import './Header.css';

function HeaderWithImage() { 
  return (
    <header className="header">
      <div className="container">
        <div className="left-content">
          <img src={ml} alt="Ml" className="ml" />
          <SearchBar />
        </div>
        <CartButton />
      </div>
    </header>
  );
}

export default HeaderWithImage; 
