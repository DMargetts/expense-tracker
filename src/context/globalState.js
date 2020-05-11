import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";

//initial state
const storage = Object.keys(localStorage).sort((a, b) => b - a);
let count = 0;
let arr = [];

while (count < localStorage.length) {
  arr.push(JSON.parse(localStorage.getItem(storage[count])));
  count++;
}

const initialState = {
  transactions: arr,
};

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  function addTransaction(inputs) {
    dispatch({
      type: "ADD_TRANSACTION",
      payload: inputs,
    });
  }

  function deleteTransaction(inputs) {
    dispatch({
      type: "DELETE_TRANSACTION",
      payload: inputs,
    });
  }

  return (
    <GlobalContext.Provider
      value={{
        transactions: state.transactions,
        addTransaction,
        deleteTransaction,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
