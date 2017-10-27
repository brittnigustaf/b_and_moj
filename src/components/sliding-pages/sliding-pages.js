import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { isInt } from '../../utils/number/number-utils';

import './sliding-pages.css';

const propTypes = {
  currPage: PropTypes.number.isRequired,
  children: PropTypes.arrayOf(PropTypes.element)
};

class SlidingPages extends Component {
  render() {
    const { currPage, children } = this.props;
    const currPosition = isInt(currPage) ? currPage * 100 * -1 : 0;

    return (
      <div className="sliding-pages" style={{ left: currPosition + 'vw' }}>
        {children}
      </div>
    );
  }
}

SlidingPages.propTypes = propTypes;

export default SlidingPages;
