import React, { useContext, memo } from 'react';
import { appStore } from '../../state/app';
import Navigation from '../../components/Navigation';
import SocialLinks from '../../components/SocialLinks';
import ConnectWalletBtn from '../../components/ConnectWalletBtn';
import Loader from '../../components/Loader/Loader';
import logo from '../../assets/img/head-logo.png';
const Header = () => {
  const { state } = useContext(appStore);
  const { wallet, account } = state;

  if (!wallet) {
    return <Loader />;
  }

  return (
    <header className="header">
      <img className="header__logo" src={logo}></img>
      <Navigation className="header__navigation" signedIn={wallet.signedIn} />
      {account?.accountId ? (
        <ConnectWalletBtn
          claz='hide-mobile'
          text={account.accountId}
          handleClick={() => wallet.signOut()}
        />
      ) : (
        <ConnectWalletBtn claz='hide-mobile' handleClick={() => wallet.signIn()} />
      )}
    </header>
  );
};

export default memo(Header);
