import React from "react";
import Home from "./pages/Home";
import "./index.css";
import ExerciseDetails from "./pages/ExerciseDetails";
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="/:categoryName" element={<ExerciseDetails />} />
    </Routes>
  );
};

export default App;
