import React from "react";

import styles from "./footer.module.css";

import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faYoutube, } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  function onEmailClick() {
    window.open("mailto:sherrygelato.lab@gmail.com")
  }

  return (
    <div className={styles.footer_container}>
      <section className={styles.social_media}>
        <div className={styles.social_media_wrap}>
          <small className={styles.website_rights}>
            sherrygelato © 2022
          </small>
          <div className={styles.social_icons}>
            <Link
              className={styles.social_icon_link}
              to="https://github.com/sherrygelato?tab=repositories"
              target="_blank"
              aria-label="Github"
            >
              <FontAwesomeIcon icon={faGithub} />
            </Link>
            <Link
              className={styles.social_icon_link}
              to="/"
              target="_blank"
              aria-label="Youtube"
            >
              <FontAwesomeIcon icon={faYoutube} />
            </Link>
            <div
              className={styles.social_icon_link}
              onClick={onEmailClick}
              target="_blank"
              aria-label="email"
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
