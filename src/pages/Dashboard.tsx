import { useNavigate } from "react-router-dom";
import DB from "../components/UserData";

const Dashboard: React.FC = () => {
  const navigate = useNavigate();
  const storedUser = new DB();
  const user = storedUser.getUser(); // ✅ must call it as a function

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-xl p-6">
        <h1 className="text-2xl font-semibold mb-4">
          Welcome, <span className="text-purple-600">{user.username}</span>
        </h1>

        <button
          onClick={() => navigate("/add-transaction")}
          className="mb-6 bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition"
        >
          Add Transaction
        </button>

        {user.transactions.length > 0 ? (
          <table className="w-full border-collapse border border-purple-200">
            <thead className="bg-purple-100">
              <tr>
                <th className="border border-purple-200 px-4 py-2 text-left">
                  Date
                </th>
                <th className="border border-purple-200 px-4 py-2 text-left">
                  Type
                </th>
                <th className="border border-purple-200 px-4 py-2 text-left">
                  Amount
                </th>
                <th className="border border-purple-200 px-4 py-2 text-left">
                  Category
                </th>
                <th className="border border-purple-200 px-4 py-2 text-left">
                  Reason
                </th>
              </tr>
            </thead>
            <tbody>
              {user.transactions.map((el, i) => (
                <tr key={i} className="odd:bg-white even:bg-purple-50">
                  <td className="border border-purple-100 px-4 py-2">{el.date}</td>
                  <td className="border border-purple-100 px-4 py-2">{el.type}</td>
                  <td className="border border-purple-100 px-4 py-2">
                    ₦{el.amount.toLocaleString()}
                  </td>
                  <td className="border border-purple-100 px-4 py-2">
                    {el.category}
                  </td>
                  <td className="border border-purple-100 px-4 py-2">{el.reason}</td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p className="text-gray-500 text-center py-10">
            No transactions yet.
          </p>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
