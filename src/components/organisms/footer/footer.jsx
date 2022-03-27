import React from "react";

import styles from "./footer.module.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBlog, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faInstagram, } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  
  function onGithubClick() {
    window.open("https://github.com/sherrygelato")
  }
  
  function onBlogClick() {
    window.open("https://sherrygelato.tistory.com")
  }
  
  function onInstagramClick() {
    window.open("https://www.instagram.com/seeeeeui/")
  }
  
  function onEmailClick() {
    window.open("mailto:sherrygelato.lab@gmail.com")
  }

  return (
    <div className={styles.footer_container}>
      <section className={styles.social_media}>
        <div className={styles.social_media_wrap}>
          <div className={styles.website_rights}>
            Developed by SEUNGEUN YI
          </div>
          <div className={styles.social_logo}>
            Copyright © 2022
          </div>
          <div className={styles.social_icons}>
            <div
              className={styles.social_icon_link}
              onClick={onGithubClick}
              target="_blank"
              aria-label="Github"
            >
              <FontAwesomeIcon icon={faGithub} />
            </div>
            <div
              className={styles.social_icon_link}
              onClick={onBlogClick}
              target="_blank"
              aria-label="Tistory"
            >
              <FontAwesomeIcon icon={faBlog} />
            </div>
            <div
              className={styles.social_icon_link}
              onClick={onInstagramClick}
              target="_blank"
              aria-label="Instagram"
            >
              <FontAwesomeIcon icon={faInstagram} />
            </div>
            <div
              className={styles.social_icon_link}
              onClick={onEmailClick}
              target="_blank"
              aria-label="Email"
            >
              <FontAwesomeIcon icon={faEnvelope} />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
