import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor icon" />
            <div className={styles.aboutItemText}>
              <h3>Full-stack Developer</h3>
              <p>
                I'm a Full-stack developer with experience in building android
                and iOS app.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/serverIcon.png")} alt="Server icon" />
            <div className={styles.aboutItemText}>
              <h3>Data Scientist</h3>
              <p>
                I'm a Data Scientist with expertise in data analysis, machine
                learning, and transforming data into actionable insights to
                solve complex problems.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
