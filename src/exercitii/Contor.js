import React, { useState } from 'react';

const Contor = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <p>Contor: {count}</p>
      <button onClick={increment}>Incrementează</button>
    </div>
  );
}

export default Contor;
