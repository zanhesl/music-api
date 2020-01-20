import React, { Component } from 'react';
import { connect } from 'react-redux';

const API_TOKEN = 'AIzaSyC7eIwgi27c4PXxnjM9Ort2RsH2wkWbSr4';

class YouTube extends Component {
  constructor(props) {
    super(props);
    this.state = { video: '' };
  }

  componentDidUpdate(previousProps) {
    // eslint-disable-next-line react/prop-types
    if (previousProps.song + previousProps.artist === this.props.song + this.props.artist) return false;
    // const corsUrl = 'https://cors-anywhere.herokuapp.com/';
    const url = `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${
      // eslint-disable-next-line react/prop-types
      this.props.song
    }%20${
      // eslint-disable-next-line react/prop-types
      this.props.artist
    }
    }&key=${API_TOKEN}`;
    fetch(url)
      .then(data => data.json())
      .then(json => {
        this.setState({ video: json.items[0].id.videoId });
      })
      .catch(() =>
        // eslint-disable-next-line react/prop-types
        this.setState({ video: null }),
      );
    return true;
  }

  render() {
    return (
      <div className="main-app__youtube">
        {this.state.video ? (
          <iframe
            width="560"
            height="315"
            src={`https://www.youtube.com/embed/${this.state.video}`}
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
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
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onChangeUnits: units => dispatch({ type: 'CHANGE_UNITS', payload: units }),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(YouTube);
