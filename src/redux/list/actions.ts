import { action } from "typesafe-actions";
import { Beer } from "../../@types/dto";
import { ListTypes } from "../../@types/redux_tsa";

export const getBeersAction = (page: number) =>
  action(ListTypes.GET_ALL_BEERS, { page });

export const loadStart = () => action(ListTypes.LOADING_START);

export const loadSuccess = (data: Beer[]) =>
  action(ListTypes.GET_ALL_BEERS_SUCCESS, data);

export const loadFailure = () => action(ListTypes.LOADING_FAILURE);

export const setCurrentPage = (page: number) =>
  action(ListTypes.SET_CURRENT_PAGE, { page });
