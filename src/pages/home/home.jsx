import React from 'react';

import styles from './home.module.css';
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
        <div className={styles.container}>
            <h1>This is sherry.</h1>
        </div>
        <div className={styles.container3}>
          <div className={styles.container3_child}>
            <Link 
              className={styles.square_circle}
              to="/about"
            >
              <div className={styles.text_box}>
                <h3>Continue Exploring?</h3>
                <h1>About Me</h1>
              </div>
            </Link>
          </div>
          <div className={styles.container3_child}>
          <Link 
              className={styles.square_circle}
              to="/resume"
            >
              <div className={styles.text_box}>
                <h3>in Korean</h3>
                <h1>Resume</h1>
              </div>
            </Link>
          </div>
          <div className={styles.container3_child}>
            <Link 
              className={styles.square_circle}
              to="/contact"
            >
              <div className={styles.text_box}>
                <h3>Interested?</h3>
                <h1>Contact Me</h1>
              </div>
            </Link>
          </div>
        </div>
    </>
  );
}

export default Home;
