import React from "react";

export const TransactionNameInput = (props) => {
  return (
    <div className="transactionInput">
      <label>Transaction Name</label>
      <input type="text" onChange={(e) => props.name(e.target.value)} />
    </div>
  );
};
