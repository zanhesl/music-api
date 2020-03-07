import React, { Component } from 'react';
import { connect } from 'react-redux';
// eslint-disable-next-line import/no-extraneous-dependencies
import ReactHtmlParser from 'react-html-parser';
import { func, string } from 'prop-types';

const API_TOKEN = '665db52ff2cfb35cacab30e746f682c1';

class VoiceSearch extends Component {
  constructor(props) {
    super(props);
    this.state = { lyrics: '' };
  }

  componentDidUpdate(previousProps) {
    if (previousProps.song === this.props.song && previousProps.artist === this.props.artist) return false;
    const corsUrl = 'https://cors-anywhere.herokuapp.com/';
    const url = `https://api.audd.io/findLyrics/?q=${this.props.artist}%20${this.props.song}&api_token=${API_TOKEN}`;
    fetch(corsUrl + url)
      .then(response => response.json())
      .then(data => {
        this.setState({ lyrics: data.result[0].lyrics.replace(/\n/g, '<br/>') });
      })
      .catch(() => this.setState({ lyrics: null }));
    return true;
  }

  render() {
    return (
      <div className="main-app__voice">
        <div className="output_test">{ReactHtmlParser(this.state.lyrics)}</div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    song: state.song,
    artist: state.artist,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onChangeUnits: units => dispatch({ type: 'CHANGE_UNITS', payload: units }),
  };
}

VoiceSearch.propTypes = {
  onChangeUnits: func,
  song: string,
  artist: string,
};

export default connect(mapStateToProps, mapDispatchToProps)(VoiceSearch);
