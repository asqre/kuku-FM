import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/HomePage";
import AudioBookPage from "./pages/AudioBookPage";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/audiobooks/:id" element={<AudioBookPage/>} />
    </Routes>
  );
};

export default App;
