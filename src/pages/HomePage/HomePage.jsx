import React, { useEffect, useState } from 'react';
import s from "./HomePage.module.scss"


import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

import HomeBackground from "../../images/HomeBackground.jpg"



function HomePage() {


  return (
    <div className={s.homePage}>
        <Header />
        <div className={s.header} style={{backgroundImage: `url(${HomeBackground})`}}>
            <h1 className={s.name}>Петербургский <br/>теннисный клуб <br/>имени М.А. Пасечникова</h1>

            <div className={s.cards}>
                <div className={s.card}>
                    <h5 className={s.service}>Service</h5>
                    <p className={s.serviceName}>Court rental</p>
                </div>
                <div className={s.card}>
                    <h5 className={s.service}>Service</h5>
                    <p className={s.serviceName}>Children tennis</p>
                </div>
                <div className={s.card}>
                    <h5 className={s.service}>Service</h5>
                    <p className={s.serviceName}>Team gatherings</p>
                </div>
                <div className={s.card}>
                    <h5 className={s.service}>Service</h5>
                    <p className={s.serviceName}>Timetable</p>
                </div>
            </div>
            
        </div><br/><br/>
        <div className={s.main}>
        {/* <div className={s.container}> */}
            
        {/* </div> */}
        </div>
      <Footer className={s.footer} />
    </div>
  )
}

export default HomePage