import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { setPage } from '../../actions/page-actions';
import TopNav from '../../components/top-nav/top-nav';

import './wedding-nav.css';

const propTypes = {
  dispatch: PropTypes.func.isRequired
};

export class WeddingNav extends Component {
  onNavClick = index => {
    const { dispatch } = this.props;
    dispatch(setPage(index));
  };

  render() {
    return (
      <TopNav
        navItems={[
          { title: 'Events', iconClass: 'calendar-icon' },
          { title: 'RSVP', iconClass: 'letter-icon' },
          { title: 'Travel', iconClass: 'airplane-icon' },
          { title: 'Gift Registry', iconClass: 'present-icon' }
        ]}
        onClick={this.onNavClick}
      />
    );
  }
}

WeddingNav.propTypes = propTypes;

export default connect()(WeddingNav);
