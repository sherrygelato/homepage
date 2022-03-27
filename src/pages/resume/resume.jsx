import React from 'react';

import styles from './resume.module.css';

import pdf from '../../data/resume.pdf'

function Resume() {
  const downloadResume = () => {
    window.open('https://drive.google.com/file/d/1uPky82eNu8GE-VTxNLIDw1ahrb97Rq_b/view?usp=sharing')
  }

  return (
    <>
        <div className={styles.container}>
          <div className={styles.resume} />
          <div 
            className={styles.download}
            onClick={downloadResume}
            target="_blank"
            aria-label="downloadResume"
          >
            이력서 다운
          </div>
        </div>
    </>
  );
}

export default Resume;
