import React, { useContext } from 'react';
import CalendarBtn from './CalendarBtn';
import img1 from '../../assets/img/f1.png';
import headline from '../../assets/img/headline.png';
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
          <p className="hero__text">
            同道星座学院是一个基于NEAR区块链随机生成的 NFT头像收藏合集，包含 12,000 枚由算法生成的独特同道星座头象，以盲盒形式发售。
            
          </p>
          <p className="hero__text">欢迎加入同道星座学院 - 创造快乐，追逐梦想！</p>
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
