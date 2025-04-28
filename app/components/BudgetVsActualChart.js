"use client";

import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from "recharts";

export default function BudgetVsActualChart({ transactions, budgets }) {
  const categoryTotals = transactions.reduce((acc, transaction) => {
    acc[transaction.category] = (acc[transaction.category] || 0) + transaction.amount;
    return acc;
  }, {});

  const data = Object.keys(budgets).map((category) => ({
    category,
    Budget: budgets[category] || 0,
    Actual: categoryTotals[category] || 0,
  }));

  if (data.length === 0) {
    return <div className="text-center text-gray-500">No budget data available</div>;
  }

  return (
    <div className="bg-white rounded-2xl shadow-md p-6">
      <h2 className="text-2xl font-semibold mb-4 text-center">Budget vs Actual</h2>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data} layout="vertical">
          <XAxis type="number" />
          <YAxis dataKey="category" type="category" />
          <Tooltip />
          <Legend />
          <Bar dataKey="Budget" fill="#8884d8" />
          <Bar dataKey="Actual" fill="#82ca9d" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
