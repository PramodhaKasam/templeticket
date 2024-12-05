import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import "../styles/Statecard.css";
import temples from "../data/temples";
import Navbar from '../components/navbar';
import Footer from '../components/Footer'

function Statecard() {
    const { stateName } = useParams();
    const navigate = useNavigate();

    const filteredTemples = temples.filter((temple) => temple.State === stateName);

    return (
        <>
            <Navbar />
            <div className="state-page">
                <h1 className="state-title">Temples in {stateName}</h1>
                <div className="temple-list">
                    {filteredTemples.map((temple) => (
                        <div className="temple-cards" key={temple.id}>
                            <div className="temple-infos">
                                <h2>{temple.name}</h2>
                                <p>{temple.State}</p>
                            </div>
                            <div className="temple-image">
                                <img src={temple.image} alt={temple.name} />
                            </div>
                            <div className="know-more">
                                <button onClick={() => navigate(`/temple/${temple.name}`)}>
                                    Know More
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Statecard;
