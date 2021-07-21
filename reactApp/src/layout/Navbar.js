import { Link } from "react-router-dom";
import React from 'react'

function Navbar() {
    return (
        <nav className='navbar'>
            <div className="row justify-between">
                <div className="col1" />
                <div className='row justify-between col1 align-center nav-link-div'>
                    <Link className="nav-link" to="/">Главная</Link>
                    <Link className="nav-link" to="/chart">Графики</Link>
                    <Link className="nav-link" to="/map">Карта</Link>
                </div>
                <div className="col1" />
            </div>
        </nav>
    )
}

export default Navbar
