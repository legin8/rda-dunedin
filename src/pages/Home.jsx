import "./home.css";
import { DNZRDheader } from "../components/DNZRD-header.jsx";

export const Home = () => {
    return (
        <>
            <DNZRDheader />
            <h1>Dunedin Riding for the Disabled</h1>
            <div>
                <div className="home-text-blocks">
                    <p>At Dunedin RDA, we provide therapeutic sessions with horses to help improve health and wellbeing for people with a disability, or who have specific challenges or needs.</p>
                    <p>We aim to enable and support those experiencing a disability meaningful social, horse and community activities.</p>
                </div>
                <div className="home-text-blocks">
                    <p>We are one of over 40 voluntary (not-for-profit) Riding for Disabled groups around New Zealand.</p>
                    <p>We are affiliated with the New Zealand Riding for Disabled Association.</p>
                </div>
                <div className="home-text-blocks">
                    <p>The Dunedin RDA was established in 1973.</p>
                    <p>While the location of Dunedin RDA has changed over the years, we now have our own land in Fairfield, Dunedin.</p>
                    <p>Dunedin RDA does not receive government funding and relies on grants, corporate sponsorship and generous donations from the community to keep the the program operating.</p>
                </div>
            </div>
        </>
    )
}