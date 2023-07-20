import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  creatService,
  deleteService,
  getAllServices,
  searchService,
  updateService,
} from "../services/userServices";

export const fetchServices = createAsyncThunk(
  "services/fetchservices",
  async () => {
    const response = await getAllServices();
    return response.data;
  }
);

export const deleteApiService = createAsyncThunk(
  "/services/deleteApiServic",
  async (initialServicId) => {
    await deleteService(initialServicId);
    return initialServicId;
  }
);

export const searchServices = createAsyncThunk(
  "services/search",
  async (searchQuery) => {
    const response = await searchService();
    const data = await response.data;

    const filteredServices = data.filter(
      (service) =>
        service.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        service.peyment.toLowerCase().includes(searchQuery.toLowerCase()) ||
        service.time.includes(searchQuery)
    );

    return filteredServices;
  }
);

export const AddNewService = createAsyncThunk(
  "/services/addNewService",
  async (initialService) => {
    const response = await creatService(initialService);

    return response.data;
  }
);

export const updateApiService = createAsyncThunk(
  "/services/updateapiService",
  async (initialService) => {
    const response = await updateService(initialService, initialService.id);
    return response.data;
  }
);

const servicesSlice = createSlice({
  name: "services",
  initialState: [],
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchServices.fulfilled, (state, action) => {
        return action.payload;
      })
      .addCase(AddNewService.fulfilled, (state, action) => {
        state.push(action.payload);
      })
      .addCase(deleteApiService.fulfilled, (state, action) => {
        return state.filter((service) => service.id !== action.payload);
      })

      .addCase(searchServices.fulfilled, (state, action) => {
        return action.payload;
      });
  },
});

export const selectAllServices = (state) => state.services;

export const selectServiceById = (state, serviceId) =>
  state.services.find((services) => services.id === serviceId);

export const LastServicelId = (state) => {
  const services = state.services.map((s) => s.id);
  const sortedIds = services.sort((a, b) => b - a);
  return sortedIds.length > 0 ? sortedIds[0] : null;
};

export default servicesSlice.reducer;
