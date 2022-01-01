import React from 'react';
import { ReactSVG } from 'react-svg';
import PropTypes from 'prop-types';
import socialParas from '../../assets/images/social-paras.png';
import socialFace from '../../assets/images/social-discord.png';
import socialTwitter from '../../assets/images/social-twitter.png';

const SocialLinks = ({ className }) => (
  <div className={`social-links ${className || ''}`}>
    <a
      href="https://paras.id/collection/tongdao-xmas-drop-by-tongdaodashunear"
      rel="noopener noreferrer"
      target="_blank"
    >
      <picture>
        <img
          className="social-links__item"
          src={socialParas}
          alt="paras"
        />
      </picture>
    </a>
    <a
      href="https://t.me/TD12_Zodiac_Club"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img className="social-links__item" src={socialFace} alt="discord" />
    </a>
    <a
      href="https://twitter.com/tongdao_nft"
      rel="noopener noreferrer"
      target="_blank"
    >
      <img className="social-links__item" src={socialTwitter} alt="twitter" />
    </a>
  </div>
);

SocialLinks.propTypes = {
  className: PropTypes.string,
};

SocialLinks.defaultProps = {
  className: '',
};

export default SocialLinks;
