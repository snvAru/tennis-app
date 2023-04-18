import React from "react";

import { Link } from 'react-router-dom';

import s from "./Footer.module.scss"


function Footer () {
    return(
        <div className={s.navigation}>
            <h2 className={s.header}>2022 © Все права защищены.</h2>
            <Link to="/" className={s.link}>Home</Link>
            <Link to="/about" className={s.link}>About</Link>
            <Link to="/news" className={s.link}>News</Link>
        </div>
    )
}
export default Footer