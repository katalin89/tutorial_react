import React from 'react';

const Buton = () => {
  const handleClick = () => {
    console.log('Buton apăsat!');
  }

  return <button onClick={handleClick}>Apasă-mă!</button>;
}

export default Buton;
