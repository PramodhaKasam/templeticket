import React from "react";
import Navbar from "../components/navbar";
import '../styles/Templenearby.css'
import Footer from '../components/Footer'
import { useParams } from "react-router-dom";

function Templenearby()
{
    const {templeName} = useParams();
    return (
        <>
           <Navbar />
           <h1 style={{marginLeft: "2%"}}>Tourist spots nearby {templeName}</h1>
            <div className="temple-nearby-page">
                {/* Naulakha temple block */}
                <div className="temple-block">
                <strong className="temple-name">Naulakha Temple</strong>
                <p>
                    The beautiful Naulakha temple is dedicated to Goddess Radha and Lord Krishna. The shrine has beautiful idols of the deities that are about 146 ft high. Legend has it that after the sudden demise of her husband, the queen left her home. Depressed and lonely, she met the saint who asked her to build the temple.
                </p>
                <strong>Distance from Baba Mandir:</strong>
                <p className="distance">4 Kms</p>
                <strong>Way to reach:</strong>
                <p className="way-to-reach">Taxis and Auto Rickshaws are available.</p>
                </div>

                {/* Rikhiapeeth temple block */}
                <div className="temple-block">
                <strong className="temple-name">Rikhiapeeth</strong>
                <p>
                    Located 12 km from Baba Baidyanath Dham, Rikhiapeeth is one of India's oldest yoga ashrams, established by Swami Satyananda Saraswati. Known as tapobhumi, it served as the site of Swami Satyananda's intense spiritual practices. The ashram blends ancient Vedic teachings from the Vedas, Upanishads, and Puranas with modern skills, promoting universal knowledge and inclusivity beyond caste, creed, nationality, or gender.
                </p>
                <strong>Distance from Baba Mandir:</strong>
                <p className="distance">12 Kms</p>
                <strong>Way to reach:</strong>
                <p className="way-to-reach">Taxis and Auto Rickshaws are available.</p>
                </div>

                {/* Tapovan Hills temple block */}
                <div className="temple-block">
                <strong className="temple-name">Tapovan Hills</strong>
                <p>
                    The Tapovan hills are located 10 km from Deoghar and boast Tapo Nath Mahadev, a temple of Lord Shiva. The word ‘Tapovan’ means forest of meditation and in the past, it was a meditation spot (Tapobhumi) for the Nagas (sadhus). Thus, it has been named Tapovan.
                </p>
                <strong>Distance from Baba Mandir:</strong>
                <p className="distance">12 Kms</p>
                <strong>Way to reach:</strong>
                <p className="way-to-reach">Intercity Buses, Taxis and Auto Rickshaws are available.</p>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Templenearby