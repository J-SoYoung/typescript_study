import React from "react";
import { Route, Routes } from "react-router-dom";
import "./styles/App.css";
import { Homepage, DetailPage } from "./pages/index";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/detail" element={<DetailPage />} />
      </Routes>
    </div>
  );
}

export default App;
