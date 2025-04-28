"use client";

import { useState } from "react";
import { useTransaction } from "@/context/TransactionContext";

export default function BudgetForm() {
  const { budgets, setBudgets } = useTransaction();
  const [category, setCategory] = useState("");
  const [amount, setAmount] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (category && amount) {
      setBudgets({ ...budgets, [category]: parseFloat(amount) });
      setCategory("");
      setAmount("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 bg-white p-6 rounded-lg shadow-md">
      <div>
        <label className="block text-gray-700">Category</label>
        <input
          type="text"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="w-full border p-2 rounded mt-1"
          placeholder="e.g., Food, Rent"
        />
      </div>
      <div>
        <label className="block text-gray-700">Budget Amount</label>
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className="w-full border p-2 rounded mt-1"
          placeholder="e.g., 5000"
        />
      </div>
      <button
        type="submit"
        className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700"
      >
        Set Budget
      </button>
    </form>
  );
}
