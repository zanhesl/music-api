import React, { Component } from 'react';
import { connect } from 'react-redux';

const ACCESS_TOKEN = 'KcpqRmnJ1QLzQj5a0MPiCX4huKp80jTZxwjh3nSpzMjnr11lF6cXadTxeGpZFCQF';
// const CLIENT_ID = '6ZIi-p9i2UY59aFXRrG25vrVHMQLK6FKOFHzAp7j3-WAgqRA0AWG9Gts-m-vgXOf';
// const CLIENT_SECRET = 'IkX2k72sWukpCN1EGdF1o2fmBPdifP04nEuFHkID2xWXdzLEjiXddFP5M6Idn7kALauI5GX5tt8-W6Teb2YBjA';

class GeniusSearch extends Component {
  componentDidMount() {
    const corsUrl = 'https://cors-anywhere.herokuapp.com/';
    const url = `https://api.genius.com/search?q=Mercury&access_token=${ACCESS_TOKEN}`;
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

export default connect(mapStateToProps, mapDispatchToProps)(GeniusSearch);
