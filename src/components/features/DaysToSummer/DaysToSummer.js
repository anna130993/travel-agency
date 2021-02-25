import React from 'react';
import styles from './DaysToSummer.scss';

class DaysToSummer extends React.Component {
  getCountdownDays() {
    const today = new Date();
    const summerStart = new Date(Date.UTC(today.getUTCFullYear(), 5, 21));
    const summerEnd = new Date(Date.UTC(today.getUTCFullYear(), 8, 23));

    if(today.getUTCMonth() == summerEnd.getUTCMonth() && today.getUTCDate() > summerEnd.getUTCDate()) {
      summerStart.setUTCFullYear(summerStart.getUTCFullYear() + 1);
    }

    const singleDay = 1000 * 60 * 60 * 24;
    const daysTillSummer = Math.round((summerStart.getTime() - today.getTime()) / singleDay);

    if(daysTillSummer === 1) {
      return '1 day left till summer!';
    } else if (daysTillSummer <= 0) {
      return '';
    } else {
      return daysTillSummer + ' days left till summer!';
    }
  }
  render() {
    const daysTillSummer = this.getCountdownDays();
    return (
      <div className={styles.component}>
        <div className={styles.description}>{daysTillSummer}</div>
      </div>
    );
  }
}

export default DaysToSummer;
