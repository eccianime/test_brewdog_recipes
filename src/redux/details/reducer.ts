import { Reducer } from "redux";
import { DetailsState, DetailsTypes } from "../../@types/redux_tsa";

const INITIAL_STATE: DetailsState = {
  details: null,
  error: false,
  loading: false,
};

const detailsReducer: Reducer<DetailsState> = (
  state = INITIAL_STATE,
  { type, payload }
) => {
  switch (type) {
    case DetailsTypes.LOADING_START: {
      return {
        ...state,
        loading: true,
      };
    }
    case DetailsTypes.GET_ONE_BEER_SUCCESS: {
      return {
        ...state,
        loading: false,
        error: false,
        details: payload,
      };
    }
    case DetailsTypes.LOADING_FAILURE: {
      return {
        ...state,
        loading: false,
        error: true,
        details: null,
      };
    }
    default:
      return state;
  }
};

export default detailsReducer;
