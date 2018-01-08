import React, { Component } from 'react';

import './parallax-header.css';

class ParallaxHeader extends Component {
  constructor(props) {
    super(props);

    this.state = {
      parallaxScroll: -200
    };
  }

  componentDidMount = () => {
    window.addEventListener('scroll', this.handleScroll);
  };

  componentWillUnmount = () => {
    window.removeEventListener('scroll', this.handleScroll);
  };

  handleScroll = event => {
    this.setState({
      parallaxScroll: -(window.scrollY / 2) - 200
    });
  };

  render() {
    const { parallaxScroll } = this.state;
    const pos = { backgroundPosition: '50% ' + parallaxScroll + 'px' };

    return (
      <header className="parallax-header" style={pos}>
        <h1 className="wedding-date">06|09|18</h1>
      </header>
    );
  }
}

export default ParallaxHeader;
