import React from 'react';
import logo from './logo.svg';
import './App.css';

import RecipeList from './js/components/RecipeList';

function App() {
  return (
    <div className="app">
      <header className="header">
        Recipes
      </header>
      <div className="recipe-list">
        <RecipeList />
      </div>
    </div>
  );
}

export default App;
