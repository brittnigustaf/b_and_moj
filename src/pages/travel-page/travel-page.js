import React, { Component } from 'react';

import starsIcon from './images/stars-icon.png';
import './travel-page.css';

export class TravelPage extends Component {
  render() {
    return (
      <div className="travel-page">
        <h1 className="travel-page-title">Hotels</h1>
        <div className="travel flex-items">
          <div className="travel flex-item">
            <img className="three-stars-icon" src={starsIcon} alt="3 stars" />
            <h3 className="hotel-name">
              Hampton Inn &amp; Suites <br /> Grand Rapids Downtown
            </h3>
            <div className="hotel-address">
              433 Dudley Pl NE <br /> Grand Rapids, MI 49503
            </div>
            <div className="hotel-phone">
              Phone:
              <a className="phone-number" href="tel:+16164562000">
                {' '}
                (616) 456-2000{' '}
              </a>
            </div>
            <a
              className="hotel-link"
              target="_blank"
              rel="noopener noreferrer"
              href="https://secure3.hilton.com/en_US/hp/reservation/book.htm?inputModule=HOTEL&ctyhocn=GRRDTHX&spec_plan=CHHMGW&arrival=20180608&departure=20180610&cid=OM,WW,HILTONLINK,EN,DirectLink&fromId=HILTONLINKDIRECT"
            >
              Book online
            </a>
            <div className="hotel-instructions">
              Please book by
              <div className="hotel-date"> May 8, 2018 </div>
              to recieve the discounted rate
              <table className="hotel-room-rates">
                <tbody>
                  <tr className="hotel-room-rate">
                    <td className="hotel-room"> 1 King Bed </td>
                    <td className="hotel-room-price"> $174 </td>
                  </tr>
                  <tr className="hotel-room-rate">
                    <td className="hotel-room"> 2 Queen Beds </td>
                    <td className="hotel-room-price"> $179 </td>
                  </tr>
                  <tr className="hotel-parking-rate">
                    <td className="hotel-room"> Parking (per vehicle) </td>
                    <td className="hotel-room-price"> $8 </td>
                  </tr>
                </tbody>
              </table>
              When booking, reference the
              <div className="teal-text">"Mack-Gustaf Wedding"</div>
              or group code <span className="teal-text">"MGW"</span>
            </div>
          </div>
          <div className="travel flex-item">
            <img className="three-stars-icon" src={starsIcon} alt="3 stars" />
            <h3 className="hotel-name">
              Homewood Suites by Hilton <br /> Grand Rapids Downtown
            </h3>
            <div className="hotel-address">
              161 Ottawa Ave NW <br /> Grand Rapids, MI 49503
            </div>
            <div className="hotel-phone">
              Phone:
              <a className="phone-number" href="tel:+16164512300">
                {' '}
                (616) 451-2300{' '}
              </a>
            </div>
            <div className="empty-hotel-link" />
            <div className="hotel-instructions">
              Please book by
              <div className="hotel-date"> May 5, 2018 </div>
              to recieve the discounted rate
              <table className="hotel-room-rates">
                <tbody>
                  <tr className="hotel-room-rate">
                    <td className="hotel-room"> King Suite (City View) </td>
                    <td className="hotel-room-price"> $214 </td>
                  </tr>
                  <tr className="hotel-parking-rate">
                    <td className="hotel-room"> Parking (per vehicle) </td>
                    <td className="hotel-room-price"> $31 </td>
                  </tr>
                </tbody>
              </table>
              When booking, reference the
              <div className="teal-text">"Mack-Gustaf Wedding"</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default TravelPage;
