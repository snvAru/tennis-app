import React, { useEffect, useState } from 'react';
import s from "./NewsPage.module.scss"


import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import TennisCard from '../../components/TennisCard/TennisCard';

import NewsBackground from "../../images/NewsBackground.jpg"


const endpoint = process.env.REACT_APP_ENDPOINT || "";


function NewsPage() {
  const [cards, setCards] = useState([]);

  useEffect(()=> {
    const getData = async () => {
      const response = await fetch(`${endpoint}/cards`);
      const data = await response.json();
      setCards(data);
    };
    getData();
  }, []);

  return (
    <div className={s.newsPage}>
        <Header />
        <div className={s.header} style={{backgroundImage: `url(${NewsBackground})`}}></div><br/><br/>
        <div className={s.main}>
            <div className={s.grid}>
                {/* <TennisCard className={s.cards}  /> */}

                {cards?.length > 0 && cards.map( (elem) => (
                <TennisCard
                    key={elem.id}
                    id={elem.id}
                    image={elem.image} 
                    date={elem.date}
                    text={elem.text}
                    buttonText={elem.buttonText}
                />
            ))}
            </div>
        </div>
      <Footer className={s.footer} />
    </div>
  )
}

export default NewsPage