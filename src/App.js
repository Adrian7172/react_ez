import React from "react";
import Chart from "./components/chart/Chart";
import LogIn from "./components/login/LogIn";
import { Routes, Route } from "react-router-dom";


const App = () => {
  return(
  <Routes>
    <Route path = "/" element={<LogIn />} />
    <Route path = "/chart" element={<Chart />} />
  </Routes>
  );
};

export default App;

