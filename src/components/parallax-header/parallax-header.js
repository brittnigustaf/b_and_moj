import React, { Component } from 'react';

import './parallax-header.css';

class ParallaxHeader extends Component {
  constructor(props) {
    super(props);

    const imageCenter = this.getImageCenter();
    this.state = {
      centerImagePosition: imageCenter,
      scrolledImagePosition: imageCenter
    };
  }

  componentDidMount = () => {
    window.addEventListener('scroll', this.handleScroll);
    window.addEventListener('resize', this.handleResize);
  };

  componentWillUnmount = () => {
    window.removeEventListener('scroll', this.handleScroll);
    window.removeEventListener('resize', this.handleResize);
  };

  handleScroll = () => {
    const { centerImagePosition } = this.state;
    this.setState({
      scrolledImagePosition: window.scrollY / 4 + centerImagePosition
    });
  };

  handleResize = () => {
    const imageCenter = this.getImageCenter();
    this.setState({
      centerImagePosition: imageCenter,
      scrolledImagePosition: window.scrollY / 4 + imageCenter
    });
  };

  getImageCenter = () => {
    const viewWidth = Math.max(
      document.documentElement.clientWidth,
      window.innerWidth || 0
    );
    const viewHeight = Math.max(
      document.documentElement.clientHeight,
      window.innerHeight || 0
    );
    const elementHeight = Math.max(viewHeight * 0.4, 500);

    if (viewWidth / elementHeight >= 16 / 9) {
      // image bounded by width
      var imageSizePercentage = viewWidth / 1920;
      return -Math.round((imageSizePercentage * 1080 - elementHeight) / 2);
    } else {
      // image bounded by height
      return 0;
    }
  };

  render() {
    const { scrolledImagePosition } = this.state;
    const pos = { backgroundPosition: '50% ' + scrolledImagePosition + 'px' };

    return (
      <header className="parallax-header" style={pos}>
        <h1 className="wedding-date">06|09|18</h1>
      </header>
    );
  }
}

export default ParallaxHeader;
