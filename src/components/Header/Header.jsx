import React from "react";

import { Link } from 'react-router-dom';

import s from "./Header.module.scss"


function Header () {
    return(
        <div className={s.nav}>
            <h2 className={s.header}>Tennis</h2>
                <Link to="/" className={s.link}>Home</Link>
                <Link to="/about" className={s.link}>About</Link>
                <Link to="/news" className={s.link}>News</Link>
        </div>
    )
}
export default Header