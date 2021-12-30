import React, { useContext } from 'react';
import CalendarBtn from './CalendarBtn';
import HeroBackground from './HeroBackground';
import img1 from '../../assets/img/f1.png'   //引入
import ConnectWalletBtn from '../ConnectWalletBtn';
import { appStore } from '../../state/app';

const Hero = () => {
  const { state } = useContext(appStore);
  const { wallet } = state;

  return (
    <div className="hero">
      <div className="hero__container">
        <div className="hero__information">
          <h1 className="hero__title">
            Cute is the new ‘cool’ <br />
          </h1>
          <p className="hero__text">
            Now you can own some of the cutest critters in the Metaverse.

          </p>
          <p className="hero__text">Sale Launches August 16th</p>
          { wallet?.signedIn ?
              (<CalendarBtn className="hero__calendar-btn" />) :
              (<ConnectWalletBtn claz="" handleClick={() => wallet.signIn()} />)
          }

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
}

export default Hero;
