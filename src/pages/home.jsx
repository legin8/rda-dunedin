import "./home.css";
import { DNZRDheader } from "../components/dnzrd-header.jsx";

export const Home = () => {
    return (
        <>
            <DNZRDheader />
            <h1>Dunedin Riding for the Disabled</h1>
            <div>
                <p>At Dunedin RDA we provide therapeutic sessions with horses to improve health and wellbeing outcomes.
                     for people experiencing disability, or who have specific challenges or needs.</p>
                <p>We aim to enable and support disabled people to achieve good lives including meaningful participation in, and contribution to, important life activities and roles in their community. We are one of over 40 voluntary (not-for-profit) Riding for Disabled groups around New Zealand, and we are affiliated with the New Zealand Riding for Disabled Association. The Dunedin Group RDA (DRDA) was established in 1973. The location of Dunedin RDA has changed over the years, we now have our own land in Fairfield, Dunedin. Dunedin RDA does not receive government funding and relies on grants, corporate sponsorship and generous donations from the community to keep the the program operating. To find out more about what we offer, check out the pages above. If you have any questions while reading through, email us at office@rdadunedin.org</p>
            </div>
        </>
    )
}