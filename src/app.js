import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ParallaxHeader from './components/parallax-header/parallax-header';
import SlidingPage from './components/sliding-page/sliding-page';
import SlidingPages from './components/sliding-pages/sliding-pages';
import WeddingNav from './containers/wedding-nav/wedding-nav';
import EventsPage from './pages/events-page/events-page';
import TravelPage from './pages/travel-page/travel-page';
import RegistryPage from './pages/registry-page/registry-page';

import './app.css';

const propTypes = {
  currPage: PropTypes.number.isRequired
};

export class App extends Component {
  render() {
    const { currPage } = this.props;

    return (
      <div className="app">
        <ParallaxHeader />
        <WeddingNav />
        <div className="nav-content">
          <SlidingPages currPage={currPage}>
            <SlidingPage>
              <EventsPage />
            </SlidingPage>
            <SlidingPage />
            <SlidingPage>
              <TravelPage />
            </SlidingPage>
            <SlidingPage>
              <RegistryPage />
            </SlidingPage>
          </SlidingPages>
        </div>
      </div>
    );
  }
}

App.propTypes = propTypes;

const mapStateToProps = state => {
  return {
    currPage: state.currPage
  };
};

export default connect(mapStateToProps)(App);
