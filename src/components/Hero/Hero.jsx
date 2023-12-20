import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Gamelia</h1>
        <p className={styles.description}>
          I'm a I'm ReactJs Developer. with experience ReactJs and
          NextJs. Reach out if you'd like to learn more!
        </p>
        <a href="mailto:eng.gameliaahmed@gmail.com" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <img
        src={getImageUrl("hero/7450342-removebg-preview.png")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      {/* <img
        src={getImageUrl("hero/girlcoding_50.png")}
        alt="Hero image of me"
        className={styles.heroImg}
      /> */}
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
