import React, { Component } from 'react';
import { connect } from 'react-redux';

import GeniusSearch from '../Genius/Genius';
import VoiceSearch from '../Voice/Voice';
import YouTube from '../YouTube/YouTube';

class App extends Component {
  render() {
    return (
      <div className="main-app">
        <GeniusSearch />
        <VoiceSearch />
        <YouTube />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    search: state.search,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onChangeUnits: units => dispatch({ type: 'CHANGE_UNITS', payload: units }),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
