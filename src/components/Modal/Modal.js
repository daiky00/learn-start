
import React from 'react';
import PropTypes from 'prop-types';
import { IoIosClose } from 'react-icons/io';
import styles from './Modal.module.scss';

const Modal = (props) => {
  return (
    <React.Fragment>
      <div className={`
          ${styles.modal} 
          ${styles.close} 
          ${props.open && styles.open}  
        `}>
        <div className={styles.closeIcon} onClick={props.onClose}>
          <IoIosClose />
        </div>
        {props.children}
      </div>
      <div className={props.open && styles.ModalBackdrop}></div>
    </React.Fragment>
  )
}


Modal.propTypes = {
  open: PropTypes.bool,
  onClose: PropTypes.func
}

export default Modal;