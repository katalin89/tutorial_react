import React from 'react';
import ComponetaFunctionala from './exercitii/ComponentaFunctionala';
import ComponentaCuProps from './exercitii/ComponentaCuProps';
import Titlu from './exercitii/Titlu';
import Buton from './exercitii/Button';
import Contor from './exercitii/Contor';
import Aplication from './exercitii/Aplication';
import Car from './exercitii/Car';


function App() {
  return (
    <div>
      <h1>Bun venit in aplicatia React!</h1>
      <ComponetaFunctionala />
      <ComponentaCuProps nume="Ion" varsta="20" />

      <Titlu/>
      
      <Buton/>

      const root = ReactDOM.createRoot(document.getElementById('root'));
      root.render(<Car />);

      {/* <Contor/> */}
      

    </div>
  );
}

export default App;
