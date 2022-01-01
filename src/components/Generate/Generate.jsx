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
            NFT为什么值得收藏
          </h2>

          <p className="generate__text">
            2021年是NFT元年，特别是头像类NFT因具备强社交属性火爆全网。通常，头像类NFT由一个主体与多层元素属性随机生成。
            而同道星座学院打破常规，是由12个主体组合而成的NFT头像收藏合集。依托于同道大叔丰富的星座文化内涵，为此次盲盒的开启增加了更多的惊喜与乐趣！
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
