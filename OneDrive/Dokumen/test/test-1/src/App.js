import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Myarticle from "../src/pages/Myarticle";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Myarticle />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
