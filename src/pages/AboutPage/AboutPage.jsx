import React from 'react';
import { Link } from 'react-router-dom';

import Slider from '../../components/Slider/Slider';

import cort1 from "../../images/cort1.jpg"
import cort2 from "../../images/cort2.jpg"


import s from "./AboutPage.module.scss"

function AboutPage() {

  const slides = [
    {
      id:0,
      image: cort1,
      description:"Cort1"
    },
    {
      id:0,
      image: cort2,
      description:"Cort2"
    },
  ]

  return (
    <div>
        <div className={s.header}>Header</div>
        <div className={s.main}>
            <div className={s.container}>
                <Slider slides={slides}/>
            </div>
        </div>
     <div className={s.footer}>Footer</div>

        <Link to="/news">to news</Link>
        <Link to="/about">to about</Link>
    </div>
  )
}

export default AboutPage