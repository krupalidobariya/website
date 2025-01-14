import React from "react";
import styles from "./resume.module.css";
import { getImageUrl } from "../../utils";

const Resume = () => {
  return (
    <section className={styles.container} id="resume">
      <h2 className={styles.title}>Resume</h2>
      <div className={styles.content}>
        <div className={styles.left}>
          <img
            src={getImageUrl("projects/krupaliresume.png")}
            alt="resume preview"
            className={styles.resumeImage}
          />
        </div>
        <div className={styles.right}>
          <p className={styles.quote}>
            "Explore my journey, skills, and experiences. Click below to
            download my full resume!"
          </p>
          <a
            href="/assets/projects/Krupali_Resume.pdf"
            download
            className={styles.downloadBtn}
          >
            Download Resume
          </a>
        </div>
      </div>
    </section>
  );
};

export default Resume;
