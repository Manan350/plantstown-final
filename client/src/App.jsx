import React from 'react'
import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";
import ProductList from "./pages/ProductList";
import Cart from "./pages/Cart";
import Product from "./pages/Product";

import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom'
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
// } from "react-router-dom";
const App = () => {
  const user= false;
  return (
    <Router>
        <Routes>
          <Route exact path="/" element={<Home/>}/>
        </Routes>
        <Routes>
          <Route exact path="/products" element={<ProductList/>}/>
        </Routes>
        <Routes>
          <Route exact path="/products/:category" element={<ProductList/>}/>
        </Routes>
        <Routes>
          <Route path="/product/:id" element={<Product />}/>
        </Routes>
        <Routes>
          <Route exact path="/cart" element={<Cart/>}/>
        </Routes>
        <Routes>
          <Route exact path="/login" element={user ? <Navigate to = "/"/> :<Login/>}/>
        </Routes>
        <Routes>
        <Route exact path="/register" element={user ? <Navigate to = "/"/> :<Register/>}/>
        </Routes>
    </Router>
  );
  // return (
  //   <Router>
  //     <Switch>
  //       <Route exact path="/">
  //         <Home />
  //       </Route>
  //     </Switch>
  //   </Router>
  // );
};

export default App;