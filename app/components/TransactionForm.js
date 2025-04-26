"use client";

import { useState, useEffect } from "react";

export default function TransactionForm({ onSubmit, editingTransaction }) {
  const [form, setForm] = useState({ amount: "", description: "", date: "" });

  useEffect(() => {
    if (editingTransaction) {
      setForm(editingTransaction);
    } else {
      setForm({ amount: "", description: "", date: "" });
    }
  }, [editingTransaction]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.amount || !form.description || !form.date) {
      window.alert("All fields are required!");
      return;
    }
    onSubmit(form); // Pass form to parent (Home)
    setForm({ amount: "", description: "", date: "" }); // Reset form after submit
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
      <button type="submit" className="bg-black text-white px-4 py-2 rounded">
        {editingTransaction ? "Update Transaction" : "Add Transaction"}
      </button>
    </form>
  );
}
