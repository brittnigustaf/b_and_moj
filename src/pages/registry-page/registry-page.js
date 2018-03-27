import React, { Component } from 'react';

import amazonRegistryLogo from './amazon-registry-logo.png';
import bbbRegistryLogo from './bbb-registry-logo.png';
import michToCali from './mich-to-cali.png';
import './registry-page.css';

export class RegistryPage extends Component {
  render() {
    return (
      <div className="registry-page">
        <h1 className="registry-page-title">Gift Registry</h1>
        <div className="registry-location-request">
          <div>
            <img
              className="registry-location-image"
              src={michToCali}
              alt="Airplane flying from Michigan to California"
            />
          </div>
          <div className="registry-location-message">
            <h3>Jordan and Brittni&apos;s Address</h3>
            <p>
              3068 West Kyne Street Unit 310 <br /> San Mateo, CA 94403
            </p>
          </div>
        </div>
        <div className="registry flex-items">
          <div className="flex-item">
            <a
              className="registry-button"
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.amazon.com/wedding/jordan-mack-brittni-gustaf-grand-rapids-june-2018/registry/3UJKZIO04RPGW"
            >
              <img
                className="registry-logo amazon"
                src={amazonRegistryLogo}
                alt="Amazon Wedding Registry"
              />
            </a>
          </div>
          <div className="flex-item">
            <a
              className="registry-button"
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.bedbathandbeyond.com/store/giftregistry/view_registry_guest.jsp?registryId=545316068&eventType=Wedding&pwsurl=&eventType=Wedding"
            >
              <img
                className="registry-logo bbb"
                src={bbbRegistryLogo}
                alt="Bed Bath and Beyond Wedding Registry"
              />
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default RegistryPage;
