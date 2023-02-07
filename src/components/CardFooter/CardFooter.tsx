import React from 'react';
import styles from './CardFooter.module.css';
import avatar from '../../assets/images/avatar.png';

function CardFooter() {
  return (
    <div className={styles.cardFooter}>
      <div className={styles.avatarImgBox}>
        <img src={avatar} alt="Avatar" />
      </div>
      <p className={styles.footerParagraph}>Creation of <span>Jules Wyvern</span></p>
    </div>
  );
}

export default CardFooter;