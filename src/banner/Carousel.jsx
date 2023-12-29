import React, { useEffect, useState } from 'react';
import './Carousel.css';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { CryptoState } from '../components/CurrencyContext';
 
const Carousel = () => {
 const {currencyChange  , symbol} = CryptoState()
  const [trending, setTrending] = useState([]);
  // const[currency,setCurrency] = useState("USD");
  // const[currencySym ,setCurrencySym] = useState('$')
 
  const fetchTrendingCoins = async () => {
    try {
      let url = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currencyChange}&order=market_cap_desc&per_page=100&page=1&sparkline=false`;
      // let  url =  `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&order=gecko_desc&per_page=10&page=1&sparkline=false&price_change_percentage=24h`
      // let url = 'https://api.coingecko.com/api/v3/search/trending';
      const response = await fetch(url);
      const data = await response.json();
      // setTrending(data.coins); 
      setTrending(data) 
    } catch (error) {
      console.error('Error fetching trending coins:', error);
    }
  };

  useEffect(() => {
    fetchTrendingCoins();
  }, [currencyChange]);

  // let PriceInINR = ()=>{
  //   // let Rupee = 83.19 ;
  //   // let ContPriceToINR = (Rupee * item.data.price).toFixed(2) ;
  //   // setCurrency(ContPriceToINR);
  //   setCurrencySym("₹");
     
  // }


  const responsive = {
    0: {
      items:2,
    
    },
     
    512: {
      items:3,
    },
    720: {
        items:6,
      }, 
    1024: {
        items:8,
      },
  };

  return (<>
  {/* <div className='currency-change' >
    <button className='usd-button' onClick={PriceInUSD}>USD</button>
    <button className='inr-button' onClick={PriceInINR}>INR</button>

  </div> */}
  
    <AliceCarousel
      mouseTracking
      infinite
      autoPlayInterval={1000}
      animationDuration={1500}
      disableDotsControls
      responsive={responsive}
      autoPlay
    >
      {trending.map((coin) => (
        <div key={coin.id} className="carousel-item">
           {/* <div key={coin.item.id} className="carousel-item">  */}

          <img src={coin.image} alt={coin.name} height="80" style={{ marginBottom: 10 }} />    
          {/* <img src={coin.item.large} alt={coin.item.name} height="80" style={{ marginBottom: 10 }} /> */}

          <p>{coin.name}</p> 
          {/* <p>{coin.item.name}</p> */}

          <p>{symbol} {coin.current_price} </p>
          {/* <p>{currencySym} {currency}</p> */}
          
        </div>
      ))}
    </AliceCarousel> 
 </> );
};

export default Carousel;


