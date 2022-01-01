import React, { useContext } from 'react';
import CalendarBtn from './CalendarBtn';
import img1 from '../../assets/img/hero.png';
import headline from '../../assets/img/headline.svg';
import ConnectWalletBtn from '../ConnectWalletBtn';
import { appStore } from '../../state/app';

const Hero = () => {
  const { state } = useContext(appStore);
  const { wallet } = state;

  return (
    <div className="hero">
      <div className="hero__container">
        <div className="hero__information">
          <img
            className="hero__headline__image"
            src={headline}
          />
          <p className="hero__text">欢迎加入同道星座学院 - 创造快乐，追逐梦想！</p>
          <br/>
          <p className="hero__text">招生人数：12,000</p>
          <p className="hero__text">开学时间：2022.01.01</p>
          <p className="hero__text">入学学费：2 NEAR</p>
          { wallet?.signedIn ?
              (<CalendarBtn className="hero__calendar-btn" />) :
              (<ConnectWalletBtn claz="hero__calendar-btn" handleClick={() => wallet.signIn()} />)
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
