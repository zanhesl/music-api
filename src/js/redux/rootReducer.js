const initialState = {
  search: null,
  song: null,
  artist: null,
  album: null,
  image: '',
  listeningLink: '',
};

export default function rootReducer(state = initialState, action) {
  switch (action.type) {
    case 'SEARCH':
      return {
        ...state,
        search: action.payload,
      };
    case 'SONG_FIND':
      return {
        ...state,
        song: action.payload.song,
        artist: action.payload.artist,
        album: action.payload.album,
        image: action.payload.image,
        listeningLink: action.payload.listeningLink,
      };
    default:
      return state;
  }
}
