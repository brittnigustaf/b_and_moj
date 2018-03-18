import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { isInt } from '../../utils/number/number-utils';

import './sliding-pages.css';

const propTypes = {
  currPage: PropTypes.number.isRequired,
  children: PropTypes.arrayOf(PropTypes.element)
};

class SlidingPages extends Component {
  constructor(props) {
    super(props);

    this.state = {
      visibleHeight: this.getVisibleElementHeight()
    };
  }

  previousYScrollPosition = 0;

  componentDidMount = () => {
    window.addEventListener('scroll', this.handleScroll);
    window.addEventListener('resize', this.handleResize);
  };

  componentWillUnmount = () => {
    window.removeEventListener('scroll', this.handleScroll);
    window.removeEventListener('resize', this.handleResize);
  };

  handleScroll = () => {
    if (this.previousYScrollPosition !== window.scrollY) {
      this.setState({
        visibleHeight: this.getVisibleElementHeight()
      });
    }
  };

  handleResize = () => {
    this.setState({
      visibleHeight: this.getVisibleElementHeight()
    });
  };

  getVisibleElementHeight = () => {
    const viewHeight = Math.max(
      document.documentElement.clientHeight,
      window.innerHeight || 0
    );
    const headerHeight = Math.max(viewHeight * 0.4, 500);
    const visibleHeaderHeight = Math.max(headerHeight - window.scrollY, 0);
    const topNavHeight = 60;

    return viewHeight - visibleHeaderHeight - topNavHeight;
  };

  render() {
    const { currPage, children } = this.props;
    const { visibleHeight } = this.state;

    const currPosition = isInt(currPage) ? currPage * -100 : 0;
    const childrenWithProps = React.Children.map(children, (child, index) =>
      React.cloneElement(child, {
        visibleHeight: visibleHeight,
        isVisible: index === currPage
      })
    );

    return (
      <div className="sliding-pages-viewport">
        <div className="sliding-pages" style={{ left: currPosition + 'vw' }}>
          {childrenWithProps}
        </div>
      </div>
    );
  }
}

SlidingPages.propTypes = propTypes;

export default SlidingPages;
