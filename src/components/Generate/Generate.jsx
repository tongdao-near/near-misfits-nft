import React, { useContext } from 'react';
import GenerateSoldOut from './GenerateSoldOut';
import GenerateBlock from './GenerateBlock';
import { appStore } from '../../state/app';
import useBuy from '../../hooks/useBuy';
import img from '../../assets/img/mystery.png';
import CalendarBtn from '../Hero/CalendarBtn';
const Generate = () => {
  const { state } = useContext(appStore);
  const { soldOut, wallet } = state.app;

  return (
    <section className="generate" id="generate">
      <div className="generate__container">
        <div className="generate__information">
          <h2 className="generate__title">
            为什么要购买NFT
          </h2>

          <p className="generate__text">
            本次推出的NFT，是以深受 6000 多万粉丝的喜爱的 12 星座-同道天团（TD12）卡通形象为原型，算法随机生成的头像类NFT收藏合集，包含12,000枚由算法生成的独一无二的星座头像，每一个都是幽默萌系的代表。此外，项目方根据星座穿戴元素的稀缺性，设置了不同级别的稀缺度，增加了好玩度和娱乐性。
          </p>

          <p className="generate__text-big">
            拥有NFT有什么权益：
          </p>
          <p className="generate__text2">
          • 同道12星座元宇宙的特殊访问权限
          </p>
          <p className="generate__text2">
          • 数字社交共识与身份认同
          </p>
          <p className="generate__text2">
          • 星座达人俱乐部DAO
          </p>
          <p className="generate__text2">
          • 有机会获得同道大叔周边的折扣
          </p>
          <p className="generate__text2">
          • 享受星座NFT特殊空投
          </p >
          <p className="generate__text2">
          • 谁知道未来还有什么...
          </p >
          <p className="generate__footer">
            同道星座学院，12星座头像NFT盲盒的统一售价为2 Ⓝ
          </p>
          <CalendarBtn noStyle className="generate__buy-btn" />
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
