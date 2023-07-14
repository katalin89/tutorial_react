import React from 'react';
import ComponetaFunctionala from './exercitii/ComponentaFunctionala';
import ComponentaCuProps from './exercitii/ComponentaCuProps';
import Titlu from './exercitii/Titlu';
import Buton from './exercitii/Button';
import Contor from './exercitii/Contor';

function App() {
  return (
    <div>
      <h1>Bun venit in aplicatia React!</h1>
      <ComponetaFunctionala />
      <ComponentaCuProps nume="Ion" varsta="20" />

      <Titlu/>
      
      <Buton/>

      {/* <Contor/> */}
      

    </div>
  );
}

export default App;
