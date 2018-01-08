import PropTypes from 'prop-types';
import React, { Component } from 'react';
import {
  DAYS,
  DAYS_IN_WEEK,
  MONTHS
} from '../../constants/date/date-constants';
import { isNonEmptyArray } from '../../utils/array/array-utils';
import { compareDates, daysInMonth } from '../../utils/date/date-utils';

import './date-calendar.css';

const propTypes = {
  month: PropTypes.number.isRequired,
  year: PropTypes.number.isRequired,
  importantDates: PropTypes.arrayOf(
    PropTypes.shape({
      event: PropTypes.string,
      date: PropTypes.string.isRequired
    })
  ),
  onClick: PropTypes.func.isRequired
};

const defaultProps = {
  importantDates: []
};

class DateCalendar extends Component {
  constructor(props) {
    super(props);

    const { month, year } = props;
    this.startDay = new Date(year, month, 1).getDay();
    this.totalDays = daysInMonth(month, year);
    this.totalWeeks = Math.ceil(
      (this.totalDays + this.startDay) / DAYS_IN_WEEK
    );
    this.importantDateIndex = 0;
  }

  shouldComponentUpdate() {
    return false;
  }

  createCalendarColumnHeaders = () => {
    const columnHeaders = new Array(DAYS_IN_WEEK);
    for (let day = 0; day < DAYS_IN_WEEK; day++) {
      const name = DAYS.readableName[day];
      columnHeaders[day] = (
        <td className="day-name" key={`day-${day}-${name}`}>
          {name}
        </td>
      );
    }
    return <tr>{columnHeaders}</tr>;
  };

  createCalendarGrid() {
    const { month, year, importantDates, onClick } = this.props;

    const monthGrid = new Array(this.totalWeeks);
    for (let week = 0; week < this.totalWeeks; week++) {
      const isFirstWeek = week === 0;
      const isLastWeek = week === this.totalWeeks - 1;

      const days = new Array(DAYS_IN_WEEK);
      for (let day = 0; day < DAYS_IN_WEEK; day++) {
        const index = week * DAYS_IN_WEEK + day;
        const isBeforeFirstDay = isFirstWeek && day < this.startDay;
        const isAfterLastDay =
          isLastWeek && index >= this.totalDays + this.startDay;

        let date = index - (this.startDay - 1);
        if (isBeforeFirstDay || isAfterLastDay) {
          date = null;
        }

        const currDate = new Date(Date.UTC(year, month, date, 0, 0, 0));
        const currImportantDate = isNonEmptyArray(importantDates)
          ? importantDates[this.importantDateIndex].date
          : null;
        const isImportantDate = compareDates(currDate, currImportantDate);

        if (
          isImportantDate &&
          this.importantDateIndex < importantDates.length - 1
        ) {
          this.importantDateIndex += 1;
        }

        days[day] = (
          <td className="calendar-day" key={`day-${index}`}>
            {isImportantDate ? (
              <button
                className="important-date"
                type="button"
                onClick={() => onClick(currDate)}
              >
                {date}
              </button>
            ) : (
              date
            )}
          </td>
        );
      }
      monthGrid[week] = <tr key={`week-${week}`}>{days}</tr>;
    }
    return monthGrid;
  }

  render() {
    const { month } = this.props;
    const header = this.createCalendarColumnHeaders();
    const body = this.createCalendarGrid();

    return (
      <table className="minimal-calendar">
        <caption>
          <h4 className="month-name">{MONTHS.readableName[month]}</h4>
        </caption>
        <thead>{header}</thead>
        <tbody>{body}</tbody>
      </table>
    );
  }
}

DateCalendar.propTypes = propTypes;
DateCalendar.defaultProps = defaultProps;

export default DateCalendar;
