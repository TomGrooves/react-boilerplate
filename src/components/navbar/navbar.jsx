import React from 'react'
import {Link} from "react-router-dom";
import Style from './navbar.module.scss'
function Navbar(){

    return (
        <nav className={Style.navbar}>
            <ul>
            <Link className={Style.link} to="/">Forside</Link>
            <Link className={Style.link} to="/hoteller">Hoteller</Link>
            </ul>
        </nav>
    )
}

export default Navbar