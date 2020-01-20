import React, { Component } from 'react';
import { connect } from 'react-redux';

const ACCESS_TOKEN = 'KcpqRmnJ1QLzQj5a0MPiCX4huKp80jTZxwjh3nSpzMjnr11lF6cXadTxeGpZFCQF';
// const CLIENT_ID = '6ZIi-p9i2UY59aFXRrG25vrVHMQLK6FKOFHzAp7j3-WAgqRA0AWG9Gts-m-vgXOf';
// const CLIENT_SECRET = 'IkX2k72sWukpCN1EGdF1o2fmBPdifP04nEuFHkID2xWXdzLEjiXddFP5M6Idn7kALauI5GX5tt8-W6Teb2YBjA';

class GeniusSearch extends Component {
  componentDidUpdate(previousProps) {
    // eslint-disable-next-line react/prop-types
    if (previousProps.search === this.props.search) return false;

    const corsUrl = 'https://cors-anywhere.herokuapp.com/';
    const url = `https://api.genius.com/search?q=${
      // eslint-disable-next-line react/prop-types
      this.props.search
    }&access_token=${ACCESS_TOKEN}`;
    fetch(corsUrl + url)
      .then(response => response.json())
      .then(data =>
        fetch(`${corsUrl}https://api.genius.com${data.response.hits[0].result.api_path}?access_token=${ACCESS_TOKEN}`)
          .then(response => response.json())
          .then(info => {
            console.log(info);

            // eslint-disable-next-line react/prop-types
            this.props.onFindSong({
              song: info.response.song.title,
              artist: info.response.song.primary_artist.name,
              album: info.response.song.album.name,
              image: info.response.song.header_image_url,
              listeningLink: info.response.song.apple_music_player_url,
            });
          })
          .catch(() =>
            // eslint-disable-next-line react/prop-types
            this.props.onFindSong({
              song: null,
              artist: null,
              album: null,
              image: null,
              listeningLink: null,
            }),
          ),
      );
    return true;
  }

  render() {
    return <div className="main-app__search"></div>;
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
    onFindSong: song => dispatch({ type: 'SONG_FIND', payload: song }),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(GeniusSearch);
