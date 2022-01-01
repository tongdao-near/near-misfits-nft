import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { appStore } from '../../state/app';
import BuyMoreBtn from '../BuyMoreBtn';

const GenerateSoldOut = ({ className }) => {
  const { state, update } = useContext(appStore);
  const { account, app } = state;

  const haveNft = app.misfitsArray.length;
  const showSendNft = Boolean(account && haveNft);

  const modalOpen = () => update('app.modalOpen', true);

  return (
    <div className={`generate-sold-out ${className || ''}`}>
      <p className="generate-sold-out__text">已售罄</p>
      <a
        className="generate-sold-out__link"
        href="https://paras.id/collection/tongdao-xmas-drop-by-tongdaodashunear"
        target="_blank"
        rel="noopener noreferrer"
      >
        <p>从Paras购买</p>
        <picture>
          <source srcSet="./images/generate-paras-2x.webp 2x, ./images/generate-paras.webp 1x" />
          <img
            src="./images/generate-paras.png"
            alt="paras marketplace icon"
            className="generate-sold-out__img"
          ></img>
        </picture>
      </a>
      {false && (
        <BuyMoreBtn
          text="发送NFT"
          className="buy__nft"
          onClick={modalOpen}
        />
      )}
    </div>
  );
};
GenerateSoldOut.propTypes = {
  className: PropTypes.string,
};

GenerateSoldOut.defaultProps = {
  className: '',
};

export default GenerateSoldOut;
