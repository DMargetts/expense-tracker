import React from "react";
import { Header } from "./components/Header";
import { Balance } from "./components/Balance";
import { IncomeExpenses } from "./components/IncomeExpenses";
import { TransactionContainer } from "./components/TransactionContainer";
import { TransactionInput } from "./components/TransactionInput";

import { GlobalProvider } from "./context/globalState";
import "./App.scss";

function App() {
  return (
    <GlobalProvider>
      <div className="container">
        <Header />
        <Balance />
        <IncomeExpenses />
        <TransactionContainer />
        <TransactionInput />
      </div>
    </GlobalProvider>
  );
}

export default App;
