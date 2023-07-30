import { Reducer } from "redux";
import { ListState, ListTypes } from "../../@types/redux_tsa";

const INITIAL_STATE: ListState = {
  beers: [],
  error: false,
  loading: false,
  currentPage: 1,
};

const listReducer: Reducer<ListState> = (
  state = INITIAL_STATE,
  { type, payload }
) => {
  switch (type) {
    case ListTypes.LOADING_START: {
      return {
        ...state,
        loading: true,
      };
    }
    case ListTypes.GET_ALL_BEERS_SUCCESS: {
      return {
        ...state,
        loading: false,
        error: false,
        beers: payload,
      };
    }
    case ListTypes.LOADING_FAILURE: {
      return {
        ...state,
        loading: false,
        error: true,
        beers: [],
      };
    }
    case ListTypes.SET_CURRENT_PAGE: {
      return {
        ...state,
        currentPage: payload.page,
      };
    }

    default:
      return state;
  }
};

export default listReducer;
