import React, { useState, useEffect } from 'react';
import './CoinTable.css';
import { CryptoState } from '../components/CurrencyContext';


const CoinsTable = () => {
  const [coinList, setCoinList] = useState([]);
  const [loading, setLoading] = useState(false);
 const {currencyChange  , symbol} = CryptoState()


  const fetchCoins = async () => {
    setLoading(true);
    try {
      let url =`https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currencyChange}&order=gecko_desc&per_page=10&page=1&sparkline=false&price_change_percentage=24h`;
      const response = await fetch(url);
      const data = await response.json();
      setCoinList(data);
    }catch (error) {
      console.log('Error fetching data coin table ', error);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchCoins();
  }, [currencyChange]);

  return (<>
    <div className="coin-table">
      {loading && <p>Loading...</p>}
      {!loading && (
        <table border="1">
          <thead>
            <tr>
              {['Coin', 'Name', 'Price', 'Change In Price', 'Market-Cap'].map((head, index) => (
                <th key={index}><h2>{head}</h2></th>
              ))}
            </tr>
          </thead>
          <tbody>
            {coinList.map((coin) => (
              <tr key={coin.id}>
                <td>
                  <img src={coin.image} alt={coin.name} style={{ width: '60px', height: '60px' }} />
                </td>  
                <td><h3>{coin.name}</h3></td>
                
                <td><h3>{symbol} {Number(coin.current_price).toLocaleString()}{' '} </h3>  </td>
                <td>
                  <h3 style={{ color: coin.price_change_percentage_24h < 0 ? 'red' : 'green'}} >{Math.floor(coin.price_change_percentage_24h) } % </h3>
                  </td>
                <td><h3>{symbol} {Number(coin.market_cap).toLocaleString()} </h3></td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
    </>
  );
};

export default CoinsTable;
