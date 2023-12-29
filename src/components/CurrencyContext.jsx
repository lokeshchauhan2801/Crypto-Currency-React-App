import React, { useContext , useEffect, useState} from 'react';
import { createContext} from 'react';

const CurrencyContext = createContext();

const CurrencyProvider = ({children}) => {
  const[currencyChange, setCurrencyChange] = useState('USD')
  const[symbol, setSymbol] = useState("$")
  useEffect(()=>{
    if(currencyChange==="INR"){
      setSymbol("₹")
    }
    else if(currencyChange==="USD"){
      setSymbol("$") 
    }
  },[currencyChange, symbol])

  return (
    <CurrencyContext.Provider value={{currencyChange, symbol, setCurrencyChange}}>
      {children}
    </CurrencyContext.Provider>
  )
}

export default CurrencyProvider;
export const CryptoState =()=>{
   return useContext(CurrencyContext)
}

