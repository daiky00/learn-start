import React from 'react';
import styles from './Header.module.scss';

const Header = props => {
  return (
    <React.Fragment>
      <header className={styles.header}>
        {props.children}
      </header>
    </React.Fragment>
  )
}

export default Header;