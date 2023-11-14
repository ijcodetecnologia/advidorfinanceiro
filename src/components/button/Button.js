'use client'; 
import React from 'react';
import styles from './button.module.css';

const Button = () => {
  return (
    <div>
      <button
        className={styles.button}
        onClick={() =>
          window.open(
            'https://api.whatsapp.com/message/PJQRB3FGKNERF1?autoload=1&app_absent=0',
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
