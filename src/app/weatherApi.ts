import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';

export const weatherApi = createApi({
  reducerPath: 'weatherApi',
  baseQuery: fetchBaseQuery({ baseUrl: '' }),
  endpoints: (build) => ({
    getWeather: build.query({
      query: () => 'weather',
    }),
  }),
});
