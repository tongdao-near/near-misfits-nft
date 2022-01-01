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
            你的星座头像长什么样?
          </h3>
        </li>
      </ul>
      <RateList rates={rarityData.rates} />
    </div>
    <div className="rarity__content-wrapper">
      <div className="rarity__content">
        <div className="rarity__information">
          <p className="rarity__text">
            同道星座学院是一个充满了奇思妙想的世界，TD12天团或乖巧、或傲娇、或炫酷的角色都充溢着快乐的能量。根据12个星座性格特征设计了超过280个不同属性，通过设置稀缺性增加了可玩性和惊喜感！
          </p>
          <p className="rarity__text">
            背景属性稀缺性：<br/>
            “纯色” - 50% <br/>
            “场景” - 30% <br/>
            “纹理” - 10% <br/>
            “性格A”、“性格B” - 各 5%
          </p>

        </div>

        <RarityList list={rarityData.misfits} />
      </div>
    </div>
  </section>
);

export default Rarity;
