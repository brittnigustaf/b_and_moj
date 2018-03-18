import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './sliding-page.css';

const propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.element),
    PropTypes.element
  ]),
  isVisible: PropTypes.bool,
  visibleHeight: PropTypes.number
};

class SlidingPage extends Component {
  render() {
    const { children, isVisible, visibleHeight } = this.props;

    const style = {
      minHeight: visibleHeight + 'px'
    };
    if (!isVisible) {
      style.height = visibleHeight + 'px';
      style.overflow = 'hidden';
    }
    return (
      <div className="sliding-page" style={style}>
        {children}
      </div>
    );
  }
}

SlidingPage.propTypes = propTypes;

export default SlidingPage;
