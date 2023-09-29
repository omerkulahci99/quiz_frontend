import React from "react";
import Home from "./pages/home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Quiz from "./pages/quiz";

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="/quiz/:quizId" element={<Quiz />} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
