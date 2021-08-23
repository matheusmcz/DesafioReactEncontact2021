import React from "react";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Home from "./pages/Home/Home";
import { GlobalStyles } from "./styles/glogal";

export default function App() {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <Home />
      <ToastContainer />
    </BrowserRouter>
  );
}
