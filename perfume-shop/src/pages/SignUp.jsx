import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../api/axios";
import { useAuth } from "../contexts/AuthContext";
import AuthLayout from "../layouts/AuthLayout";

const Signup = () => {
  const [form, setForm] = useState({ name: "", email: "", password: "" });
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
      const res = await API.post("/users/register", form);
      login(res.data); // Stores token + user in context
      navigate("/"); // Redirect after signup
    } catch (err) {
      console.error(err);
      setError(err?.response?.data?.message || "Signup failed");
    }
  };

  return (
    <div className="p-4 max-w-md mx-auto">
      <AuthLayout>
        <h2 className="text-2xl font-bold mb-4">Create Account</h2>
        {error && <p className="text-red-500 mb-2">{error}</p>}
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Name"
            className="w-full p-2 border rounded mb-2"
            onChange={handleChange}
            required
          />
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
            Sign Up
          </button>
        </form>
      </AuthLayout>
    </div>
  );
};

export default Signup;
