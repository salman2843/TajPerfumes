import { Link } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";

const AdminNavbar = () => {
  const { logout } = useAuth();

  return (
    <nav className="bg-black text-white p-4 flex justify-between items-center">
      <h1 className="text-xl font-bold">Admin Dashboard</h1>
      <div className="flex gap-4 items-center">
        <Link to="/admin/dashboard">Dashboard</Link>
        <Link to="/admin/add">Add Product</Link>
        <Link to="/admin/orders">Orders</Link>
        <Link to="/">Home page</Link>
        <button
          onClick={logout}
          className="bg-white text-black px-2 py-1 rounded"
        >
          Logout
        </button>
      </div>
    </nav>
  );
};

export default AdminNavbar;
