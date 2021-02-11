import React from 'react';
import DatePicker from 'react-datepicker';
import PropTypes from 'prop-types';
import 'react-datepicker/dist/react-datepicker-cssmodules.css';

const OrderOptionDate = ({currentValue, setOptionValue}) => (
  <div>
    <DatePicker
      selected={currentValue}
      onChange={setOptionValue}
      dateFormat="MM/dd/yy"
    />
  </div>
);


OrderOptionDate.propTypes = {
  currentValue: PropTypes.any,
  setOptionValue: PropTypes.any,
};

export default OrderOptionDate;
