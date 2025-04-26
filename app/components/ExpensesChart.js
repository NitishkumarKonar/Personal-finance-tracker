"use client";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import { parseISO, format } from "date-fns";

export default function ExpensesChart({ transactions }) {
  const monthlyTotals = {};

  transactions.forEach((t) => {
    const date = parseISO(t.date);
    const month = format(date, "MMM yyyy");
    monthlyTotals[month] = (monthlyTotals[month] || 0) + parseFloat(t.amount);
  });

  const data = Object.entries(monthlyTotals).map(([month, amount]) => ({
    month,
    amount,
  }));

  return (
    <div className="w-full max-w-2xl bg-white p-4 rounded shadow-md">
      <h2 className="text-xl font-bold mb-4 text-black">Monthly Expenses</h2>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="amount" fill="#3b82f6" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
