import React from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';

const CalendarBtn = ({ className, noStyle }) => {
  const history = useHistory();

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
