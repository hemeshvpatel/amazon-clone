// Setup data layer
// We need this to track the cart

import { createContext, useContext, useReducer } from "react";

// Data Layer
export const StateContext = createContext();

// Build a provider
export const StateProvider = ({ reducer, initiateState, children }) => {
  <StateContext.Provider value={useReducer(reduce, initializeState)}>
    {children}
  </StateContext.Provider>;
};
