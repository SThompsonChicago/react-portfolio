import React from 'react';
import Hello from './components/Hello';
import Header from './Header';

// React apps typically have a single App component at the very top that can reference other React components.
// This component, `App`, is our main component that is importing `Hello` and rendering it in the return method.
function App() {
  return (
    <div className="App">
      <Header/>
    </div>  );
}

export default App;
