// Action Creators
export function fetchAstronauts() {
  return (dispatch) => {
    dispatch({ type: "astronauts/astronautsLoading" });
    fetch("http://api.open-notify.org/astros.json")
      .then((response) => response.json())
      .then((json) => {
        dispatch({ type: "astronauts/astronautsLoaded", payload: json.people });
      });
  };
}

// Reducers
const initialState = {
  entities: [], //array of astronauts
  status: "idle",
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case "astronauts/astronautsLoaded":
      return {
        ...state,
        entities: action.payload,
        status: "idle",
      };

    case "astronauts/astronautsLoading":
      return {
        ...state,
        status: "loading",
      };

    default:
      return state;
  }
}
