import React, { createContext, useContext, useReducer } from "react";

// Create the context
export const StateContext = createContext();

// Wrap the app with the state provider
export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

// Custom hook to access the state
export const useStateValue = () => useContext(StateContext);
