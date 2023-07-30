import { action } from "typesafe-actions";
import { Beer } from "../../@types/dto";
import { DetailsTypes } from "../../@types/redux_tsa";

export const getSingleBeerAction = (beer_id: number) =>
  action(DetailsTypes.GET_ONE_BEER, { beer_id });

export const getSingleBeerSuccess = (data: Beer) =>
  action(DetailsTypes.GET_ONE_BEER_SUCCESS, data);

export const loadStart = () => action(DetailsTypes.LOADING_START);

export const loadFailure = () => action(DetailsTypes.LOADING_FAILURE);
