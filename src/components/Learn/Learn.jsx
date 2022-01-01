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
        同道大叔的名字可谓家喻户晓。其犀利、传神的段子和幽默搞笑的漫画形象，已成为一代人的回忆。截至2018年底，同道全网粉丝已经突破6000万。中国4.5亿新生代年轻人中，平均每四个人中就有三个观看过同道大叔的内容。
      </p>
      <p className="learn__text">
        2015年，同道文化以星座特质为内涵，以活泼幽默的萌系画风创作出12个星座的卡通形象，共同组成了同道天团（TD12），从此，TD12成为同道文化漫画、图文、视频等文创内容的载体，依托星座的情感、娱乐、社交三大普适超级流量入口。
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
