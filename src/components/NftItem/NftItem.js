/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React, { useState, useEffect } from 'react';
import { ReactSVG } from 'react-svg';
import PropTypes from 'prop-types';
import NftItemInfo from '../NftItemInfo';
import Spinner from '../../assets/img/spinner.gif';
import Reveal from '../../pages/MyNFTS/Reveal';

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
    return 'Taurus';
  }

  for (const pair of info.attributes) {
    if (pair.trait_type === 'Sign') {
      return pair.value;
    }
  }
}

const NftItem = ({ item, onClick, isReveal, urlIpfs }) => {
  const [reveal, setReveal] = useState(isReveal);
  const [info, setInfo] = useState({});
  const [loaded, setLoaded] = useState(false);

  useEffect(async () => {
    try {
      const response = await fetch(`${urlIpfs}/${item.reference}`);
      const data = await response.json();

      setInfo(data);
    } catch (e) {
      // eslint-disable-next-line
      console.log(e);
    }
  }, []);

  const handleClick = () => {
    setReveal(true);
    onClick({ [item.title]: true });
  };

  const src = new URL(item.media, urlIpfs).href;

  return (
    <div className="nft-item">
      {reveal ? (
        <div>
          <img
            style={loaded ? {} : { display: 'none' }}
            className="nft-item__img"
            src={src}
            alt="nft"
            onLoad={() => setLoaded(true)}
          />
          <img
            style={loaded ? { display: 'none' } : {}}
            className="nft-item__img"
            src={Spinner}
            alt="nft"
          />

          <div className="nft-item__footer">
            <p className="nft-item__hash"># {item?.title?.padStart(5, '0')}</p>
            <img className="nft-item__sign" src={Sign[getSign(info)]} />
          </div>

          <NftItemInfo
            className="nft-item__info"
            item={item}
            urlIpfs={urlIpfs}
            info={info}
          />
        </div>
      ) : (
        <Reveal title={item?.title} handleClick={handleClick} />
      )}
    </div>
  );
};

NftItem.propTypes = {
  item: PropTypes.object,
  onClick: PropTypes.func,
  isReveal: PropTypes.bool,
  urlIpfs: PropTypes.string,
};

NftItem.defaultProps = {
  item: {},
  onClick: () => {},
};

export default NftItem;
