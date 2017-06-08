import React from 'react';
import ReactDOM from 'react-dom';
import ReactShallowRenderer from 'react-test-renderer/shallow';
import configureMockStore from 'redux-mock-store';
import { setPage } from './actions/page-actions';
import ConnectedApp, { App } from './app';

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

    const pageIndex = 3;
    app.onDateClick(pageIndex);
    expect(dispatch.mock.calls.length).toBe(1);
    expect(dispatch.mock.calls[0][0]).toEqual(setPage(pageIndex));
  });
});
