import React, { useContext } from "react";
import { Transaction } from "./Transaction";
import { GlobalContext } from "../context/globalState";

export const TransactionContainer = () => {
  const { transactions } = useContext(GlobalContext);

  return (
    <div>
      <h3>History</h3>
      <p>Hover over item to delete</p>
      <ul>
        {transactions.map((transaction, i) => {
          return (
            <li key={i}>
              <Transaction
                name={transaction.name}
                amount={transaction.amount}
                id={transaction.id}
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
};
