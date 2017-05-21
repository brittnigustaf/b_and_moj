import React from 'react';
import ReactDOM from 'react-dom';
import ParallaxHeader from './parallax-header.js';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ParallaxHeader />, div);
});
