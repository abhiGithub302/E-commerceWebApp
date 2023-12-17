import React from 'react';
import  Counter  from './features/counter/Counter';
// import Counter from './features/counter/Counter';

import './App.css';
import Home from './pages/Home';
import ProductList from './features/product-list/ProductList';
function App() {
  return (
    <div className="App">
    <Home></Home>
    <ProductList></ProductList>
      
    </div>
  );
}

export default App;
// export default Counter;

