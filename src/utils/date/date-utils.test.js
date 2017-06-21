import React from 'react';
import { daysInMonth, compareDates } from './date-utils.js';

it('correctly determines if two dates are equal', () => {
  const dateStringOne = '2018-06-09T00:00:00Z';
  const dateOne = new Date(Date.UTC(2018, 5, 9, 0, 0, 0));

  const dateStringTwo = '2999-12-31T23:59:00Z';
  const dateTwo = new Date(Date.UTC(2999, 12, 31, 23, 59, 0));

  expect(compareDates(null, null)).toBeFalsy();
  expect(compareDates(dateStringOne, null)).toBeFalsy();
  expect(compareDates(dateStringOne, undefined)).toBeFalsy();
  expect(compareDates(dateStringOne, 'whoa')).toBeFalsy();
  expect(compareDates(dateStringOne, [])).toBeFalsy();
  expect(compareDates(dateStringOne, dateStringTwo)).toBeFalsy();
  expect(compareDates(dateStringOne, dateStringOne)).toBeTruthy();

  expect(compareDates(dateStringOne, dateTwo)).toBeFalsy();
  expect(compareDates(dateOne, dateStringTwo)).toBeFalsy();
  expect(compareDates(dateStringOne, dateOne)).toBeTruthy();
  expect(compareDates(dateOne, dateStringOne)).toBeTruthy();

  expect(compareDates(null, null)).toBeFalsy();
  expect(compareDates(dateOne, null)).toBeFalsy();
  expect(compareDates(dateOne, undefined)).toBeFalsy();
  expect(compareDates(dateOne, 'whoa')).toBeFalsy();
  expect(compareDates(dateOne, [])).toBeFalsy();
  expect(compareDates(dateOne, dateTwo)).toBeFalsy();
  expect(compareDates(dateOne, dateOne)).toBeTruthy();
});
