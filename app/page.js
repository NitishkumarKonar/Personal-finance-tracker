"use client";

import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import TransactionForm from "./components/TransactionForm.js";
import TransactionList from "./components/TransactionList.js";
import ExpensesChart from "./components/ExpensesChart.js";
import CategoryPieChart from "./components/CategoryPieChart.js";
import SummaryCards from "./components/SummaryCards.js";
import BudgetForm from "./components/BudgetForm.js";
import BudgetVsActualChart from "./components/BudgetVsActualChart.js";
import SpendingInsights from "./components/SpendingInsights.js";

export default function Home() {
  const [transactions, setTransactions] = useState([]);
  const [budgets, setBudgets] = useState({});

  const addTransaction = (transaction) => {
    setTransactions([...transactions, { ...transaction, id: uuidv4() }]);
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
  };

  const setBudget = (category, amount) => {
    setBudgets((prevBudgets) => ({
      ...prevBudgets,
      [category]: amount,
    }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-blue-300 p-6 text-gray-800">
      <h1 className="text-4xl font-bold mb-8 text-center">Personal Finance Tracker</h1>

      <div className="grid gap-10 max-w-5xl mx-auto">
        <TransactionForm onSubmit={addTransaction} />
        <SummaryCards transactions={transactions} />
        <ExpensesChart transactions={transactions} />
        <CategoryPieChart transactions={transactions} />
        <BudgetForm setBudget={setBudget} />
        <BudgetVsActualChart transactions={transactions} budgets={budgets} />
        <SpendingInsights transactions={transactions} budgets={budgets} />
        <TransactionList
          transactions={transactions}
          onDelete={deleteTransaction}
          onEdit={editTransaction}
        />
      </div>
    </div>
  );
}
