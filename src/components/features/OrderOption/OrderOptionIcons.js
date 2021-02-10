import React from 'react';
import styles from './OrderOption.scss';
import PropTypes from 'prop-types';
import {formatPrice} from '../../../utils/formatPrice.js';
import Icon from '../../common/Icon/Icon.js';

const OrderOptionIcons = ({values, required, currentValue, setOptionValue}) => (
  <div className={styles.component}>
    {required ? '' : (
      <div className={styles.icon} onClick={() => setOptionValue('')}>
        <Icon name='times-circle'/>
        none
      </div>
    )}
    {values.map(value => (
      <div className={styles.icon + (currentValue === value.id ? '' + styles.iconActive: '')}
        key={value.id}
        onClick={() => setOptionValue(value.id)}>
        <Icon name={value.icon} />
        {value.name} ({formatPrice(value.price)})
      </div>
    ))}
  </div>
);

OrderOptionIcons.propTypes = {
  values: PropTypes.any,
  required: PropTypes.any,
  setOptionValue: PropTypes.any,
  currentValue: PropTypes.any,
};

export default OrderOptionIcons;
