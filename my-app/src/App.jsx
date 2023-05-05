import { BrowserRouter, Routes, Route } from "react-router-dom";
import Maincontent from "./components/MainPage/MainPage";
import React from "react";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route element={<Maincontent />} path="/" />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
