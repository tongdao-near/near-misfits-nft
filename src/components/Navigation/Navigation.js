import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import getConfig from '../../config';

const Navigation = ({ className, signedIn }) => (
  <nav className={`navigation ${className || ''}`}>

    <ul className="navigation__list">

      <li className="navigation__list-item">
        <Link to="/#learn" className="navigation__link">
          学习
        </Link>
      </li>
      <li className="navigation__list-item">
        <Link to="/#rarity" className="navigation__link">
          稀有度
        </Link>
      </li>
      <li className="navigation__list-item">
        <Link to="/#faq" className="navigation__link">
          FAQ
        </Link>
      </li>
      <li className="navigation__list-item">
        <Link to="/#generate" className="navigation__link">
          路线图
        </Link>
      </li>

      {signedIn && Date.now() >= getConfig().saleTimestamp && (
        <>
          <li className="navigation__list-item">
            <Link to="/my-nfts" className="navigation__link">
              我的NFT
            </Link>
          </li>
          <li className="navigation__list-item">
            <Link to="/link-drop" className="navigation__link">
              LinkDrop
            </Link>
          </li>
        </>
      )}
    </ul>
  </nav>
);

Navigation.propTypes = {
  className: PropTypes.string,
  signedIn: PropTypes.bool,
};

Navigation.defaultProps = {
  className: '',
  signedIn: false,
};

export default Navigation;
