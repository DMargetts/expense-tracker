import React, { useContext } from "react";
import { GlobalContext } from "../context/globalState";

export const IncomeExpenses = () => {
  const { transactions } = useContext(GlobalContext);

  const positive = transactions.filter(
    (transaction) => transaction.amount >= 0
  );
  const negative = transactions.filter((transaction) => transaction.amount < 0);
  return (
    <div className="incomeExpenses">
      <div className="totals">
        <h3>Income</h3>
        <p className="positive">
          $
          {positive.reduce(
            (total, transaction) => (total += +transaction.amount),
            0
          )}
        </p>
      </div>
      <div className="totals">
        <h3>Expenses</h3>
        <p className="negative">
          $
          {Math.abs(
            negative.reduce(
              (total, transaction) => (total += +transaction.amount),
              0
            )
          )}
        </p>
      </div>
    </div>
  );
};
