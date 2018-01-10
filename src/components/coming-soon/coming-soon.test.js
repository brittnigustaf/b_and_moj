import React from 'react';
import ReactDOM from 'react-dom';
import ComingSoon from './coming-soon.js';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ComingSoon />, div);
});
