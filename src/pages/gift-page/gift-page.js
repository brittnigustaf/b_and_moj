import React, { Component } from 'react';

import amazonRegistryLogo from './amazon-registry-logo.png';

export class GiftPage extends Component {
  render() {
    return (
      <div className="card">
        <img
          className="registry-logo amazon"
          src={amazonRegistryLogo}
          alt="amazon-registry"
        />
      </div>
    );
  }
}

export default GiftPage;
