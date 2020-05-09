import React, { useContext } from "react";
import { GlobalContext } from "../context/globalState";

export const Transaction = (props) => {
  const { deleteTransaction } = useContext(GlobalContext);

  const sign = props.amount < 0 ? "-" : "+";
  const color = props.amount < 0 ? "negative" : "positive";
  return (
    <div className="transactionContainer">
      <div className="transaction">
        <p>{props.name}</p>
        <p className={`${color}`}>
          {sign}${Math.abs(props.amount)}
        </p>
      </div>
      <div onClick={() => deleteTransaction(props.id)} className="delete">
        &#x2573;
      </div>
    </div>
  );
};
