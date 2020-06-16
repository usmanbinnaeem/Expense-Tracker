import React from "react";
import Header from "./Components/Header";
import Balance from "./Components/Balance";
import IncomeExpenses from "./Components/IncomeExpenses";
import TransactionList from "./Components/TransactionList";
import AddTransaction from "./Components/AddTransaction";

import "./ExpenseTracker.css";
import { GlobalProvider } from "./context/GlobalState";

function ExpenseTracker() {
  return (
    <GlobalProvider>
      <Header />
      <div className="wrap">
        <div className="container">
          <Balance />
          <IncomeExpenses />
          <AddTransaction />
        </div>
        <div className="history-div">
          <TransactionList />
        </div>
      </div>
    </GlobalProvider>
  );
}

export default ExpenseTracker;
