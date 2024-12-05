import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Statecard from "./pages/Statecard";
import ViewState from "./pages/viewStates";
import TempleCard from "./pages/Templecard";
import Templedarshan from "./pages/Templedarshan";
import Templeaccomodation from "./pages/Templeaccomodation";
import Templenearby from "./pages/Templenearby";
import Templetravel from "./pages/Templetravel";

const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/viewStates" element={<ViewState />} />
          <Route path="/state/:stateName" element={<Statecard />} />
          <Route path='/temple/:templeName' element={<TempleCard/>}/>
          <Route path='/temple/:templeName/darshan' element={<Templedarshan/>}/>
          <Route path='/temple/:templeName/accomodation' element={<Templeaccomodation/>}/>
          <Route path='/temple/:templeName/nearby' element={<Templenearby/>}/>
          <Route path='/temple/:templeName/travel' element={<Templetravel/>}/>
        </Routes>
      </div>
    </Router>
  );
};

export default App;
