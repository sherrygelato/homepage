import React, { useState } from "react";

import styles from "./navbar.module.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <>
      <nav className={styles.navbar}>
        <div className={styles.navbar_container}>
          <Link
            to="/"
            className={styles.navbar_logo}
            onClick={closeMobileMenu}
          >
            Sherrygelato
          </Link>
          <div
            className={styles.menu_icon}
            onClick={handleClick}
          >
            <FontAwesomeIcon
              className={click ? `${styles.fa_times}` : `${styles.fa_bars}`}
              icon={faBars}
            />
          </div>
          <ul className={click ? `${styles.nav_menu} ${styles.active}` : `${styles.nav_menu}`}>
            <li className={styles.nav_item}>
              <Link
                to="/"
                className={styles.nav_links}
                onClick={closeMobileMenu}
              >
                HOME
              </Link>
            </li>
            <li className={styles.nav_item}>
              <Link
                to="/about"
                className={styles.nav_links}
                onClick={closeMobileMenu}
              >
                ABOUT
              </Link>
            </li>
            <li className={styles.nav_item}>
              <Link
                to="/resume"
                className={styles.nav_links}
                onClick={closeMobileMenu}
              >
                RESUME
              </Link>
            </li>
            <li className={styles.nav_item}>
              <Link
                to="/contact"
                className={styles.nav_links}
                onClick={closeMobileMenu}
              >
                CONTACT
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
