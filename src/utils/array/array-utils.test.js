import { isNonEmptyArray } from './array-utils.js';

describe('Array Utils', () => {
  it('should determine if an array or an array-like object is non-empty', () => {
    expect(isNonEmptyArray(null)).toBeFalsy();
    expect(isNonEmptyArray(undefined)).toBeFalsy();
    expect(isNonEmptyArray([])).toBeFalsy();
    expect(isNonEmptyArray({ length: 0 })).toBeFalsy();
    expect(isNonEmptyArray([1, 2, 3])).toBeTruthy();
    expect(isNonEmptyArray({ 0: 1, length: 1 })).toBeTruthy();
  });
});
