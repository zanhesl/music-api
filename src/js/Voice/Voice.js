import React, { Component } from 'react';
import { connect } from 'react-redux';

// const API_TOKEN = '665db52ff2cfb35cacab30e746f682c1';

class VoiceSearch extends Component {
  componentDidMount() {
    const corsUrl = 'https://cors-anywhere.herokuapp.com/';
    // const data = {
    //   url: 'https://audd.tech/example1.mp3',
    //   return: 'timecode,apple_music,deezer,spotify',
    //   api_token: 'test',
    // };
    const url = `https://api.audd.io/?url=https://audd.tech/example1.mp3&return=lyrics`;
    fetch(corsUrl + url)
      .then(response => response.json())
      .then(data => console.log(data));
  }

  render() {
    return (
      <div className="main-app__search">
        <form className="form form_genius">
          <input type="text" className="input input_genius" />
          <button type="button" className="button button_genius"></button>
        </form>
        <div className="output_test"></div>
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

export default connect(mapStateToProps, mapDispatchToProps)(VoiceSearch);
