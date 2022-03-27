import React from 'react';

import styles from './about.module.css';

function About() {
  return (
    <>
      <div className={styles.container}>
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
    </>
  );
}

export default About;
