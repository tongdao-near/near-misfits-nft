import React from 'react';
import CalendarBtn from './CalendarBtn';
import HeroBackground from './HeroBackground';
import img1 from '../../assets/img/f1.png'   //引入
const Hero = () => (
  <div className="hero">
    <div className="hero__container">
      {//<HeroBackground className="hero__background" />
      }
      <div className="hero__information">
        <h1 className="hero__title">
          Cute is the new ‘cool’ <br />

          {//<span className="hero__title_purpure">Metaverse</span>
          }
        </h1>
        <p className="hero__text">
          Now you can own some of the cutest critters in the Metaverse.

        </p>
        <p className="hero__text">Sale Launches August 16th</p>
        <CalendarBtn className="hero__calendar-btn" />

        <picture>
          <img
            className="hero__image"
            src={img1}
            alt="hello super"
          />
        </picture>
      </div>
    </div>
  </div>
);

export default Hero;
