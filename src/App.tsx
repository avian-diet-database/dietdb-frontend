import React from 'react';
import '..\\node_modules\\bulma\\css\\bulma.min.css';
import "./App.css"
import { LogicSearchBar } from './components/logic/LogicSearchBar';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <LogicSearchBar />
      </header>
    </div>
  );
}

export default App;
