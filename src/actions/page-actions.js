import { SET_PAGE } from '../constants/action-types';

export const setPage = pageIndex => {
  return {
    type: SET_PAGE,
    payload: {
      pageIndex
    }
  };
};
