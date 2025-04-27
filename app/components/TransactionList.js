"use client";

export default function TransactionList({ transactions, onEdit, onDelete }) {
  return (
    <div className="space-y-4 w-full max-w-2xl">
      {transactions.length === 0 ? (
        <p className="text-gray-500">No transactions added yet.</p>
      ) : (
        transactions.map((transaction, index) => (
          <div
            key={index}
            className="flex flex-col sm:flex-row justify-between items-start sm:items-center bg-white p-4 rounded shadow"
          >
            <div className="flex flex-col">
              <span className="font-bold">₹{transaction.amount}</span>
              <span className="text-gray-600">{transaction.description}</span>
              <span className="text-sm text-gray-400">{transaction.date}</span>
              <span className="text-sm text-blue-500">{transaction.category}</span> {/* Category shown here */}
            </div>
            <div className="flex space-x-2 mt-2 sm:mt-0">
              <button
                onClick={() => onEdit(transaction)}
                className="px-3 py-1 text-sm bg-yellow-500 text-white rounded"
              >
                Edit
              </button>
              <button
                onClick={() => onDelete(transaction)}
                className="px-3 py-1 text-sm bg-red-500 text-white rounded"
              >
                Delete
              </button>
            </div>
          </div>
        ))
      )}
    </div>
  );
}
