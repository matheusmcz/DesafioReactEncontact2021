import React from "react";
import { BrowserRouter } from "react-router-dom";
import Home from "./pages/Home/Home";
import { GlobalStyles } from "./styles/glogal";

export default function App() {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <Home />
    </BrowserRouter>
  );
}
