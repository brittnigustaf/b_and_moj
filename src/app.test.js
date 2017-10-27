import React from 'react';
import ReactDOM from 'react-dom';
import ReactShallowRenderer from 'react-test-renderer/shallow';
import configureMockStore from 'redux-mock-store';
import { setPage } from './actions/page-actions';
import ConnectedApp, { App } from './app';
import * as dateConstants from './constants/date/date-constants';

describe('App', () => {
  const mockStore = configureMockStore([]);
  const storeStateMock = {
    currPage: 0
  };
  const dispatch = jest.fn();

  beforeEach(() => {
    dispatch.mockClear();
  });

  it('renders connected app without crashing', () => {
    let store = mockStore(storeStateMock);
    const renderer = new ReactShallowRenderer();
    renderer.render(<ConnectedApp store={store} />);
  });

  it('renders app without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App currPage={0} dispatch={dispatch} />, div);
  });

  it('dispatches the set page action on date click', () => {
    const properties = {
      currPage: 0,
      dispatch
    };
    const app = new App(properties);

    const dateOne = '2018-06-09T00:00:00Z';
    const dateTwo = '2999-12-31T23:59:00Z';
    dateConstants.IMPORTANT_DATES = jest.fn(() => {
      return [
        {
          date: dateOne
        },
        {
          date: dateTwo
        }
      ];
    });

    app.onDateClick(dateOne);
    expect(dispatch.mock.calls.length).toBe(1);
    expect(dispatch.mock.calls[0][0]).toEqual(setPage(0));

    app.onDateClick(dateTwo);
    expect(dispatch.mock.calls.length).toBe(2);
    expect(dispatch.mock.calls[1][0]).toEqual(setPage(1));

    app.onDateClick(null);
    expect(dispatch.mock.calls.length).toBe(3);
    expect(dispatch.mock.calls[2][0]).toEqual(setPage(0));
  });
});
