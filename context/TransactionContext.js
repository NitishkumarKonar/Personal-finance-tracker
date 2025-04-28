"use client";
import { createContext, useContext, useState } from "react";

const TransactionContext = createContext();

export const useTransaction = () => useContext(TransactionContext);

export const TransactionProvider = ({ children }) => {
  const [transactions, setTransactions] = useState([]);
  const [budgets, setBudgets] = useState({}); // <-- This

  return (
    <TransactionContext.Provider value={{ transactions, setTransactions, budgets, setBudgets }}>
      {children}
    </TransactionContext.Provider>
  );
};
