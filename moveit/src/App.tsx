import React from 'react';
import { Button } from './components/button';
import { Home } from './Home';

function App() {
  return (
    <div className="App">
      <h1>Opa! My First app react, hummmm, just not.</h1>

      <h2>My Buttons,  view in <pre>/components/Button.tsx</pre></h2>
      <Button color="red">
        Botao 1
      </Button>

      <br />

      <Home />

    </div>
  );
}

export default App;
