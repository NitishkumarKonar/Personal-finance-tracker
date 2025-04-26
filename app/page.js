"use client";

import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import TransactionForm from "./components/TransactionForm.js";
import TransactionList from "./components/TransactionList.js";
import ExpensesChart from "./components/ExpensesChart.js";

export default function Home() {
  const [transactions, setTransactions] = useState([]);

  const addTransaction = (transaction) => {
    setTransactions([...transactions, { ...transaction, id: uuidv4() }]);
    alert("Transaction added successfully!");
  };

  const deleteTransaction = (id) => {
    setTransactions(transactions.filter((t) => t.id !== id));
  };

  const editTransaction = (updatedTransaction) => {
    setTransactions(
      transactions.map((t) =>
        t.id === updatedTransaction.id ? updatedTransaction : t
      )
    );
    alert("Transaction updated successfully!");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-blue-300 p-6 text-gray-800">
      <h1 className="text-3xl font-bold mb-6 text-center">Personal Finance Tracker</h1>

      <div className="grid gap-8 max-w-4xl mx-auto">
        <TransactionForm onSubmit={addTransaction} />
        <ExpensesChart transactions={transactions} />
        <TransactionList
          transactions={transactions}
          onDelete={deleteTransaction}
          onEdit={editTransaction}
        />
      </div>
    </div>
  );
}
