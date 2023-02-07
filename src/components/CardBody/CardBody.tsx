import React from 'react';
import styles from './CardBody.module.css';
// Importing images and svgs
import equilibrium from '../../assets/images/equilibrium.jpg';
import ethereumIcon from '../../assets/svg/ethereum.svg';
import clockIcon from '../../assets/svg/clock.svg';
import viewIcon from '../../assets/svg/view.svg';

function CardBody() {
  return (
    <div className={styles.cardBody}>
      <div className={styles.imageBox}>
        <img className={styles.itemImg} src={equilibrium} alt="Equilibrium" />
        <div className={styles.cardVisible}>
          <img src={viewIcon} alt="Eye" />
        </div>
      </div>
      <h3 className={styles.itemTitle}>Equilibrium #3429</h3>
      <p className={styles.itemDescription}>
        Our Equilibrium collection promotes balance and calm.
      </p>
      <div className={styles.flexBlock}>
        <div className={styles.flexBox}>
          <img src={ethereumIcon} alt="Ethereum" />
          <span className={styles.ethereumTitle}>0.041 eth</span>
        </div>
        <div className={styles.flexBox}>
          <img src={clockIcon} alt="Clock" />
          <span className={styles.clockTitle}>3 days left</span>
        </div>
      </div>
    </div>
  );
}

export default CardBody;
