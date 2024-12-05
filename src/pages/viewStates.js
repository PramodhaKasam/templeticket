import React, { useState } from "react";
import states from "../data/states";
import Navbar from "../components/navbar";
import StateCard from "../components/State";
import Footer from "../components/Footer";
import SearchBar from "../components/SearchBar";
import '../styles/viewStates.css'
import { useNavigate } from "react-router-dom";

function ViewStates() {
  const [filteredStates, setFilteredStates] = useState(states);

  const handleSearch = (searchTerm) => {
    if (searchTerm === "") {
      setFilteredStates(states);
    } else {
      setFilteredStates(
        states.filter((state) =>
          state.name.toLowerCase().includes(searchTerm.toLowerCase())
        )
      );
    }
  };
  const nav = useNavigate();
  return (
    <>
      <Navbar />
      <SearchBar onSearch={handleSearch} />
      <div className="exploresection">
        <div className="templegrid">
          {filteredStates.map((state) => (
            <StateCard key={state.id} temple={state} onClick={() => nav(`/state/${state.name}`)}/>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default ViewStates;
