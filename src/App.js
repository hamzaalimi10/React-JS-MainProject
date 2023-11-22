import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./Components/Header";
import Home from "./path/Home";
import Footer from "./Components/Footer";
import Shop from "./path/Shop";
import Product from "./path/Product";
import Cart from "./path/Cart";
import Register from "./path/auth/Register";
import Login from "./path/auth/Login";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/product/:id" element={<Product />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Routes>
        <Footer />
      </BrowserRouter>      
    </>
  );
}

export default App;
