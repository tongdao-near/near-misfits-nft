import React, { useContext, memo } from 'react';
import { ReactSVG } from 'react-svg';
import { appStore } from '../../state/app';
import Navigation from '../../components/Navigation';
import SocialLinks from '../../components/SocialLinks';
import logo from '../../assets/img/foot-logo.svg';
import img from '../../assets/img/foot-img.png';

const Footer = () => {
  const { state } = useContext(appStore);
  const { wallet } = state || {};

  return wallet ? (
    <footer className="footer">


      <div className="footer__container">
        <Navigation className="footer__navigation" signedIn={wallet.signedIn} />

        <img className="footer__logo" src={logo} />

        <SocialLinks className="footer__social" />


        <p className="footer__text">
          TD12 Zodiac Club NFTs are built on top of NEAR Protocol, where minting NFTs cost less than a cent per item.
        </p>
        <p className="footer__copyright ">
          © 2021 TenKBay DAO. All Rights Reserved.
        </p>
        <img className="footer__img hide-mobile" src={img}></img>

      </div>
    </footer>
  ) : (
    <></>
  );
};

export default memo(Footer);
