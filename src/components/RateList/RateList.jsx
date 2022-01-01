import React from 'react';
import PropTypes from 'prop-types';
import RateListItem from './RateListItem';

const RateList = ({ rates }) => (
  <div className="rate-list">
    <div className="rate-item rate-item__border">
      <div className="rate-item__count">6,000</div>
      <p className="rate-item__text">纯色背景 50%</p>
      <p className="rate-item__text">普通</p>
    </div>

    <div className="rate-item rate-item__border">
      <div className="rate-item__count">3,600</div>
      <p className="rate-item__text">纹理背景 30%</p>
      <p className="rate-item__text">高级</p>
    </div>

    <div className="rate-item rate-item__border">
      <div className="rate-item__count">1,200</div>
      <p className="rate-item__text">场景背景 10%</p>
      <p className="rate-item__text">稀有</p>
    </div>

    <div className="rate-item rate-item__border">
      <div className="rate-item__count">600</div>
      <p className="rate-item__text">性格A背景 5%</p>
      <p className="rate-item__text">史诗</p>
    </div>

    <div className="rate-item">
      <div className="rate-item__count">600</div>
      <p className="rate-item__text">性格B背景 5%</p>
      <p className="rate-item__text">史诗</p>
    </div>

  </div>
);

RateList.propTypes = {
  rates: PropTypes.array,
};

export default RateList;
