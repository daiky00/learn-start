import React from 'react';
import styles from './Logo.module.scss';

const Logo = props => {
  return (
    <div className={styles.logo} {...props}>
      {props.children}
    </div>
  )
}

export default Logo;