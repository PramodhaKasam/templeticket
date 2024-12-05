import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Statecard from "./pages/Statecard";
import ViewState from "./pages/viewStates";
import TempleCard from "./pages/Templecard";

const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/viewStates" element={<ViewState />} />
          <Route path="/state/:stateName" element={<Statecard />} />
          <Route path='/temple/:templeName' element={<TempleCard/>}/>
        </Routes>
      </div>
    </Router>
  );
};

export default App;
