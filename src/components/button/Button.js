'use client'; 
import React from 'react';
import styles from './Button.module.css';

const Button = () => {
  return (
    <div>
      <button
        className={styles.button}
        onClick={() =>
          window.open(
            'https://api.whatsapp.com/send?phone=5511958808914',
            'whatsapp',
          )
        }
      >
        Contato
      </button>
    </div>
  );
};

export default Button;
