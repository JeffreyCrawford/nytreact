import React from 'react';

import Home from "./components/Home";
import Saved from "./components/Saved";

import './App.css';

const App = () => (
  <div>
    <Home />
    <div class="container">
      <Saved />
    </div>
  </div>
);

export default App;
