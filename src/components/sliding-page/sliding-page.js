import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './sliding-page.css';

const propTypes = {
  children: PropTypes.arrayOf(PropTypes.element)
};

class SlidingPage extends Component {
  render() {
    return (
      <div className="sliding-page">
        <h1>Oh Hai</h1>
      </div>
    );
  }
}

SlidingPage.propTypes = propTypes;

export default SlidingPage;
