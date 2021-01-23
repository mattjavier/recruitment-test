import React from 'react';
import styles from '../../styles/Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <a href="/">
        <img
          className={styles.logoImage}
          alt="Skyscanner"
          src="/logo.svg"
        />
      </a>
    </header>
  );
}

export default Header;
