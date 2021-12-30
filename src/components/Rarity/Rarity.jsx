import React from 'react';
import { ReactSVG } from 'react-svg';
import RateList from '../RateList';
import rarityData from './rarityData';
import gradient from '../../assets/images/rarity-background-gradient.svg';
import RarityList from './RarityList';

const Rarity = () => (
  <section id="rarity" className="rarity">
    <div className="rarity__header">
      <h1 className="rarity__title">10,000 Nearkats... <br /> How rare is yours?</h1>
      <RateList rates={rarityData.rates} />
    </div>
    <div className="rarity__content-wrapper">
      <div className="rarity__content">
        <div className="rarity__information">
          <p className="rarity__text">
            All Nearkats are cute, however, some are more rare than others. The rarity of your Nearkat is determined by its attributes.
          </p>
          <p className="rarity__text">
            Each has been given a score to represent how rare it is. There is also a fancy color system to help you distinquish.
          </p>

        </div>

        <RarityList list={rarityData.misfits} />
      </div>
    </div>
  </section>
);

export default Rarity;
