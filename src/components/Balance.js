import React, { useContext } from "react";
import { GlobalContext } from "../context/globalState";

export const Balance = () => {
  const { transactions } = useContext(GlobalContext);

  const amount = transactions.reduce(
    (total, transaction) => (total += +transaction.amount),
    0
  );
  const color = amount < 0 ? "negative" : "positive";
  const sign = amount < 0 ? "-$" : "$";

  return (
    <div>
      <h3>Balance</h3>
      <p className={`${color}`}>
        {sign}
        {Math.abs(amount)}
      </p>
    </div>
  );
};
