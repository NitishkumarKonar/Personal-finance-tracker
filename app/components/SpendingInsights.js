"use client";

export default function SpendingInsights({ transactions, budgets }) {
  if (!transactions.length || !Object.keys(budgets).length) {
    return null;
  }

  const categorySpending = {};

  transactions.forEach((transaction) => {
    const { category, amount } = transaction;
    if (!categorySpending[category]) {
      categorySpending[category] = 0;
    }
    categorySpending[category] += amount;
  });

  const overBudgetCategories = Object.keys(categorySpending).filter((category) => {
    return budgets[category] && categorySpending[category] > budgets[category];
  });

  return (
    <div className="bg-white shadow-lg rounded-2xl p-6 mt-6">
      <h2 className="text-2xl font-bold mb-4 text-center">Spending Insights</h2>
      {overBudgetCategories.length === 0 ? (
        <p className="text-green-600 text-center">🎉 Great job! You are within your budgets.</p>
      ) : (
        <ul className="list-disc list-inside text-red-600">
          {overBudgetCategories.map((category) => (
            <li key={category}>
              🚨 You are overspending on <strong>{category}</strong> (Spent: ₹{categorySpending[category]}, Budget: ₹{budgets[category]})
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
