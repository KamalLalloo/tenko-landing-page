"use client";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <h1 className={styles.title}>Your Complete Education Platform</h1>
      <p className={styles.subtitle}>
        Get peer tutoring, free past papers, bursary alerts, and AI-powered
        study tools to level up your education journey.
      </p>
      <div className={styles.buttons}>
        <button className={styles.primary}>Go to Dashboard</button>
        <button className={styles.secondary}>Explore Features</button>
      </div>
    </section>
  );
}
