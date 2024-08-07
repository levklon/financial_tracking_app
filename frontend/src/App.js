import React from 'react';
import './App.css';
import Transactions from './components/Transactions';
import Categories from './components/Categories';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Financial Tracking App</h1>
      </header>
      <Categories />
      <Transactions />
    </div>
  );
}

export default App;