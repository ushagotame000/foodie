import React from "react";
import Navbar from "./component/Navbar/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Cart from "./pages/Cart/Cart";
import PlaceOrder from "./pages/PlaceOrder/PlaceOrder";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <div className="app w-5/6 mx-auto">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/place-order" element={<PlaceOrder />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
