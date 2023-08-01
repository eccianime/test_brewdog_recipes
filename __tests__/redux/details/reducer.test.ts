import { AnyAction } from "redux";
import { DetailsTypes } from "../../../src/@types/redux_tsa";
import detailsReducer from "../../../src/redux/details/reducer";

describe("Details Reducer", () => {
  it("should return the initial state", () => {
    expect(detailsReducer(undefined, {} as AnyAction)).toEqual({
      details: null,
      error: false,
      loading: false,
    });
  });

  it("should handle LOADING_START", () => {
    expect(
      detailsReducer(undefined, {
        type: DetailsTypes.LOADING_START,
      })
    ).toEqual({
      details: null,
      error: false,
      loading: true,
    });
  });

  it("should handle GET_ONE_BEER_SUCCESS", () => {
    const beer = { id: 1, name: "Beer 1" };
    expect(
      detailsReducer(undefined, {
        type: DetailsTypes.GET_ONE_BEER_SUCCESS,
        payload: beer,
      })
    ).toEqual({
      details: beer,
      error: false,
      loading: false,
    });
  });

  it("should handle LOADING_FAILURE", () => {
    expect(
      detailsReducer(undefined, {
        type: DetailsTypes.LOADING_FAILURE,
      })
    ).toEqual({
      details: null,
      error: true,
      loading: false,
    });
  });
});
