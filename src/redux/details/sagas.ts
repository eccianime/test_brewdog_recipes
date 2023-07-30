import { call, put, takeLatest } from "redux-saga/effects";
import { Beer } from "../../@types/dto";
import { DetailsTypes, GetOneBeerAction } from "../../@types/redux_tsa";
import * as BeerService from "../../services/beer";
import { getSingleBeerSuccess, loadFailure, loadStart } from "./actions";

function* getOneBeer(action: GetOneBeerAction): Generator<any, void, Beer> {
  try {
    const { beer_id } = action.payload;
    yield put(loadStart());
    const beer = yield call(BeerService.getOneBeer, beer_id);
    yield put(getSingleBeerSuccess(beer));
  } catch (error) {
    yield put(loadFailure());
  }
}

export default [takeLatest(DetailsTypes.GET_ONE_BEER, getOneBeer)];
