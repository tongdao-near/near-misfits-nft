import React from 'react';
import PropTypes from 'prop-types';

const ConnectWalletBtn = ({ handleClick, text, claz }) => (
  <button className={`connect-wallet ${claz}`} type="button" onClick={handleClick}>
    {text ? (
      <p className="connect-wallet__text connect-wallet__text-name">{text}</p>
    ) : (
      <p className="connect-wallet__text">连接钱包</p>
    )}
  </button>
);

ConnectWalletBtn.propTypes = {
  handleClick: PropTypes.func,
  text: PropTypes.string,
};

export default ConnectWalletBtn;
