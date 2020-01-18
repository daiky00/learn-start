import React from 'react';
import styles from './Hero.module.scss';

const Hero = props => {
  return (
    <div className={styles.heroWrapper}>
      <div className={styles.hero}>
        {props.children}
      </div>
    </div>
  )
}

export default Hero;