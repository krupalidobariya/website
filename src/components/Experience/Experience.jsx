import React from "react";
import styles from "./Experience.module.css";
import skills from "../../data/skills.json";
import history from "../../data/history.json";
import { getImageUrl } from "../../utils";

export const Experience = () => {
  return (
    <section className={styles.container} id="experience">
      <h2 className={styles.title}>Experience</h2>
      <div className={styles.content}>
        <div className={styles.skills}>
          {skills.map((skill, id) => {
            return (
              <div key={id} className={styles.skill}>
                <div className={styles.skillImageContainer}>
                  <img src={getImageUrl(skill.imageSrc)} alt={skill.title} />
                </div>
                <p>{skill.title}</p>
              </div>
            );
          })}
        </div>

        <div className={styles.history}>
          {history.map((historyItem, id) => {
            return (
              <div key={id} className={styles.jobCard}>
                <h3 className={styles.jobTitle}>{historyItem.role}</h3>
                <h4 className={styles.companyName}>
                  {historyItem.organisation}
                </h4>
                <p className={styles.jobDate}>
                  {historyItem.startDate} - {historyItem.endDate}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
