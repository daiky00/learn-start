import React from 'react';
import styles from './Navigation.module.scss';

const Navigation = props => {
  return (
    <ul className={styles.navigation} {...props}>
      {props.children}
    </ul>
  )
}

export default Navigation;