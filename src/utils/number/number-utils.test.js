import React from 'react';
import { isInt } from './number-utils.js';

it('correctly determines if a number is an integer', () => {
  expect(isInt(42)).toBeTruthy();
  expect(isInt('42')).toBeTruthy();
  expect(isInt(4e2)).toBeTruthy();
  expect(isInt('4e2')).toBeTruthy();
  expect(isInt(' 1 ')).toBeTruthy();
  expect(isInt('')).toBeFalsy();
  expect(isInt('  ')).toBeFalsy();
  expect(isInt(42.1)).toBeFalsy();
  expect(isInt('1a')).toBeFalsy();
  expect(isInt('4e2a')).toBeFalsy();
  expect(isInt(null)).toBeFalsy();
  expect(isInt(undefined)).toBeFalsy();
  expect(isInt(NaN)).toBeFalsy();
});
