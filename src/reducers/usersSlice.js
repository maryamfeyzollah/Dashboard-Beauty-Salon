import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  creatUser,
  deleteUser,
  getAllUsers,
  searchUser,
  updateUser,
} from "../services/userServices";

export const fetchUsers = createAsyncThunk("users/fetchusers", async () => {
  const response = await getAllUsers();
  return response.data;
});

export const deleteApiUser = createAsyncThunk(
  "/users/deleteApiUser",
  async (initialUserId) => {
    await deleteUser(initialUserId);
    return initialUserId;
  }
);

export const searchUsers = createAsyncThunk(
  "users/search",
  async (searchQuery) => {
    const response = await searchUser();
    const data = await response.data;

    // Filter users based on search query
    const filteredUsers = data.filter(
      (user) =>
        user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        user.lastname.toLowerCase().includes(searchQuery.toLowerCase()) ||
        user.phone.includes(searchQuery)
    );

    return filteredUsers;
  }
);

export const AddNewUser = createAsyncThunk(
  "/users/addNewUser",
  async (initialUser) => {
    const response = await creatUser(initialUser);

    return response.data;
  }
);

export const updateApiUser = createAsyncThunk(
  "/users/updateapiuser",
  async (initialUser) => {
    const response = await updateUser(initialUser, initialUser.id);
    return response.data;
  }
);

const usersSlice = createSlice({
  name: "users",
  initialState: [],
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.fulfilled, (state, action) => {
        return action.payload;
        //With returing a new result Immer will replace existing state with
        //whatever we return
      })
      .addCase(AddNewUser.fulfilled, (state, action) => {
        state.push(action.payload);
      })
      .addCase(deleteApiUser.fulfilled, (state, action) => {
        return state.filter((user) => user.id !== action.payload);
      })

      .addCase(searchUsers.fulfilled, (state, action) => {
        return action.payload;
      })
      .addCase(updateApiUser.fulfilled, (state, action) => {
        const { id, name, lastname, phone, roles } = action.payload;
        const existingUser = state.users.find((user) => user.id === id);
        existingUser.name = name;
        existingUser.lastname = lastname;
        existingUser.phone = phone;
        existingUser.roles = roles;
      });
  },
});

export const LastUserlId = (state) => {
  const users = state.users.map((u) => u.id);
  const sortedIds = users.sort((a, b) => b - a);
  return sortedIds.length > 0 ? sortedIds[0] : null;
};

export const selectAllUsers = (state) => state.users;

export const selectUserById = (state, userId) =>
  state.users.find((user) => user.id === userId);

export default usersSlice.reducer;
