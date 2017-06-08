import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import logo from './logo.svg';
import { setPage } from './actions/page-actions';
import SlidingPage from './components/sliding-page/sliding-page';
import SlidingPages from './components/sliding-pages/sliding-pages';
import DateCalendar from './components/date-calendar/date-calendar';

import './app.css';

const propTypes = {
  currPage: PropTypes.number.isRequired,
  dispatch: PropTypes.func.isRequired
};

export class App extends Component {
  onDateClick = newPageIndex => {
    const { dispatch } = this.props;
    dispatch(setPage(newPageIndex));
  };

  render() {
    const { currPage } = this.props;
    return (
      <div className="app">
        <div className="app-header">
          <img src={logo} className="app-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <DateCalendar onClick={this.onDateClick} />
        <SlidingPages currPage={currPage}>
          <SlidingPage />
          <SlidingPage />
          <SlidingPage />
        </SlidingPages>
      </div>
    );
  }
}

App.propTypes = propTypes;

const mapStateToProps = state => {
  return {
    currPage: state.currPage
  };
};

export default connect(mapStateToProps)(App);
