import React, { useState } from 'react';
import './NewsLetter.css'

const NewsLetter = () => {
  const [message, setMessage] = useState('');

  const handleSubscribe = () => {
      setMessage('Thank you for subscribing!');
  };
  return (
    <div className='newsletter'>
      <h1>Get Exclusive Offers On Your Email</h1>
      <p>Subscribe to our newsletter and stay updated.</p>
      <div>
        <input type="email" placeholder='Your email id' />
        <button onClick={handleSubscribe}>Subscribe</button>
      </div>
      {message && <p className='message'>{message}</p>}
    </div>
  )
}

export default NewsLetter
