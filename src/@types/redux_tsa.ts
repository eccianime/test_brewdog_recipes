// TSA stands for types/states/actions
import { Beer, BeerDetails } from "./dto";

export enum ListTypes {
  LOADING_START = "@list/LOADING_START",
  LOADING_FAILURE = "@list/LOADING_FAILURE",
  SET_CURRENT_PAGE = "@list/SET_CURRENT_PAGE",
  GET_ALL_BEERS = "@list/GET_ALL_BEERS",
  GET_ALL_BEERS_SUCCESS = "@list/GET_ALL_BEERS_SUCCESS",
}

export enum DetailsTypes {
  LOADING_START = "@details/LOADING_START",
  LOADING_FAILURE = "@details/LOADING_FAILURE",
  GET_ONE_BEER = "@details/GET_ONE_BEER",
  GET_ONE_BEER_SUCCESS = "@details/GET_ONE_BEER_SUCCESS",
}

export type LoadingState = {
  loading: boolean;
  error: boolean;
};

export type ListState = LoadingState & {
  beers: Beer[];
  currentPage: number;
};

export type DetailsState = LoadingState & {
  details: BeerDetails | null;
};

export type GetBeersAction = {
  type: ListTypes.GET_ALL_BEERS;
  payload: { page: number };
};

export type GetOneBeerAction = {
  type: DetailsTypes.GET_ONE_BEER;
  payload: { beer_id: number };
};
