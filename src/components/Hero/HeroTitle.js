import React from 'react';
import styles from './Hero.module.scss';

const HeroTitle = props => {
  return (
    <h1 className={`${props.center && styles.center} ${styles.heroTitle}`} {...props}> 
      {props.children}
    </h1>
  )
}

export default HeroTitle;