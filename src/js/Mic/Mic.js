import React, { Component } from 'react';
import AudioRecorder from 'react-audio-recorder';

import { connect } from 'react-redux';

class Mic extends Component {
  render() {
    return (
      <div className="mic">
        <AudioRecorder />
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
    onInput: query => dispatch({ type: 'SEARCH', payload: query }),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Mic);
