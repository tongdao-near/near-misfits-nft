import React from 'react';
import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import Buy from '../Buy/Buy';
import GenerateSoldOut from '../Generate/GenerateSoldOut';
import ShareSocialLinks from '../ShareSocialLinks';

const NoNfts = ({ soldOut }) => {
  const { pathname } = useLocation();

  return (
    <div className="no-nfts">
      <div className="no-nfts__data">
        <div className="no-nfts__data-top">
          <div className="no-nfts__information">
            <p className="no-nfts__title">
              你还没有任何
              <span className="no-nfts__text-purpure">
                {pathname === '/link-drop' ? 'LinkDrop' : 'NFT'}
              </span>{' '}
            </p>
            <p className="no-nfts__text">
              点击下方，立即购买<span className="no-nfts__text-purpure">专属NFT</span>
            </p>
            <ShareSocialLinks className="no-nfts__links" color="purpure" />
          </div>
        </div>
        {soldOut ? <GenerateSoldOut className="no-nfts__sold-out" /> : <Buy />}
      </div>
    </div>
  );
};

NoNfts.propTypes = {
  soldOut: PropTypes.bool,
};

NoNfts.defaultProps = {
  soldOut: false,
};

export default NoNfts;
