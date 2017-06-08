import React, { Component } from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  onClick: PropTypes.func.isRequired
};

class DateCalendar extends Component {
  render() {
    const { onClick } = this.props;

    return (
      <div className="pick-a-page">
        <button
          type="button"
          className="change-page"
          onClick={() => onClick(0)}
        >
          Page 1
        </button>
        <button
          type="button"
          className="change-page"
          onClick={() => onClick(1)}
        >
          Page 2
        </button>
        <button
          type="button"
          className="change-page"
          onClick={() => onClick(2)}
        >
          Page 3
        </button>
      </div>
    );
  }
}

DateCalendar.propTypes = propTypes;

export default DateCalendar;
