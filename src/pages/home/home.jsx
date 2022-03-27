import React from 'react';

import styles from './home.module.css';

function Home() {
  function toAboutClick() {
    window.location.replace('/about');
  }
  
  function toResumeClick() {
    window.location.replace('/resume');
  }
  
  function toContactClick() {
    window.location.replace('/contact');
  }

  return (
    <>
        <div className={styles.container}>
            <h1>This is sherry.</h1>
        </div>
        <div className={styles.container2}>
          <div className={styles.container_left} />
          <div className={styles.container_right}>
            <h1>Hello, There! :)</h1>
            <h3>I'm SEUNGEUN YI.</h3>
            <h5>I’m a junior developer in Seoul, Korea.</h5>
            <h5>I’m currently learning Python, Data Analysis, ML/DL.</h5>
            <h5>I passed through the International Economics and Trade at Renmin University in Beijing, China.</h5>
            <h5>Fun fact: Playing cello concerto No.1 in C major of Haydn, Watching Soccer or basketball events.</h5>
            <div className={styles.github_stats}>
              <img 
                src="https://github-readme-stats.vercel.app/api?username=sherrygelato&theme=vue-dark&show_icons=true" 
                height="150px" 
                alt='git_stats1'
              />
              <img 
                src="https://github-readme-stats.vercel.app/api/top-langs/?username=sherrygelato&langs_count=4&layout=compact&bg_color=045F5F&title_color=fff&text_color=fff&hide=jupyter%20notebook, html" 
                height="150px"
                alt='git_stats2'
              />
            </div>
          </div>
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
