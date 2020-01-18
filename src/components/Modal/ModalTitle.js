
import React from 'react';
import styles from './Modal.module.scss';

const ModalActions = props => {
  return (
    <React.Fragment>
      <h3 className={styles.title}>
        {props.children}
      </h3>
    </React.Fragment>
  )
}

export default ModalActions;