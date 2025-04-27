"use client";

import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#FF6384", "#36A2EB", "#FFCE56"];

export default function CategoryPieChart({ transactions }) {
  const data = [
    { category: "Food", amount: 0 },
    { category: "Transport", amount: 0 },
    { category: "Shopping", amount: 0 },
    { category: "Entertainment", amount: 0 },
    { category: "Other", amount: 0 },
  ];

  transactions.forEach((t) => {
    const category = t.category || "Other";
    const item = data.find((d) => d.category === category);
    if (item) {
      item.amount += parseFloat(t.amount || 0);
    } else {
      data.push({ category, amount: parseFloat(t.amount || 0) });
    }
  });

  const pieData = data.filter((d) => d.amount > 0);

  return (
    <div className="bg-white p-4 rounded-xl shadow">
      <h2 className="text-xl font-semibold mb-4 text-center">Category Wise Expenses</h2>
      {pieData.length > 0 ? (
        <PieChart width={400} height={300}>
          <Pie
            data={pieData}
            dataKey="amount"
            nameKey="category"
            cx="50%"
            cy="50%"
            outerRadius={100}
            fill="#8884d8"
            label
          >
            {pieData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
          <Legend />
        </PieChart>
      ) : (
        <p className="text-center text-gray-500">No data available</p>
      )}
    </div>
  );
}
