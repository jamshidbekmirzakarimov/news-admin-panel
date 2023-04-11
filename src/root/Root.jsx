import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import PrivateRoute from "../utils/PrivateRoute";
import Login from "../components/Login/Login";
import HomePage from "../pages/Home";
import AdminLayout from "../components/AdminLayout";
import Dashboard from "../pages/Dashboard";
import Product from "../pages/Product";
import Adminabout from "../pages/Adminabout"
import Analytics from "../pages/Analytics";
import Comment from "../pages/Comment";
import ProductList from "../pages/ProductList";
const Root = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<HomePage />} />
        <Route path="/" element={<Navigate to="/home" />} />
        <Route element={<PrivateRoute />}>
          <Route path="/admin" element={<AdminLayout />} />
        </Route>
        <Route path="/login" element={<Login />} />
      </Routes>
      <ToastContainer />
      
      <AdminLayout>
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/product" element={<Product />} />
          <Route path="/adminabout" element={<Adminabout />} />
          <Route path="/analytics" element={<Analytics />} />
          <Route path="/comment" element={<Comment />} />
          <Route path="/productList" element={<ProductList />} />
        </Routes>
      </AdminLayout>
    </BrowserRouter>
  );
};

export default Root;
