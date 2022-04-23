import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CitySate {
  cities: string[];
}

const initialState: CitySate = {
  cities: [],
};
export const citySlice = createSlice({
  name: 'cities',
  initialState,
  reducers: {
    addCity(state, action: PayloadAction<string>) {
      state.cities.push(action.payload);
    },
    removeCity(state, action: PayloadAction<string>) {
      const idx = state.cities.findIndex((item) => item === action.payload);
      state.cities.splice(idx, 1);
    },
  },
});

export default citySlice.reducer;
