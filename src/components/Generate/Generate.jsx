import React, { useContext } from 'react';
import GenerateSoldOut from './GenerateSoldOut';
import GenerateBlock from './GenerateBlock';
import { appStore } from '../../state/app';
import useBuy from '../../hooks/useBuy';
import img from '../../assets/img/11.png'
const Generate = () => {
  const { state } = useContext(appStore);
  const { soldOut } = state.app;
  const { oneNFT } = state.price;

  const { formatPrice } = useBuy();

  return (
    <section className="generate" id="generate">
      <div className="generate__container">
        <div className="generate__information">
          <h2 className="generate__title">Why generate one?</h2>

          <p className="generate__text">
            Aside from helping the Nearkats in their mission of building out the open web, and participating in a super fun game utilizing bleeding edge tech, Nearkat NFTs will get you more than cute little kitty in a digital city.
          </p>

          <p className="generate__text-big">Your Nearkat gets you:</p>
          <p className="generate__text2">
            Special Access to Nearkat owners group</p>
          <p className="generate__text2">
            Discounts on stuff</p>
          <p className="generate__text2">
            Another perk</p>
          <p className="generate__text2">

            Another perk</p>
          <p className="generate__text2">
            and who knows what else in the future...
          </p >
          <p className="generate__footer">
            For the flat fee of 5Ⓝ, you can mint your own Nearkat.
          </p>
        </div>

        <div className="generate__block">


          <picture>
            <img
              className={`generate__img ${soldOut ? 'generate__img-sold-out' : ''
                }`}
              src={img}
              alt="generate"
            />
          </picture>
        </div>
      </div>
    </section >
  );
};

export default Generate;
