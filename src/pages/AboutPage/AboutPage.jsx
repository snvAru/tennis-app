import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import Slider from '../../components/Slider/Slider';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';


import cort1 from "../../images/cort1.jpg"
import cort2 from "../../images/cort2.jpg"
import AboutBackground from "../../images/AboutBackground.jpg"


import s from "./AboutPage.module.scss"

const endpoint = "http://localhost:3001"


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



function AboutPage() {

  const [courts, setCourts] = useState([]);

  useEffect(()=> {
    const getData = async () => {
      const response = await fetch(`${endpoint}/courts`);
      const data = await response.json();
      setCourts(data);
    };
    getData();
  }, []);


  return (
    <div>
        <Header />
        <div className={s.header} style={{backgroundImage: `url(${AboutBackground})`}}></div>
        <br/><br/>
        <div className={s.main}>
            <div className={s.container}>
                {/* <Slider slides={slides}/> */}

                <Slider slides={courts}/>


                <br/><br/>
                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna</p>
                <br/><br/>
            </div>
        </div>
      <Footer className={s.footer} />
    </div>
  )
}

export default AboutPage