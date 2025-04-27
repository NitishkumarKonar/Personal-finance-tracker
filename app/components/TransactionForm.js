"use client";

import { useState, useEffect } from "react";

const categories = ["Food", "Travel", "Shopping", "Bills", "Entertainment", "Health", "Others"];

export default function TransactionForm({ onSubmit, editingTransaction }) {
  const [form, setForm] = useState({ amount: "", description: "", date: "", category: "" });

  useEffect(() => {
    if (editingTransaction) {
      setForm(editingTransaction);
    }
  }, [editingTransaction]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.amount || !form.description || !form.date || !form.category) {
      window.alert("All fields are required!");
      return;
    }
    onSubmit(form);
    setTimeout(() => {
      if (editingTransaction) {
        window.alert("Transaction updated successfully!");
      } else {
        window.alert("Transaction added successfully!");
      }
    }, 100);
    setForm({ amount: "", description: "", date: "", category: "" });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 max-w-md w-full">
      <input
        type="number"
        name="amount"
        value={form.amount}
        onChange={handleChange}
        placeholder="Amount"
        className="w-full p-2 border rounded"
      />
      <input
        type="text"
        name="description"
        value={form.description}
        onChange={handleChange}
        placeholder="Description"
        className="w-full p-2 border rounded"
      />
      <input
        type="date"
        name="date"
        value={form.date}
        onChange={handleChange}
        className="w-full p-2 border rounded"
      />
      <select
        name="category"
        value={form.category}
        onChange={handleChange}
        className="w-full p-2 border rounded"
      >
        <option value="">Select Category</option>
        {categories.map((cat) => (
          <option key={cat} value={cat}>
            {cat}
          </option>
        ))}
      </select>
      <button type="submit" className="bg-black text-white px-4 py-2 rounded">
        {editingTransaction ? "Update Transaction" : "Add Transaction"}
      </button>
    </form>
  );
}
