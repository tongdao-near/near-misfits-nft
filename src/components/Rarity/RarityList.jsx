import React from 'react';
import PropTypes from 'prop-types';
import demo1 from '../../assets/img/demo1.png';
import demo2 from '../../assets/img/demo2.png';
import demo3 from '../../assets/img/demo3.png';
import demo4 from '../../assets/img/demo4.png';
import demo5 from '../../assets/img/demo5.png';

const RarityList = ({ list }) => (
  <ul className="rarity-list">
    <li className="rarity-item">
      <picture>
        <img className="rarity-item__image" src={demo1} alt="image" />
      </picture>

      <div className="rarity-item__header">
        <p>#0123456789 </p>
      </div>
    </li>

    <li className="rarity-item">
      <picture>
        <img className="rarity-item__image" src={demo2} alt="image" />
      </picture>

      <div className="rarity-item__header">
        <p>#0123456789 </p>
      </div>
    </li>

    <li className="rarity-item">
      <picture>
        <img className="rarity-item__image" src={demo3} alt="image" />
      </picture>

      <div className="rarity-item__header">
        <p>#0123456789 </p>
      </div>
    </li>

    <li className="rarity-item">
      <picture>
        <img className="rarity-item__image" src={demo4} alt="image" />
      </picture>

      <div className="rarity-item__header">
        <p>#0123456789 </p>
      </div>
    </li>

    <li className="rarity-item">
      <picture>
        <img className="rarity-item__image" src={demo5} alt="image" />
      </picture>

      <div className="rarity-item__header">
        <p>#0123456789 </p>
      </div>
    </li>
  </ul>
);

RarityList.propTypes = {
  list: PropTypes.array,
};

RarityList.defaultProps = {
  list: [],
};
export default RarityList;
