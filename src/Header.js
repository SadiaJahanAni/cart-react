import React from "react";
import './Header.css';

function Header() {

    return (
        <div className="header">
            <div>
                <ul className="ul-list">
                    <h3 className="crazy">Crazy Coder</h3>
                    <li className="list">Home</li>
                    <li className="list">Features</li>
                    <li className="list">pricing</li>
                </ul>
            </div>

            <div className="search">
                <input className="search" type="text" placeholder="Search"></input>
                <button className="search" type="button"> Search</button>
            </div>
        </div>
    )
}

export default Header;