import { Beer } from "../../../src/@types/dto";
import { ListTypes } from "../../../src/@types/redux_tsa";
import {
  getBeersAction,
  loadFailure,
  loadStart,
  loadSuccess,
  setCurrentPage,
} from "../../../src/redux/list/actions";

describe("List Actions", () => {
  it("should create an action to get all beers", () => {
    const page = 1;
    const expectedAction = {
      type: ListTypes.GET_ALL_BEERS,
      payload: { page },
    };
    expect(getBeersAction(page)).toEqual(expectedAction);
  });

  it("should create an action to start loading", () => {
    const expectedAction = {
      type: ListTypes.LOADING_START,
    };
    expect(loadStart()).toEqual(expectedAction);
  });

  it("should create an action to load beers successfully", () => {
    const data: Beer[] = [
      {
        id: 1,
        name: "Beer 1",
        description: "One description",
        image_url: "http://one-url.com",
      },
    ];
    const expectedAction = {
      type: ListTypes.GET_ALL_BEERS_SUCCESS,
      payload: data,
    };
    expect(loadSuccess(data)).toEqual(expectedAction);
  });

  it("should create an action to handle loading failure", () => {
    const expectedAction = {
      type: ListTypes.LOADING_FAILURE,
    };
    expect(loadFailure()).toEqual(expectedAction);
  });

  it("should create an action to set current page", () => {
    const page = 2;
    const expectedAction = {
      type: ListTypes.SET_CURRENT_PAGE,
      payload: { page },
    };
    expect(setCurrentPage(page)).toEqual(expectedAction);
  });
});
