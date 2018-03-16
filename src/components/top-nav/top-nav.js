import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

import './top-nav.css';

const propTypes = {
  navItems: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      iconClass: PropTypes.string
    })
  ).isRequired,
  onClick: PropTypes.func.isRequired
};

class TopNav extends Component {
  constructor(props) {
    super(props);

    this.state = { isSticky: false };
  }

  componentDidMount() {
    const componentNode = ReactDOM.findDOMNode(this);
    const currComponentTop = componentNode.getBoundingClientRect().top;
    const currDocumentTop = document.body.getBoundingClientRect().top;

    this.setState({
      initComponentTop: Math.abs(currDocumentTop) + currComponentTop
    });

    window.addEventListener('scroll', () => this.handleScroll());
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', () => this.handleScroll());
  }

  handleScroll() {
    const { initComponentTop, isSticky } = this.state;
    const currDocumentTop = document.body.getBoundingClientRect().top;
    const isComponentAboveTheTop = Math.abs(currDocumentTop) > initComponentTop;

    if (!isSticky && isComponentAboveTheTop) {
      this.setState({ isSticky: true });
    } else if (isSticky && !isComponentAboveTheTop) {
      this.setState({ isSticky: false });
    }
  }

  createNavItems() {
    const { navItems, onClick } = this.props;

    const navItemsElems = new Array(navItems.length);
    for (let i = 0; i < navItems.length; i++) {
      let navItem = navItems[i];
      navItemsElems[i] = (
        <div
          className={`nav-item ${navItem.iconClass}`}
          key={`nav-item-${i}`}
          onClick={() => onClick(i)}
        >
          <div className="nav-title">{navItem.title}</div>
        </div>
      );
    }
    return navItemsElems;
  }

  render() {
    const { isSticky } = this.state;
    const navItems = this.createNavItems();

    return (
      <div className={`top-nav ${isSticky ? 'sticky' : ''}`}>{navItems}</div>
    );
  }
}

TopNav.propTypes = propTypes;

export default TopNav;
