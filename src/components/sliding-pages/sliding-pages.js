import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { isInt } from '../../utils/number-utils/number-utils.js';

import './sliding-pages.css';

const propTypes = {
  children: PropTypes.arrayOf(PropTypes.element)
};

class SlidingPages extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currPage: 0
    };
  }

  render() {
    const { children } = this.props;
    const { currPage } = this.state;
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
