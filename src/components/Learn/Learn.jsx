import React from 'react';
import learnTitle from '../../assets/img/learn-title.svg';
import learnImg from '../../assets/img/learn.svg';

const Learn = () => (
  <section id="learn" className="learn">
    <div className="learn__information">
      <img
        className="learn__title-img"
        src={learnTitle}
        alt="learn"
      />
      <h2 className="learn__title">
        星座娱乐第一 IP
      </h2>
      <p className="learn__text">
        同道大叔的名字可谓家喻户晓。其犀利、传神的段子和幽默搞笑的漫画形象，已成为一代人的回忆。截至2018年底，同道全网粉丝已经突破6000万。
      </p>
      <p className="learn__text">
        同道文化以星座特质为内涵，以活泼幽默的萌系画风创作出12个星座的卡通形象，共同组成了同道天团（TD12）深受粉丝喜爱。
      </p>
      <p className="learn__text">
        同道星座学院NFT就是以12 星座-同道天团卡通形象为原型，基于NEAR链算法随机生成的头像类NFT收藏合集，包含12,000枚算法生成的独一无二的星座头像，每一个都是幽默萌系的代表。
      </p>
    </div>
    <div className="learn__picture">
      <picture>
        <img
          src={learnImg}
          alt="zombie"
          className="learn__picture-image"
        />
      </picture>

    </div>
  </section>
);

export default Learn;
