import React from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import getConfig from '../../config';

const CalendarBtn = ({ className, noStyle }) => {
  const history = useHistory();

  const { saleTimestamp } = getConfig();
  if (Date.now() < saleTimestamp) {
    return (
      <button
        type="button"
        title="Add to Calendar"
        className={`${noStyle ? '' : 'calendar-btn'}  ${className}`}
      >
        即将发售
      </button>
    )
  }

  return (
    <button
      type="button"
      title="Add to Calendar"
      className={`${noStyle ? '' : 'calendar-btn'}  ${className}`}
      onClick={() => history.push('/my-nfts')}
    >
      立即购买NFT
    </button>
  );
};

CalendarBtn.defaultProps = {
  className: '',
  noStyle: false,
};

CalendarBtn.propTypes = {
  className: PropTypes.string,
  noStyle: PropTypes.bool,
};

export default CalendarBtn;
