// context/TransactionContext.js
"use client";

import { createContext, useContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";

const TransactionContext = createContext();

export const useTransactions = () => useContext(TransactionContext);

export const TransactionProvider = ({ children }) => {
  const [transactions, setTransactions] = useState([]);

  const addTransaction = (transaction) => {
    const newTransaction = { ...transaction, id: uuidv4() };
    setTransactions((prev) => [...prev, newTransaction]);
  };

  const updateTransaction = (id, updatedTransaction) => {
    setTransactions((prev) =>
      prev.map((t) => (t.id === id ? { ...t, ...updatedTransaction } : t))
    );
  };

  const deleteTransaction = (id) => {
    setTransactions((prev) => prev.filter((t) => t.id !== id));
  };

  return (
    <TransactionContext.Provider
      value={{ transactions, addTransaction, updateTransaction, deleteTransaction }}
    >
      {children}
    </TransactionContext.Provider>
  );
};
