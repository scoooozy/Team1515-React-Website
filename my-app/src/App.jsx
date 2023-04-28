import { Routes, Route } from "react-router-dom";
import MainPage from "./components/MainPage/MainPage"
import React from "react";

const App = () => {
  return (
    <div>
      <Routes>
        <Route element={<MainPage />} path="/" />
      </Routes>
    </div>
  );
};

export default App;
