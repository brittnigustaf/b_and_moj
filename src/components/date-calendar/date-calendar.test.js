import React from 'react';
import ReactDOM from 'react-dom';
import ReactTestUtils from 'react-dom/test-utils';
import DateCalendar from './date-calendar.js';

describe('Date Calendar', () => {
  const onClick = jest.fn();

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<DateCalendar onClick={onClick} />, div);
  });

  it('calls the onClick function with the correct page on click', () => {
    const div = document.createElement('div');
    ReactDOM.render(<DateCalendar onClick={onClick} />, div);

    const buttons = div.querySelectorAll('button');

    const buttonOne = buttons[0];
    ReactTestUtils.Simulate.click(buttonOne);
    expect(onClick.mock.calls.length).toBe(1);
    expect(onClick.mock.calls[0][0]).toBe(0);

    const buttonThree = buttons[2];
    ReactTestUtils.Simulate.click(buttonThree);
    expect(onClick.mock.calls.length).toBe(2);
    expect(onClick.mock.calls[1][0]).toBe(2);

    const buttonTwo = buttons[1];
    ReactTestUtils.Simulate.click(buttonTwo);
    expect(onClick.mock.calls.length).toBe(3);
    expect(onClick.mock.calls[2][0]).toBe(1);
  });
});
