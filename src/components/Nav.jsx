import { Link } from "react-router"

export const Nav = () => {
    return (
        <div>
            <Link to={"/"}>Home</Link>
            <Link to={"/disProgram"}>Disability Program</Link>
        </div>
    )
}