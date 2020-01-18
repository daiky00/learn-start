import React from 'react';
import styles from './Navigation.module.scss';

const Navigation = props => {
  return (
    <li className={styles.navigationItem} {...props}>
      {props.children}
    </li>
  )
}

export default Navigation;