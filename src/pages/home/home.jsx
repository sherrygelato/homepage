import React from 'react';

import styles from './home.module.css';

function Home() {
  function toAboutClick() {
    window.location.href = '/homepage/about';
  }
  
  function toResumeClick() {
    window.location.href = '/homepage/resume';
  }
  
  function toContactClick() {
    window.location.href = '/homepage/contact';
  }

  return (
    <>
        <div className={styles.container}>
            <h1>This is sherry.</h1>
        </div>
        <div className={styles.container3}>
          <div className={styles.container3_child}>
            <div 
              className={styles.square_circle}
              onClick={toAboutClick}
            >
              <div className={styles.text_box}>
                <h3>Continue Exploring?</h3>
                <h1>About Me</h1>
              </div>
            </div>
          </div>
          <div className={styles.container3_child}>
          <div 
              className={styles.square_circle}
              onClick={toResumeClick}
            >
              <div className={styles.text_box}>
                <h3>in Korean</h3>
                <h1>Resume</h1>
              </div>
            </div>
          </div>
          <div className={styles.container3_child}>
            <div 
              className={styles.square_circle}
              onClick={toContactClick}
            >
              <div className={styles.text_box}>
                <h3>Interested?</h3>
                <h1>Contact Me</h1>
              </div>
            </div>
          </div>
        </div>
    </>
  );
}

export default Home;
