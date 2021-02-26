import React from 'react';
import PropTypes from 'prop-types';
import Icon from '../../common/Icon/Icon.js';
import styles from './SwitchPhones.scss';

class SwitchPhones extends React.Component {
  constructor() {
    super();
    window.setInterval(() => this.forceUpdate(), 1000);
  }

  static propTypes = {
    info: PropTypes.string,
  };

  getNumber() {
    const phoneNumbers = {
      stella: '678.243.8455',
      amelia: '278.443.6443',
      charlotte: '167.280.3970',
    };

    const hour = new Date().getUTCHours();
    if(hour < 8) return null;
    if(hour < 12) return phoneNumbers.stella;
    if(hour < 16) return phoneNumbers.amelia;
    if(hour < 22) return phoneNumbers.charlotte;

    return null;
  }

  render () {
    const {info} = this.props;

    return (
      <div className={styles.component}>
        <Icon name='phone' />
        <span className={styles.phone}>{this.getNumber() || info}</span>
      </div>
    );
  }
}

export default SwitchPhones;
