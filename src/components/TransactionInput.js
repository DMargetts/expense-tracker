import React, { useState, useContext } from "react";
import { TransactionNameInput } from "./TransactionNameInput";
import { TransactionAmountInput } from "./TransactionAmountInput";
import { GlobalContext } from "../context/globalState";

export const TransactionInput = () => {
  const { addTransaction } = useContext(GlobalContext);
  const [name, setName] = useState("");
  const [amount, setAmount] = useState("");
  const [nameMessage, setNameMessage] = useState("");
  const [amountMessage, setAmountMessage] = useState("");

  const transaction = () => {
    const id = Math.floor(Math.random() * 100000000);

    if (isNaN(amount) || amount === "" || name === "") {
      if (isNaN(amount)) {
        setAmountMessage("Must be a number");
      } else if (amount === "") {
        setAmountMessage("Cannot be empty");
      } else {
        setAmountMessage("");
      }

      if (name.length === 0) {
        setNameMessage("Cannot be empty");
      } else {
        setNameMessage("");
      }
    } else {
      setNameMessage("");
      setAmountMessage("");
      addTransaction({ id, name, amount });
    }
  };
  return (
    <div>
      <h3>Add New Transaction</h3>
      <TransactionNameInput name={setName} />
      {nameMessage && (
        <p style={{ textAlign: "right", color: "red" }}>{nameMessage}</p>
      )}
      <TransactionAmountInput amount={setAmount} />
      {amountMessage && (
        <p style={{ textAlign: "right", color: "red" }}>{amountMessage}</p>
      )}
      <button onClick={transaction}>Add Transaction</button>
    </div>
  );
};
