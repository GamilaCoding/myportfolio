import React, { useState } from "react";

import styles from "./Navbar.module.css";
import { getImageUrl } from "../../utils";
import './Navbar.module.css';

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showModal, setshowModal] = useState(false);
  return (
    <header className="flex">

    <nav className={styles.navbar}>
      <a className={styles.title} href="/">
        Portfolio
      </a>
      <div className={styles.menu}>
        <ul
          className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`}
          onClick={() => setMenuOpen(false)}
        >
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#experience">Experience</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#about">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
    </header>
  );
};
