import React from "react"
import "./navbar.css";
const Navbar =() => {
    return(
        <nav className="main-nav">
            <div className="logo">
                <h2>
                    <span>B</span>lood
                    <span>D</span>onate
                </h2>
            </div>
            <div className="menu">
                <ul>
                    <li>
                        <a href="#">Home</a>
                    </li>
                    <li>
                        <a href="#">about</a>
                    </li>
                    <li>
                        <a href="#">donate</a>
                    </li>
                    <li>
                        <a href="#">status</a>
                    </li>
                </ul>

            </div>

        </nav>
    )
}
export default Navbar