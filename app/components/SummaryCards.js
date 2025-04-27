"use client";

export default function SummaryCards({ transactions }) {
  const totalExpenses = transactions.reduce((sum, t) => sum + parseFloat(t.amount || 0), 0);
  const recentTransactions = [...transactions].sort((a, b) => new Date(b.date) - new Date(a.date)).slice(0, 5);

  return (
    <div className="grid md:grid-cols-3 gap-4">
      <div className="bg-white p-4 rounded-xl shadow text-center">
        <h2 className="text-xl font-semibold mb-2">Total Expenses</h2>
        <p className="text-2xl font-bold text-red-600">₹{totalExpenses.toFixed(2)}</p>
      </div>

      <div className="bg-white p-4 rounded-xl shadow text-center">
        <h2 className="text-xl font-semibold mb-2">Total Transactions</h2>
        <p className="text-2xl font-bold">{transactions.length}</p>
      </div>

      <div className="bg-white p-4 rounded-xl shadow">
        <h2 className="text-xl font-semibold mb-2 text-center">Recent Transactions</h2>
        <ul className="text-left text-gray-700">
          {recentTransactions.map((t) => (
            <li key={t.id} className="text-sm mb-1">
              {t.description} - ₹{parseFloat(t.amount).toFixed(2)}
            </li>
          ))}
          {recentTransactions.length === 0 && (
            <li className="text-sm text-gray-400">No transactions</li>
          )}
        </ul>
      </div>
    </div>
  );
}
