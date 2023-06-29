import React from 'react';
import sellingcar from '../../Assets/sellingcar.jpg';
import "../../Components/Sellingcars.js/Sellingcars.css";


const Sellingcars = () => {
  return (
    <div className='sellingcars'>
      <div className='texts'>
        <h1>Selling a Car? We're buying!</h1>
        <h3>Get up to ₹20,000 exchange bonus when you sell and buy your next car from us</h3>
        <button>Sell my Car</button>
        </div>
        <div className='carimage'>
           <img src={sellingcar} alt='carimage'/>
        </div>
    </div>
  )
}

export default Sellingcars