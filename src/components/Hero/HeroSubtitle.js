import React from 'react';
import styles from './Hero.module.scss';

const HeroSubtitle = props => {
  return (
    <p className={styles.heroSubtitle} {...props}> 
      {props.children}
    </p>
  )
}

export default HeroSubtitle;