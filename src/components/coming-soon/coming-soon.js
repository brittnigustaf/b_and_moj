import React, { Component } from 'react';

import './coming-soon.css';

class ComingSoon extends Component {
  render() {
    return (
      <div className="coming-soon">
        <i className="sprite pop one" />
        <i className="sprite pop two" />
        <i className="sprite pop three" />
        <i className="sprite sparkle one" />
        <i className="sprite sparkle two" />
        <i className="sprite sparkle three" />
        <i className="sprite sparkle four" />
        <i className="sprite cross one" />
        <i className="sprite cross two" />
        <i className="sprite cross three" />
        <div className="anim-float">
          <div>WORDS</div>
        </div>
      </div>
    );
  }
}

export default ComingSoon;
