import reducer from './page-reducer';
import { SET_PAGE } from '../constants/action-types';

describe('pages reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(0);
  });

  it('should handle SET_PAGE', () => {
    let pageIndex = 8;
    expect(
      reducer(0, {
        type: SET_PAGE,
        payload: {
          pageIndex: 8
        }
      })
    ).toEqual(pageIndex);

    pageIndex = -780;
    expect(
      reducer(0, {
        type: SET_PAGE,
        payload: {
          pageIndex: -780
        }
      })
    ).toEqual(pageIndex);
  });
});
