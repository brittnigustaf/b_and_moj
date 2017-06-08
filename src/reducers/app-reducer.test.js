import reducer from './app-reducer';
import { SET_PAGE } from '../constants/action-types';

describe('app reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual({ currPage: 0 });
  });
});
