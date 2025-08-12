import React from 'react';
import Header from './Components/Header/Header';
import { BrowserRouter , Routes , Route , Link } from 'react-router-dom';


function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <Routes> 
        <Route path="/" element={<Header />} />
        <Route path="/about" element={<Header />} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
