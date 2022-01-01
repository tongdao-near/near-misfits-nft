import React from 'react';
import { ReactSVG } from 'react-svg';
import RateList from '../RateList';
import rarityData from './rarityData';
import gradient from '../../assets/images/rarity-background-gradient.svg';
import RarityList from './RarityList';

const Rarity = () => (
  <section id="rarity" className="rarity">
    <div className="rarity__header">
      <ul>
        <li>
          <h1 className="rarity__title">
            12,000 枚独一无二 12星座头像盲盒
          </h1>
        </li>

        <li>
          <h3 className="rarity__subtitle">
            你的头像长什么样?
          </h3>
        </li>
      </ul>
      <RateList rates={rarityData.rates} />
    </div>
    <div className="rarity__content-wrapper">
      <div className="rarity__content">
        <div className="rarity__information">
          <p className="rarity__text">
            同道星座学院这是一个充满了奇思妙想的世界，白羊座“加里斯”、金牛座“牛丢丢”、双子座“猫院长”、巨蟹座“蛋丁”……这些或乖巧、或傲娇、或炫酷的角色都充溢着快乐的能量。
          </p>
          <p className="rarity__text">
            除此之外，“星座场景”、“奇幻星空”和“火爆性格”三款稀缺的 NFT 也为此次盲盒的开启增加了更多的惊喜与乐趣，既贴合了当下年轻人对卡通动漫的喜爱之情，也为 NFT 多元的世界增添了一抹俏皮的亮色。
          </p>

        </div>

        <RarityList list={rarityData.misfits} />
      </div>
    </div>
  </section>
);

export default Rarity;
