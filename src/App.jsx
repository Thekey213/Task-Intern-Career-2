import React, { useState, useEffect } from "react";
import LoadingScreen from "./components/LoadingScreen";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Shop from "./pages/shop/Shop";
import Cart from "./pages/cart/Cart";
import { ProductProvider } from "./context/ProductsContext"; 
import Signup from "./pages/login/SignUp";
import Login from "./pages/login/Login";

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 10000);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <BrowserRouter basename="/Task-Intern-Career-2">
      <ProductProvider>
        {loading ? (
          <LoadingScreen />
        ) : (
          <Routes>
            <Route path="/" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            
            <Route path="/home" element={<Home />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        )}
      </ProductProvider>
    </BrowserRouter>
  );
};

export default App;
