import { Link } from "react-router-dom";
import React from 'react'

function Main() {
    return (
        <div className="row justify-between">
            <div className="col1" />
            <div className='justify-between col1 align-center nav-link-div'>
                <h1>Главная:</h1>
                <ul>
                    <li><Link to="/chart">Графики</Link></li>
                    <li><Link to="/map">Карта</Link></li>
                </ul>
            </div>
            <div className="col1" />
        </div>
    )
}

export default Main
