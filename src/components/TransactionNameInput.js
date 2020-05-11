import React from "react";

export const TransactionNameInput = (props) => {
  return (
    <div className="transactionInput">
      <label>Transaction Name</label>
      <input
        type="text"
        value={props.name}
        onChange={(e) => props.setName(e.target.value)}
      />
    </div>
  );
};
