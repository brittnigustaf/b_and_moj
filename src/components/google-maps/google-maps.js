import PropTypes from 'prop-types';
import React, { Component } from 'react';
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker
} from 'react-google-maps';
import mapStyles from './map-styles.json';

const propTypes = {
  location: PropTypes.shape({
    lat: PropTypes.number.isRequired,
    lng: PropTypes.number.isRequired
  }).isRequired
};

class GoogleMaps extends Component {
  shouldComponentUpdate() {
    return false;
  }

  render() {
    const { location } = this.props;
    const MapWithAMarker = withScriptjs(
      withGoogleMap(props => (
        <GoogleMap
          defaultZoom={16}
          defaultCenter={location}
          defaultOptions={{ styles: mapStyles }}
        >
          <Marker position={location} />
        </GoogleMap>
      ))
    );

    return (
      <MapWithAMarker
        googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyC2FB_wMrjXuSaiyhPUbx3f_3zT3YRf2t4&v=3.exp&libraries=geometry,drawing,places"
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div style={{ height: `100%` }} />}
        mapElement={<div style={{ height: `100%` }} />}
      />
    );
  }
}

GoogleMaps.propTypes = propTypes;

export default GoogleMaps;
