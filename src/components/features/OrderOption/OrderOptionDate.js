import React from 'react';
import DatePicker from 'react-datepicker';
import PropTypes from 'prop-types';
import 'react-datepicker/dist/react-datepicker-cssmodules.css';

const OrderOptionDate = ({currentValue, setOptionValue}) => (
  <div>
    <DatePicker
      selected={currentValue}
      onChange={date => setOptionValue(date)}
      isClearable
      dateFormat="MM/dd/yyyy"
      minDate={new Date()}
      showDisabledMonthNavigation
    />
  </div>
);


OrderOptionDate.propTypes = {
  currentValue: PropTypes.any,
  setOptionValue: PropTypes.func,
};

export default OrderOptionDate;
