import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { setPage } from './actions/page-actions';
import ComingSoon from './components/coming-soon/coming-soon';
import DateCalendar from './components/date-calendar/date-calendar';
import SlidingPage from './components/sliding-page/sliding-page';
import SlidingPages from './components/sliding-pages/sliding-pages';
import { MONTHS, IMPORTANT_DATES } from './constants/date/date-constants';
import { compareDates } from './utils/date/date-utils';

import './app.css';

const propTypes = {
  currPage: PropTypes.number.isRequired,
  dispatch: PropTypes.func.isRequired
};

export class App extends Component {
  onDateClick = date => {
    const { currPage, dispatch } = this.props;

    let newPageIndex = currPage;
    IMPORTANT_DATES().forEach((importantDate, index) => {
      if (compareDates(date, importantDate.date)) {
        newPageIndex = index;
        return;
      }
    });

    dispatch(setPage(newPageIndex));
  };

  render() {
    const { currPage } = this.props;
    return (
      <div className="app">
        <div className="app-header">
          <ComingSoon />
        </div>
        <DateCalendar
          month={MONTHS.MAY}
          year={2018}
          importantDates={IMPORTANT_DATES(MONTHS.MAY)}
          onClick={this.onDateClick}
        />
        <DateCalendar
          month={MONTHS.JUNE}
          year={2018}
          importantDates={IMPORTANT_DATES(MONTHS.JUNE)}
          onClick={this.onDateClick}
        />
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
