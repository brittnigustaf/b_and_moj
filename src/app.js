import React, { Component } from 'react';
import logo from './logo.svg';
import SlidingPage from './components/sliding-page/sliding-page.js';
import SlidingPages from './components/sliding-pages/sliding-pages.js';

import './app.css';

class App extends Component {
  render() {
    return (
      <div className="app">
        <div className="app-header">
          <img src={logo} className="app-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <SlidingPages>
          <SlidingPage />
          <SlidingPage />
          <SlidingPage />
        </SlidingPages>
      </div>
    );
  }
}

export default App;
