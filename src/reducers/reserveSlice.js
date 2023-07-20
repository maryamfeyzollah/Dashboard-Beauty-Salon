import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getAllReserve, searchReserves } from "../services/userServices";

export const fetchReserve = createAsyncThunk(
  "reserve/fetchreserve",
  async () => {
    const response = await getAllReserve();
    return response.data;
  }
);

export const searchReserve = createAsyncThunk(
  "reserve/search",
  async (searchQuery) => {
    const response = await searchReserves();
    const data = await response.data;

    const filteredReserve = data.filter(
      (reserve) =>
        reserve.userName.toLowerCase().includes(searchQuery.toLowerCase()) ||
        reserve.userFamily.toLowerCase().includes(searchQuery.toLowerCase()) ||
        reserve.personel.toLowerCase().includes(searchQuery.toLowerCase()) ||
        reserve.userPhone.includes(searchQuery) ||
        reserve.services.includes(searchQuery)
    );

    return filteredReserve;
  }
);

const reserveSlice = createSlice({
  name: "reserve",
  initialState: [],
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchReserve.fulfilled, (state, action) => {
        return action.payload;
      })

      .addCase(searchReserve.fulfilled, (state, action) => {
        return action.payload;
      });
  },
});

export const selectAllReserve = (state) => state.reserve;

export default reserveSlice.reducer;
