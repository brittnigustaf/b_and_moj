import React from 'react';
import ReactDOM from 'react-dom';
import ReactTestUtils from 'react-dom/test-utils';
import DateCalendar from './date-calendar.js';

describe('Date Calendar', () => {
  const onClick = jest.fn();

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <DateCalendar month={5} year={2018} onClick={onClick} />,
      div
    );
  });

  it("shouldn't update component", () => {
    let props = {
      month: 5,
      year: 2018,
      onClick
    };
    let dateCalendar = new DateCalendar(props);

    expect(dateCalendar.shouldComponentUpdate()).toBeFalsy();
  });

  it('should set the correct month information on initialization', () => {
    let props = {
      month: 5,
      year: 2018,
      onClick
    };
    let dateCalendar = new DateCalendar(props);

    expect(dateCalendar.startDay).toBe(5);
    expect(dateCalendar.totalDays).toBe(30);
    expect(dateCalendar.totalWeeks).toBe(5);

    props = {
      month: 6,
      year: 2017,
      onClick
    };
    dateCalendar = new DateCalendar(props);

    expect(dateCalendar.startDay).toBe(6);
    expect(dateCalendar.totalDays).toBe(31);
    expect(dateCalendar.totalWeeks).toBe(6);
  });

  it('should create calendar column headers', () => {
    const props = {
      month: 5,
      year: 2018,
      onClick
    };
    const dateCalendar = new DateCalendar(props);

    expect(dateCalendar.createCalendarColumnHeaders()).toEqual(
      <tr>
        <td className="day-name" key="day-0-s">s</td>
        <td className="day-name" key="day-1-m">m</td>
        <td className="day-name" key="day-2-t">t</td>
        <td className="day-name" key="day-3-w">w</td>
        <td className="day-name" key="day-4-th">th</td>
        <td className="day-name" key="day-5-f">f</td>
        <td className="day-name" key="day-6-s">s</td>
      </tr>
    );
  });

  it('should correctly create the calendar grid', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <DateCalendar month={5} year={2018} onClick={onClick} />,
      div
    );

    const calendarDays = div.querySelectorAll('.calendar-day');
    expect(calendarDays.length).toBe(35);
    expect(calendarDays[0].textContent).toBe('');
    expect(calendarDays[4].textContent).toBe('');
    expect(calendarDays[5].textContent).toBe('1');
    expect(calendarDays[34].textContent).toBe('30');
  });

  it('should correctly create the important date buttons', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <DateCalendar
        month={5}
        year={2018}
        importantDates={[
          { date: '2018-06-09T00:00:00Z' },
          { date: '2018-06-30T00:00:00Z' }
        ]}
        onClick={onClick}
      />,
      div
    );

    const calendarDays = div.querySelectorAll('.calendar-day');
    const importantDates = div.querySelectorAll('.important-date');
    expect(importantDates.length).toBe(2);
    expect(calendarDays[13].children[0]).toEqual(importantDates[0]);
    expect(calendarDays[34].children[0]).toEqual(importantDates[1]);

    ReactTestUtils.Simulate.click(importantDates[0]);
    expect(onClick.mock.calls.length).toBe(1);
    expect(onClick.mock.calls[0][0]).toEqual(new Date('2018-06-09T00:00:00Z'));

    ReactTestUtils.Simulate.click(importantDates[1]);
    expect(onClick.mock.calls.length).toBe(2);
    expect(onClick.mock.calls[1][0]).toEqual(new Date('2018-06-30T00:00:00Z'));
  });
});
