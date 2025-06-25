import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../api/axios";
import { useAuth } from "../contexts/AuthContext";
import AuthLayout from "../layouts/AuthLayout";

const Login = () => {
  const [form, setForm] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const res = await API.post("/users/login", form);
      login(res.data); // Save to context + localStorage
      navigate("/"); // Redirect to home
    } catch (err) {
      console.error(err);
      setError(err?.response?.data?.message || "Login failed");
    }
  };

  return (
    <div className="p-4 max-w-md mx-auto">
      <AuthLayout>
        <h2 className="text-2xl font-bold mb-4">Login to Your Account</h2>
        {error && <p className="text-red-500 mb-2">{error}</p>}
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="w-full p-2 border rounded mb-2"
            onChange={handleChange}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            className="w-full p-2 border rounded mb-4"
            onChange={handleChange}
            required
          />
          <button
            type="submit"
            className="w-full bg-black text-white py-2 rounded"
          >
            Login
          </button>
        </form>
      </AuthLayout>
    </div>
  );
};

export default Login;
