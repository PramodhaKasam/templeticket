import React from "react";
import Navbar from "../components/navbar";
import '../styles/Templecard.css'
import { useParams, Link } from "react-router-dom";
import temples from "../data/temples";
import Footer from "../components/Footer";

function TempleCard()
{const { templeName } = useParams();

const temple = temples.find((temple) => temple.name === templeName);

if (!temple) {
    return <div>Temple not found</div>;
}

return (
    <>
        <Navbar />
        <div className="temple-page">
            <div className="temple-info">
                <h1>{temple.name}</h1>
                <h3>A Convergence of Shiva and Shakti in Deoghar</h3>
                <p >
                    The Baba Baidyanath Temple, located in Deoghar, Jharkhand, is a renowned spiritual landmark and one of the twelve
                     Jyotirlingas, the holiest shrines dedicated to Lord Shiva in Hinduism. The temple is deeply rooted in mythology 
                     and history, making it a vital center for devotees and spiritual seekers. Here are some key highlights:

                    <strong style={{display : "block"}}>Architectural Significance:</strong>
                    The temple's design reflects traditional Indian architectural styles, with intricate carvings
                     and a pyramid-shaped tower (Shikhara) over the sanctum sanctorum. The main shrine is surrounded
                      by 21 other temples, forming an expansive and sacred complex.

                    <strong style={{display : "block"}}>Historical and Mythological Importance:</strong>
                    The temple is believed to be linked to the story of Ravana, who worshipped Lord Shiva
                     here to seek invincibility. According to legend, Ravana offered his ten heads as a sacrifice,
                      and Shiva, moved by his devotion, manifested as a Jyotirlinga at this site.

                    <strong style={{display : "block"}}>Shravan Mela:</strong>
                    The temple sees its peak during the Shravan month (July-August), when millions of Kanwariyas
                     (devotees) travel barefoot to offer holy water from the Ganges at Sultanganj to the deity in
                      Deoghar. This event is one of the largest religious gatherings in India.

                    <strong style={{display : "block"}}>Cultural Relevance:</strong>
                    Beyond its religious significance, the temple is a center for traditional rituals, festivals, and practices,
                     serving as a hub of cultural and spiritual activities in the region.

                    <strong style={{display : "block"}}>Ritual Practices:</strong>
                    Pilgrims engage in a series of rituals, including offering water and Bilva leaves to the Jyotirlinga. The temple
                    also conducts special pujas for devotees seeking blessings for health, wealth, and prosperity.
                    <h2>
                        A visit to Baba Baidyanath Dham is not just a pilgrimage; it is a journey of self-discovery
                        and spiritual awakening.
                    </h2>
                </p>
            </div>

            <div className="sections">
                <section className="section">
                    <Link to={`/temple/${temple.name}/darshan`}>
                    <span>Darshan</span>
                    </Link>
                </section>

                <section className="section">
                    <Link to={`/temple/${temple.name}/nearby`}>
                    <span>Nearby Locations</span>
                    </Link>
                </section>

                <section className="section">
                    <Link to={`/temple/${temple.name}/travel`}>
                    <span>Travel</span>
                    </Link>
                </section>

                <section className="section">
                    <Link to={`/temple/${temple.name}/accommodation`}>
                    <span>Accommodation</span>
                    </Link>
                </section>
                </div>
        </div>
        <Footer />
    </>
);
}

export default TempleCard