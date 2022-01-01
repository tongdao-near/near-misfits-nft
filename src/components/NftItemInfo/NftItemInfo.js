import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { ReactSVG } from 'react-svg';
import rarity from '../../assets/images/rarity-common.svg';

import Aquarius from '../../assets/img/icons/Aquarius.svg';
import Pisces from '../../assets/img/icons/Pisces.svg';
import Aries from '../../assets/img/icons/Aries.svg';
import Taurus from '../../assets/img/icons/Taurus.svg';
import Gemini from '../../assets/img/icons/Gemini.svg';
import Cancer from '../../assets/img/icons/Cancer.svg';
import Leo from '../../assets/img/icons/Leo.svg';
import Virgo from '../../assets/img/icons/Virgo.svg';
import Libra from '../../assets/img/icons/Libra.svg';
import Scorpio from '../../assets/img/icons/Scorpio.svg';
import Sagittarius from '../../assets/img/icons/Sagittarius.svg';
import Capricorn from '../../assets/img/icons/Capricorn.svg';

const Sign = {
  Aquarius,
  Pisces,
  Aries,
  Taurus,
  Gemini,
  Cancer,
  Leo,
  Virgo,
  Libra,
  Scorpio,
  Sagittarius,
  Capricorn
};

function getSign(info) {
  if (!info?.attributes) {
    return;
  }

  for (const pair of info.attributes) {
    if (pair.trait_type === 'Sign') {
      return pair.value;
    }
  }
}

const NftItemInfo = ({ className, item, urlIpfs, info }) => {
  const nftInfo = useRef();

  useEffect(() => {
    const { right } = nftInfo?.current?.getBoundingClientRect();

    if (right > window.innerWidth) {
      const width = window.innerWidth;
      nftInfo.current.style.transform = `translateX(-${right - width + 50}px)`;
    }
  });

  return (
    <div ref={nftInfo} className={`nft-item-info  ${className || ''}`}>
      <div className="nft-item-info__icon-wrapper">
        <div className="nft-item-info__image-wrapper">
          <img
            className="nft-item-info__image"
            src={`${urlIpfs}/${item.media}`}
            alt="nft"
          />
        </div>
        <p className="nft-item-info__number">
          # {item?.title?.padStart(5, '0')}
        </p>
        {getSign(info) &&
          <img
            className="nft-item-info__rarity"
            src={Sign[getSign(info)]}
          />
        }
      </div>
      <div className="nft-item-info__stats">
        {info?.attributes && 
          info.attributes.map(pair => {
            return (
              <p key={pair.trait_type}>{pair.trait_type} : {pair.value}</p>
            )
          })
        }
      </div>
    </div>
  );
};

NftItemInfo.propTypes = {
  className: PropTypes.string,
  item: PropTypes.object,
  urlIpfs: PropTypes.string,
  info: PropTypes.object,
};
export default NftItemInfo;
