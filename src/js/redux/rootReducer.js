const initialState = {
  search: null,
  song: null,
  author: null,
  album: null,
};

export default function rootReducer(state = initialState, action) {
  switch (action.type) {
    case 'CHANGE_LOC':
      return {
        ...state,
        city: action.payload.city,
        country: action.payload.country,
        location: action.payload.location,
      };
    case 'CHANGE_UNITS':
      return { ...state, units: action.payload };
    default:
      return state;
  }
}
