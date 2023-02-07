import React from 'react';
import styles from './Card.module.css';
// Importing Components
import CardBody from '../CardBody/CardBody';
import CardFooter from '../CardFooter/CardFooter';

function Card() {
  return (
    <div className={styles.card}>
      <CardBody />
      <CardFooter />
    </div>
  );
}

export default Card;
