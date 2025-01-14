import React, { useState, useEffect } from "react";
import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  const [currentText, setCurrentText] = useState("");
  const [index, setIndex] = useState(0);
  const [isErasing, setIsErasing] = useState(false);
  const [text, setText] = useState("Software Developer");

  const softwareDeveloper = "Software Developer";
  const dataScientist = "Data Scientist";

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isErasing && index < softwareDeveloper.length) {
        setCurrentText((prev) => prev + softwareDeveloper[index]);
        setIndex(index + 1);
      } else if (isErasing && index > 0) {
        setCurrentText((prev) => prev.slice(0, prev.length - 1));
        setIndex(index - 1);
      } else if (!isErasing && index === softwareDeveloper.length) {
        setTimeout(() => {
          setIsErasing(true);
        }, 1000); 
      } else if (isErasing && index === 0) {
        setTimeout(() => {
          setIsErasing(false);
          setText(dataScientist);
        }, 500); 
      }
    }, 150); 

    return () => clearInterval(interval);
  }, [index, isErasing]);

  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Krupali Dobariya</h1>
        <p className={styles.description}>
          I'm a <span className={styles.animatedText}>{currentText}</span>
        </p>
        <a
          href="https://www.linkedin.com/in/krupalidobariya/"
          className={styles.contactBtn}
          target="_blank"
          rel="noopener noreferrer"
        >
          Contact Me
        </a>
      </div>
      <img
        src={getImageUrl("hero/2-removebg-preview.png")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
