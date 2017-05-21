import React from 'react';
import ReactDOM from 'react-dom';
import SlidingPages from './sliding-pages.js';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<SlidingPages />, div);
});

it('goes to the correct position based on states current page', () => {
  const slidingPages = new SlidingPages({});
  expect(slidingPages.render().props.style).toEqual({ left: '0vw' });

  slidingPages.state = { currPage: 'yo' };
  expect(slidingPages.render().props.style).toEqual({ left: '0vw' });

  slidingPages.state = { currPage: null };
  expect(slidingPages.render().props.style).toEqual({ left: '0vw' });

  slidingPages.state = { currPage: NaN };
  expect(slidingPages.render().props.style).toEqual({ left: '0vw' });

  slidingPages.state = { currPage: 2 };
  expect(slidingPages.render().props.style).toEqual({ left: '-200vw' });

  slidingPages.state = { currPage: 100 };
  expect(slidingPages.render().props.style).toEqual({ left: '-10000vw' });

  slidingPages.state = { currPage: -1 };
  expect(slidingPages.render().props.style).toEqual({ left: '100vw' });
});
