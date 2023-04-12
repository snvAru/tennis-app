import React, {useState} from 'react';

import {Swiper, SwiperSlide} from "swiper/react";

import "swiper/css"
import s from "./Slider.module.scss"

function Slider({ slides=[] }) {
  const [swiper, setSwiper] = useState(null)

  const onPrev = () => {
    swiper.slidePrev()
  }
  const onNext = ()=> {
    swiper.slideNext()
  }

  return (
    <div className={s.slider}>
      <div className={s.topPart}>
        <div className={s.title}>Photos</div>
        <div className={s.buttons}>
          <div className={s.button} onClick={onPrev} >prev</div>
          <div className={s.button} onClick={onNext} >next</div>
        </div>
      </div>
      <div className={s.swiperWrapper}>
        <Swiper className={s.swiper} onSwiper={(swiper) => {setSwiper(swiper)}}>
            {slides.map((elem)=> {
              return(
                <SwiperSlide className={s.slide} key={elem.id}>
                {elem.image && (<img className={s.image} src={elem.image} alt=''/>)}
                {elem.description && (<div className={s.subTitle}>{elem.description}</div>)}
              </SwiperSlide>
              )
            })}
        </Swiper>
      </div>
    </div>
  )
}

export default Slider