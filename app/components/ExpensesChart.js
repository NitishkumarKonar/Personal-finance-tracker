"use client";

import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from "recharts";

const COLORS = [
  "#0088FE", "#00C49F", "#FFBB28", "#FF8042",
  "#A28CFF", "#FF6699", "#33CC99", "#FF9933",
];

export default function ExpensesChart({ transactions }) {
  const categoryTotals = transactions.reduce((acc, transaction) => {
    if (transaction.category) {
      acc[transaction.category] = (acc[transaction.category] || 0) + parseFloat(transaction.amount);
    }
    return acc;
  }, {});

  const data = Object.keys(categoryTotals).map((category) => ({
    name: category,
    value: categoryTotals[category],
  }));

  if (data.length === 0) {
    return (
      <div className="text-gray-500">
        No transaction data to display.
      </div>
    );
  }

  return (
    <div className="w-full h-96">
      <ResponsiveContainer>
        <PieChart>
          <Pie
            data={data}
            dataKey="value"
            nameKey="name"
            outerRadius={130}
            fill="#8884d8"
            label
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}
