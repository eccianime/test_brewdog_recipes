import axios, { Method } from "axios";

export const PunkApiInstance = axios.create({
  baseURL: "https://api.punkapi.com/v2/",
});

export const punkRequest = async (
  url: string,
  method?: Method,
  data?: any,
  headers?: any,
  params?: any
) => {
  try {
    const response = await PunkApiInstance.request({
      method: "GET",
      url,
      data,
      headers,
      timeout: 15000,
      params,
    });
    return response.data;
  } catch (error: any) {
    console.error(
      `[${method || "GET"}] ${url}`,
      data,
      headers,
      error,
      error?.response?.data && JSON.stringify(error?.response?.data)
    );
    return error?.response?.data || null;
  }
};
