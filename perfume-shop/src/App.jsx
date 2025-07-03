import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components//navbar/Navbar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Admin from "./pages/admin/Admin";
import Cart from "./pages/Cart";

import AdminNavbar from "./components/navbar/AdminNavbar";
import AddProduct from "./pages/admin/AddProduct";
import AdminOrders from "./pages/admin/AdminOrders";
import AdminDashboard from "./pages/admin/AdminDashboard";

function AppRoutes() {
  const location = useLocation();
  const pathname = location.pathname;

  const isAuthPage = ["/login", "/signup"].includes(pathname);
  const isAdminPage = pathname.startsWith("/admin");

  return (
    <>
      {!isAuthPage && !isAdminPage && <Navbar />}
      {isAdminPage && <AdminNavbar />}

      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Home />} />

        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/cart" element={<Cart />} />

        {/* Protected Admin Routes */}
        <Route path="/admin" element={<Admin />} />
        <Route path="/admin/add" element={<AddProduct />} />
        <Route path="/admin/orders" element={<AdminOrders />} />
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
      </Routes>
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
}

export default App;
