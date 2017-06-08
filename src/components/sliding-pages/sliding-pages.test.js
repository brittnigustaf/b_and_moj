import React from 'react';
import ReactDOM from 'react-dom';
import SlidingPages from './sliding-pages.js';

describe('Sliding Pages', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<SlidingPages currPage={0} />, div);
  });

  it('goes to the correct position based on states current page', () => {
    let slidingPages = new SlidingPages({ currPage: undefined });
    expect(slidingPages.render().props.style).toEqual({ left: '0vw' });

    slidingPages = new SlidingPages({ currPage: 'yo' });
    expect(slidingPages.render().props.style).toEqual({ left: '0vw' });

    slidingPages = new SlidingPages({ currPage: null });
    expect(slidingPages.render().props.style).toEqual({ left: '0vw' });

    slidingPages = new SlidingPages({ currPage: NaN });
    expect(slidingPages.render().props.style).toEqual({ left: '0vw' });

    slidingPages = new SlidingPages({ currPage: 2 });
    expect(slidingPages.render().props.style).toEqual({ left: '-200vw' });

    slidingPages = new SlidingPages({ currPage: 100 });
    expect(slidingPages.render().props.style).toEqual({ left: '-10000vw' });

    slidingPages = new SlidingPages({ currPage: -1 });
    expect(slidingPages.render().props.style).toEqual({ left: '100vw' });
  });
});
