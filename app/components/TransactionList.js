import { format } from "date-fns";

export default function TransactionList({ transactions, onDelete, onEdit }) {
  return (
    <div className="space-y-4">
      {transactions.map((transaction) => (
        <div key={transaction.id} className="flex items-center justify-between p-4 bg-gray-100 rounded">
          <div>
            <p className="font-semibold">{transaction.description}</p>
            <p className="text-sm">{format(new Date(transaction.date), "MM/dd/yyyy")}</p>
          </div>
          <div className="flex gap-4">
            <button
              onClick={() => onEdit(transaction)} // Pass the transaction to the onEdit function
              className="bg-blue-500 text-white px-4 py-2 rounded"
            >
              Edit
            </button>
            <button
              onClick={() => onDelete(transaction.id)}
              className="bg-red-500 text-white px-4 py-2 rounded"
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
