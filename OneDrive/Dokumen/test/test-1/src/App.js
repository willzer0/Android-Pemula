import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Myarticle from "../src/pages/Myarticle";
import Login from "./pages/Login";
import Edit from "./pages/EditComments";
import EditComments from "./pages/EditComments";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<EditComments />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
