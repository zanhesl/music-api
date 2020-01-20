import React, { Component } from 'react';
import { connect } from 'react-redux';

import GeniusSearch from '../Genius/Genius';
// import VoiceSearch from '../Voice/Voice';
import YouTube from '../YouTube/YouTube';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { value: '' };
  }

  handleChange = event => {
    this.setState({ value: event.target.value });
  };

  render() {
    console.log(this.props);

    return (
      <div className="main-app">
        <GeniusSearch />
        {/* <VoiceSearch /> */}
        <YouTube />
        <form
          className="form form_search"
          onSubmit={event => {
            event.preventDefault();
            // eslint-disable-next-line react/prop-types
            this.props.onInput(this.state.value);
          }}
        >
          <input type="text" className="input input_genius" value={this.state.value} onChange={this.handleChange} />
          <button
            type="button"
            className="button button_genius"
            onClick={
              // eslint-disable-next-line react/prop-types
              () => this.props.onInput(this.state.value)
            }
          >
            Search
          </button>
        </form>
        {// eslint-disable-next-line react/prop-types
        this.props.song ? (
          <div className="song-info">
            <img
              src={
                // eslint-disable-next-line react/prop-types
                this.props.image
              }
              className="img song-info__img"
            />
            <div className="song-info__description">
              <p className="song-name">
                Song:{' '}
                {
                  // eslint-disable-next-line react/prop-types
                  this.props.song
                }
              </p>
              <p className="artist-info">
                Artist:{' '}
                {
                  // eslint-disable-next-line react/prop-types
                  this.props.artist
                }
              </p>
              <p className="album-info">
                Album:{' '}
                {
                  // eslint-disable-next-line react/prop-types
                  this.props.album
                }
              </p>
              <div className="listening-link">
                Link:{' '}
                <a
                  href={
                    // eslint-disable-next-line react/prop-types
                    this.props.listeningLink
                  }
                  className="listening-link__link link"
                >
                  {
                    // eslint-disable-next-line react/prop-types
                    this.props.listeningLink
                  }
                </a>
              </div>
            </div>
          </div>
        ) : null}
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

export default connect(mapStateToProps, mapDispatchToProps)(App);
