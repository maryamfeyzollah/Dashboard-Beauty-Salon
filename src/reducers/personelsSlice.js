import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  creatPersonel,
  deletePersonel,
  getAllPersonels,
  searchPersonel,
  updatePersonel,
  getPersonelService,
} from "../services/userServices";

export const fetchPersonels = createAsyncThunk(
  "personels/fetchpersonels",
  async () => {
    const response = await getAllPersonels();
    return response.data;
  }
);

export const fetchLatestId = createAsyncThunk(
  "personels/fetchLatestId",
  async () => {
    const response = await getAllPersonels();
    const data = response.data;
    const latestId = data.length > 0 ? parseInt(data[data.length - 1].id) : 0;
    return latestId;
  }
);

export const fetchPersonnelService = createAsyncThunk(
  "/personels/fetchPersonnelservice",
  async (serviceId) => {
    const response = await getPersonelService(serviceId);
    return response.data;
  }
);

export const deleteApiPersonel = createAsyncThunk(
  "/personels/deleteApiPersonel",
  async (initialPersonelId) => {
    await deletePersonel(initialPersonelId);
    return initialPersonelId;
  }
);

export const searchPersonels = createAsyncThunk(
  "personels/search",
  async (searchQuery) => {
    const response = await searchPersonel();
    const data = await response.data;

    const filteredPersonel = data.filter(
      (personel) =>
        personel.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        personel.phone.includes(searchQuery)
    );

    return filteredPersonel;
  }
);

export const AddNewPersonel = createAsyncThunk(
  "/personels/AddNewPersonel",
  async (initialPersonel) => {
    const response = await creatPersonel(initialPersonel);

    return response.data;
  }
);

export const updateApiPersonel = createAsyncThunk(
  "/personels/updateapiPersonel",
  async (initialPersonel) => {
    const response = await updatePersonel(initialPersonel, initialPersonel.id);
    return response.data;
  }
);

const personelsSlice = createSlice({
  name: "personels",
  initialState: [],
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPersonels.fulfilled, (state, action) => {
        return action.payload;
      })
      .addCase(AddNewPersonel.fulfilled, (state, action) => {
        state.push(action.payload);
      })
      .addCase(deleteApiPersonel.fulfilled, (state, action) => {
        return state.filter((service) => service.id !== action.payload);
      })

      .addCase(searchPersonels.fulfilled, (state, action) => {
        return action.payload;
      })
      .addCase(fetchPersonnelService.fulfilled, (state, action) => {
        return action.payload;
      })
      .addCase(fetchLatestId.fulfilled, (state, action) => {
        return action.payload;
      });
  },
});

export const selectAllPersonels = (state) => state.personels;

export const LastPersonnelId = (state) => {
  const personel = state.personels.map((p) => p.id);
  const sortedIds = personel.sort((a, b) => b - a);
  return sortedIds.length > 0 ? sortedIds[0] : null;
};

export const selectPersonelById = (state, personeleId) =>
  state.personels.find((personel) => personel.id === personeleId);

export const selectPersonelByService = (state, serviceId) =>
  state.personels.find((personel) => personel.services === serviceId);

export default personelsSlice.reducer;
