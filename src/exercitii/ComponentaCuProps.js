import React from 'react';

const ComponentaCuProps = (props) => {
  return (
    <div>
      <h1>Bun venit, {props.nume}!</h1>
      <p>Vârsta ta este: {props.varsta} ani.</p>
    </div>
  );
}

export default ComponentaCuProps;
