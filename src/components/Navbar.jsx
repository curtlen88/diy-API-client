import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <nav>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/newblog">Create a New Blog</Link>
                </li>
            </ul>
        </nav>
    );
}