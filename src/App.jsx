import React, { useState, useEffect } from "react";
import LoadingScreen from "./components/LoadingScreen";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Shop from "./pages/shop/Shop";
import Cart from "./pages/cart/Cart";
import { ProductProvider } from "./context/ProductsContext";


const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading delay
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 8000);

    // Clear timeout on component unmount
    return () => clearTimeout(timeout);
  }, []);

  return (
    <BrowserRouter basename="/mintmade">
      <ProductProvider>
        {loading ? ( // Display loading screen if loading is true
          <LoadingScreen />
        ) : (
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        )}
      </ProductProvider>
    </BrowserRouter>
  );
};

export default App;
