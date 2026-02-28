// main.jsx

import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import CVTemplatesPage from "./pages/CVTemplatesPage"
import App from "./App";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/create" element={<CVTemplatesPage />} />
    </Routes>
  </BrowserRouter>
);