import React, { Component } from 'react';
import { connect } from 'react-redux';

import { string, func } from 'prop-types';

import GeniusSearch from '../Genius/Genius';
import VoiceSearch from '../Voice/Voice';
import YouTube from '../YouTube/YouTube';

import './App.scss';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { value: '' };
  }

  handleChange = event => {
    this.setState({ value: event.target.value });
  };

  render() {
    return (
      <div className="main-app">
        <form
          className="form form_search"
          onSubmit={event => {
            event.preventDefault();
            this.props.onInput(this.state.value);
          }}
        >
          <input type="text" className="input input_genius" value={this.state.value} onChange={this.handleChange} />
          <button type="button" className="button button_genius" onClick={() => this.props.onInput(this.state.value)}>
            <p className="visually-hidden">Search</p>
          </button>
        </form>
        {this.props.song ? (
          <div className="song-info">
            <div className="info-wrapper">
              <div className="song-info__description">
                <p className="song-name">
                  <b>Song:</b> {this.props.song}
                </p>
                <p className="artist-info">
                  <b>Artist:</b> {this.props.artist}
                </p>
                <p className="album-info">
                  <b>Album:</b> {this.props.album}
                </p>
              </div>
              <img src={this.props.image} className="img song-info__img" />
            </div>
            <div className="listening-link">
              <b>Link:</b>{' '}
              <a href={this.props.listeningLink} className="listening-link__link link">
                {this.props.listeningLink}
              </a>
            </div>
          </div>
        ) : null}
        <GeniusSearch />
        <YouTube />
        <VoiceSearch />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    search: state.search,
    song: state.song,
    artist: state.artist,
    album: state.album,
    image: state.image,
    listeningLink: state.listeningLink,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onInput: query => dispatch({ type: 'SEARCH', payload: query }),
  };
}

App.propTypes = {
  onInput: func,
  search: string,
  song: string,
  artist: string,
  album: string,
  image: string,
  listeningLink: string,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
