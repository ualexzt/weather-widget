import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IWeather } from '../interface/IWeather';

const API_KEY = '744b6546090f5c902bb7500b1ad74643';

export const weatherApi = createApi({
  reducerPath: 'weatherAPI',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://api.openweathermap.org/data/2.5' }),
  endpoints: (build) => ({
    getWeatherCity: build.query<IWeather, string>({
      query: (city: string, api: string = API_KEY) => ({
        url: '/weather',
        params: {
          q: city,
          appid: api,
        },
      }),
    }),
    getWeatherCoord: build.query<IWeather, { lat: number; lon: number }>({
      query: (arg, api: string = API_KEY) => ({
        url: '/weather',
        params: {
          lat: arg.lat,
          lon: arg.lon,
          appid: api,
        },
      }),
    }),
  }),
});
