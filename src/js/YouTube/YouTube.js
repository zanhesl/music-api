import React, { Component } from 'react';
import { connect } from 'react-redux';

const API_TOKEN = 'AIzaSyC7eIwgi27c4PXxnjM9Ort2RsH2wkWbSr4';

class YouTube extends Component {
  componentDidMount() {
    // const corsUrl = 'https://cors-anywhere.herokuapp.com/';
    const url = `https://www.googleapis.com/youtube/v3/search?part=snippet&q=Imagine&key=${API_TOKEN}`;
    fetch(url)
      .then(data => data.json())
      .then(json => console.log(json));
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

export default connect(mapStateToProps, mapDispatchToProps)(YouTube);
