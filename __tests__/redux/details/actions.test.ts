import { Beer } from "../../../src/@types/dto";
import { DetailsTypes } from "../../../src/@types/redux_tsa";
import {
  getSingleBeerAction,
  getSingleBeerSuccess,
  loadFailure,
  loadStart,
} from "../../../src/redux/details/actions";

describe("Details Actions", () => {
  it("should create an action to get a single beer", () => {
    const beer_id = 1;
    const expectedAction = {
      type: DetailsTypes.GET_ONE_BEER,
      payload: { beer_id },
    };
    expect(getSingleBeerAction(beer_id)).toEqual(expectedAction);
  });

  it("should create an action to handle getting a single beer successfully", () => {
    const data: Beer = {
      id: 1,
      name: "Beer 1",
      description: "One description",
      image_url: "http://one-url.com",
    };
    const expectedAction = {
      type: DetailsTypes.GET_ONE_BEER_SUCCESS,
      payload: data,
    };
    expect(getSingleBeerSuccess(data)).toEqual(expectedAction);
  });

  it("should create an action to start loading", () => {
    const expectedAction = {
      type: DetailsTypes.LOADING_START,
    };
    expect(loadStart()).toEqual(expectedAction);
  });

  it("should create an action to handle loading failure", () => {
    const expectedAction = {
      type: DetailsTypes.LOADING_FAILURE,
    };
    expect(loadFailure()).toEqual(expectedAction);
  });
});
