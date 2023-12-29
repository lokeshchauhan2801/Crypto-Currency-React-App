import React, { useEffect } from 'react';
import './Navbar.css'
import { CryptoState } from './CurrencyContext';

const Navbar = () => {

  const {currencyChange , setCurrencyChange } = CryptoState()
  useEffect(() => {
    console.log(currencyChange)
   
    // Perform any side effect or logic related to the currency change here
  }, [currencyChange]);
  return (
    <nav>
      <div className="app-name">Crypto Currency</div>
      <div className="search-container">
        <input type="text" className="search-input" placeholder="Search coins..." />
        <button className='search-button'>Search</button>
        <select className="currency-select" 
        value={currencyChange} 
        onChange={(e)=>setCurrencyChange(e.target.value)}>
          <option value={"USD"}>USD</option>
          <option value={"INR"}>INR</option>
        </select>
          
      </div>
    </nav>
  );
};

export default Navbar;
