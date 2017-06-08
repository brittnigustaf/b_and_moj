import { SET_PAGE } from '../constants/action-types';

const currPage = (state = 0, action) => {
  switch (action.type) {
    case SET_PAGE:
      return action.payload.pageIndex;
    default:
      return state;
  }
};

export default currPage;
