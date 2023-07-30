import { Beer, BeerDetails } from "../@types/dto";
import { punkRequest } from "../config/axios";

export const getBeers = async (page: number) => {
  try {
    const resp = await punkRequest(`/beers?page=${page}`);
    return resp as Beer[];
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const getOneBeer = async (beer_id: number) => {
  try {
    const resp = await punkRequest(`/beers/${beer_id}`);
    return resp[0] as BeerDetails;
  } catch (error) {
    console.log(error);
    return null;
  }
};
