import { createContext, useReducer } from "react";

const INITIAL_STATE = {
  sidebarToggle: false,
};

export const ApplicationContext = createContext(INITIAL_STATE);

const ApplicationReducer = (state, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export const ApplicationContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(ApplicationReducer, INITIAL_STATE);

  return (
    <ApplicationContext.Provider
      value={{
        sidebarToggle: state.sidebarToggle,
        dispatch,
      }}
    >
      {children}
    </ApplicationContext.Provider>
  );
};
