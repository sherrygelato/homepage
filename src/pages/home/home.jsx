import React from 'react';

import styles from './home.module.css';

function Home() {
  return (
    <>
        <div className={styles.container}>
            <video src='https://www.pexels.com/video/group-of-dolphins-swimming-underwater-5607986/' autoPlay loop muted />
            <h1>this is sherry.</h1>
        </div>
    </>
  );
}

export default Home;
