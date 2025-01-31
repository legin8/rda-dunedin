import "./dnzrd-header.css";
import nzrdIcon from "../assets/nzrda_icon.png";

export const DNZRDheader = () => {
    return (
        <div className="dnzrd-header">
            <img src={nzrdIcon} className="icon1" />
            <div>
                <p className="title1">Dunedin, New Zealand</p>
                <p className="title2">Riding for the disabled</p>
            </div>
        </div>
    )
}