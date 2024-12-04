import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import TempleDetails from "./pages/TempleDetails";
import ViewState from "./pages/viewStates";

const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/viewStates" element={<ViewState />} />
          <Route path="/temple/:id" element={<TempleDetails />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
