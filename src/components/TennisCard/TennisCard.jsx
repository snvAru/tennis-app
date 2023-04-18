import React from 'react';
import { Link } from 'react-router-dom';

import s from "./TennisCard.module.scss"

// import tennis1 from "../../images/tennis1.jpg";
// import tennis2 from "../../images/tennis2.jpg";


function TennisCard ({id,image,date,text, buttonText="More"}) {

      
    return(
      <div className={s.TennisCard}>
            <img src={image} alt="" className={s.image} />
            <h2 className={s.date}>{date}</h2>
            <span className={s.text}>{text}</span>
            <div>
              <Link to={`/news/${id}`} className={s.btn}>{buttonText}</Link>
            </div>
        </div>


      //   <div className={s.grid}>
      //       <div className={s.TennisCard}>
      //           <img src={tennis1} alt="" />
      //           <h2 className={s.date}>22 july 2022</h2>
      //           <span>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</span>
      //           <button className={s.btn}>More</button>
      //     </div>
      //     <div className={s.TennisCard}>
      //           <img src={tennis2} alt="" />
      //           <h2 className={s.date}>22 july 2022</h2>
      //           <span>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</span>
      //           <button className={s.btn}>More</button>
      //     </div>
      //     <div className={s.TennisCard}>
      //           <img src={tennis1} alt="" />
      //           <h2 className={s.date}>22 july 2022</h2>
      //           <span>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</span>
      //           <button className={s.btn}>More</button>
      //     </div>
      //     <div className={s.TennisCard}>
      //           <img src={tennis2} alt="" />
      //           <h2 className={s.date}>22 july 2022</h2>
      //           <span>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</span>
      //           <button className={s.btn}>More</button>
      //     </div>
      //     <div className={s.TennisCard}>
      //           <img src={tennis1} alt="" />
      //           <h2 className={s.date}>22 july 2022</h2>
      //           <span>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</span>
      //           <button className={s.btn}>More</button>
      //     </div>
      //     <div className={s.TennisCard}>
      //           <img src={tennis2} alt="" />
      //           <h2 className={s.date}>22 july 2022</h2>
      //           <span>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</span>
      //           <button className={s.btn}>More</button>
      //     </div>
      //   </div>
    )
}
export default TennisCard