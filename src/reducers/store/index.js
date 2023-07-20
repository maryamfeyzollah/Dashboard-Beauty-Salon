import { configureStore } from "@reduxjs/toolkit";

import usersSlice from "../usersSlice";
import servicesSlice from "../servicesSlice";
import personelsSlice from "../personelsSlice";
import reserveSlice from "../reserveSlice";

export const store = configureStore({
  reducer: {
    users: usersSlice,
    services: servicesSlice,
    personels: personelsSlice,
    reserve: reserveSlice,
  },
});
