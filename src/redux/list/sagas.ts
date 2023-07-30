import { call, put, takeLatest } from "redux-saga/effects";
import { Beer } from "../../@types/dto";
import { GetBeersAction, ListTypes } from "../../@types/redux_tsa";
import * as BeerService from "../../services/beer";
import { loadFailure, loadStart, loadSuccess } from "./actions";

function* getBeers(
  action: GetBeersAction
): Generator<any, void, Beer[] | null> {
  try {
    const { page } = action.payload;
    yield put(loadStart());
    const beers = yield call(BeerService.getBeers, page);
    if (beers) {
      yield put(loadSuccess(beers));
    }
  } catch (error) {
    yield put(loadFailure());
  }
}

export default [takeLatest(ListTypes.GET_ALL_BEERS, getBeers)];
