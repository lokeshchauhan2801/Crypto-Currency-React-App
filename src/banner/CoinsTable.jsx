import React, { useState, useEffect } from 'react';
import { CryptoState } from '../components/CurrencyContext';
import { debounce } from 'lodash';
import './CoinTable.css';

const CoinsTable = () => {
  const [coinList, setCoinList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState('');
  const { currencyChange, symbol } = CryptoState();
  const [pageJump, setPageJump] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const fetchCoins = async () => {
    setLoading(true);
    try {
      const url = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currencyChange}&order=gecko_desc&per_page=10&page=${pageJump}&sparkline=false&price_change_percentage=24h`;
      const response = await fetch(url);
      const data = await response.json();
      setCoinList(data);
    } catch (error) {
      console.error('Error fetching data coin table ', error);
    }
    setLoading(false);
  };

  const handleSearchDebounced = debounce(() => {
    console.log('Searching for:', search);
    fetchCoins();
  }, 300);

  const handlePageJump = (pageNumber) => {
    setPageJump(pageNumber);
  };

  useEffect(() => {
    fetchCoins();
  }, [currencyChange, pageJump]);

  useEffect(() => {
    // Set the total pages based on the fetched data or any other logic
    setTotalPages(10);
  }, [coinList]);

  const renderPaginationButtons = () => {
    return Array.from({ length: totalPages }, (_, index) => (
      <button
        key={index + 1}
        className={`jump-button ${pageJump === index + 1 ? 'active' : ''}`}
        onClick={() => handlePageJump(index + 1)}
      >
        {index + 1}
      </button>
    ));
  };

  return (
    <>
      <div className="search-container">
        <input
          type="text"
          placeholder="Search for a coin..."
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
            handleSearchDebounced();
          }}
          className="search-input"
        />
        <button className="search-button" onClick={fetchCoins}>
          Search
        </button>
      </div>

      <div className="coin-table">
        {loading && <p>Loading...</p>}
        {!loading && (
          <table>
            <thead>
              <tr>
                {['Coin', 'Name', 'Price', 'Change In Price', 'Market-Cap'].map((head, index) => (
                  <th key={index}>
                    <h2>{head}</h2>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {coinList.map((coin) => (
                <tr key={coin.id}>
                  <td>
                    <img src={coin.image} alt={coin.name} style={{ width: '60px', height: '60px' }} />
                  </td>
                  <td>
                    <h3>{coin.name}</h3>
                  </td>
                  <td>
                    <h3>
                      {symbol} {Number(coin.current_price).toLocaleString()}{' '}
                    </h3>{' '}
                  </td>
                  <td>
                    <h3 style={{ color: coin.price_change_percentage_24h < 0 ? 'red' : 'green' }}>
                      {coin.price_change_percentage_24h.toFixed(2)} %
                    </h3>
                  </td>
                  <td>
                    <h3>{symbol} {Number(coin.market_cap).toLocaleString()} </h3>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
        <section className="navigate-btn">
          <span>Jump To Page: </span>
          {renderPaginationButtons()}
        </section>
      </div>
    </>
  );
};

export default CoinsTable;
