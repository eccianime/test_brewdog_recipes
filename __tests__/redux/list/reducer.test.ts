import { AnyAction } from "redux";
import listReducer from "../../../src/redux/list/reducer";
import { ListTypes } from "../../../src/@types/redux_tsa";

describe("List Reducer", () => {
  it("should return the initial state", () => {
    expect(listReducer(undefined, {} as AnyAction)).toEqual({
      beers: [],
      error: false,
      loading: false,
      currentPage: 1,
    });
  });

  it("should handle LOADING_START", () => {
    expect(
      listReducer(undefined, {
        type: ListTypes.LOADING_START,
      })
    ).toEqual({
      beers: [],
      error: false,
      loading: true,
      currentPage: 1,
    });
  });

  it("should handle GET_ALL_BEERS_SUCCESS", () => {
    const beers = [{ id: 1, name: "Beer 1" }];
    expect(
      listReducer(undefined, {
        type: ListTypes.GET_ALL_BEERS_SUCCESS,
        payload: beers,
      })
    ).toEqual({
      beers,
      error: false,
      loading: false,
      currentPage: 1,
    });
  });

  it("should handle LOADING_FAILURE", () => {
    expect(
      listReducer(undefined, {
        type: ListTypes.LOADING_FAILURE,
      })
    ).toEqual({
      beers: [],
      error: true,
      loading: false,
      currentPage: 1,
    });
  });

  it("should handle SET_CURRENT_PAGE", () => {
    const page = 2;
    expect(
      listReducer(undefined, {
        type: ListTypes.SET_CURRENT_PAGE,
        payload: { page },
      })
    ).toEqual({
      beers: [],
      error: false,
      loading: false,
      currentPage: page,
    });
  });
});
