import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Myarticle from "../src/pages/Myarticle";
import Login from "./pages/Login";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
