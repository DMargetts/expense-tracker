import React from "react";

export const TransactionAmountInput = (props) => {
  return (
    <div className="transactionInput">
      <label>Amount</label>
      <p>(Positive = Income, Negative = Expense)</p>
      <input
        type="text"
        value={props.amount}
        onChange={(e) => props.setAmount(e.target.value)}
      />
    </div>
  );
};
