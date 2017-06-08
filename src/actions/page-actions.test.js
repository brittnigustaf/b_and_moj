import { setPage } from './page-actions';
import { SET_PAGE } from '../constants/action-types';

describe('actions', () => {
  it('should create an action to set the page', () => {
    const pageIndex = 0;
    const expectedAction = {
      type: SET_PAGE,
      payload: {
        pageIndex
      }
    };
    expect(setPage(pageIndex)).toEqual(expectedAction);
  });
});
