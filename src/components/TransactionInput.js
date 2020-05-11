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
    const id = Date.now();

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
      localStorage.setItem(id, JSON.stringify({ id, name, amount }));
      setAmount("");
      setName("");
    }
  };
  return (
    <div>
      <h3>Add New Transaction</h3>
      <TransactionNameInput name={name} setName={setName} />
      {nameMessage && (
        <p style={{ textAlign: "right", color: "red" }}>{nameMessage}</p>
      )}
      <TransactionAmountInput amount={amount} setAmount={setAmount} />
      {amountMessage && (
        <p style={{ textAlign: "right", color: "red" }}>{amountMessage}</p>
      )}
      <button onClick={transaction}>Add Transaction</button>
    </div>
  );
};
