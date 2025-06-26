import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Admin from "./pages/Admin";
// import ProductDetail from "./pages/ProductDetail";
import AdminRoute from "./routes/AdminRoute";
import AdminNavbar from "./components/AdminNavbar";
// import Cart from "./pages/Cart";
// import Orders from "./pages/Orders";
// import AddProduct from "./pages/AddProduct";
// import AdminOrders from "./pages/AdminOrders";

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
        {/* <Route path="/product/:id" element={<ProductDetail />} /> */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        {/* <Route path="/cart" element={<Cart />} /> */}
        {/* <Route path="/orders" element={<Orders />} /> */}

        {/* Protected Admin Routes */}
        <Route
          path="/admin"
          element={
            <AdminRoute>
              <Admin />
            </AdminRoute>
          }
        />
        {/* <Route
          path="/admin/add"
          element={
            <AdminRoute>
              <AddProduct />
            </AdminRoute>
          }
        />
        <Route
          path="/admin/orders"
          element={
            <AdminRoute>
              <AdminOrders />
            </AdminRoute>
          }
        /> */}
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
