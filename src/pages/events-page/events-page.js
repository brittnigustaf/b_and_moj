import React, { Component } from 'react';
import ComingSoon from '../../components/coming-soon/coming-soon';
import GoogleMaps from '../../components/google-maps/google-maps';

import './events-page.css';

export class EventsPage extends Component {
  render() {
    return (
      <div className="events-page">
        <div className="card">
          <h1> Ceremony </h1>
          <div className="wrapping-container">
            <div className="two-column">
              <div className="image-background spring-grove-background">
                <div className="event-info">
                  <h2>June 9, 2018 ♥ 1:00 p.m.</h2>
                  <h3>Spring Grove Park</h3>
                  <p>
                    1800 Greenly Street <br /> Grandville, MI 49418
                  </p>
                </div>
              </div>
            </div>
            <div className="two-column">
              <GoogleMaps location={{ lat: 42.83265, lng: -85.8255 }} />
            </div>
          </div>
        </div>
        <div className="card">
          <h1> Reception </h1>
          <div className="wrapping-container">
            <div className="two-column">
              <div className="image-background waddell-center-background">
                <div className="event-info">
                  <h2>June 9, 2018 ♥ 6:00 p.m.</h2>
                  <h3>The Waddell Center</h3>
                  <p>
                    1115 Taylor Avenue North <br /> Grand Rapids, MI 49503
                  </p>
                </div>
              </div>
            </div>
            <div className="two-column">
              <GoogleMaps location={{ lat: 42.982772, lng: -85.668823 }} />
            </div>
          </div>
        </div>
        <div className="card">
          <div className="placecard">
            <ComingSoon />
          </div>
        </div>
      </div>
    );
  }
}

export default EventsPage;
