"use client";
import styles from "./About.module.css";

export default function About() {
  return (
    <section className={styles.about} id="about">
      <div className={styles.intro}>
        <h2 className={styles.heading}>About Us</h2>
        <p>
          At Tenko, we believe every South African student deserves equal access
          to education, opportunities, and career growth.
        </p>
        <p>
          Our mission is simple: to guide learners from university applications
          → studying → career prep, all in one easy-to-use platform.
        </p>
      </div>

      <div className={styles.problems}>
        <h3 className={styles.subheading}>The Problems We Solve</h3>
        <div className={styles.grid}>
          <div className={styles.card}>
            <h4>Confusing University Applications</h4>
            <p>
              Students face unclear deadlines, APS confusion, and entry
              requirements.
            </p>
          </div>

          <div className={styles.card}>
            <h4>Scattered & Outdated Resources</h4>
            <p>
              Study notes and past papers are hard to find, scattered across
              WhatsApp groups or outdated PDFs.
            </p>
          </div>

          <div className={styles.card}>
            <h4>Lack of Smart Study Support</h4>
            <p>
              Students don’t have AI tools to help them revise or learn
              efficiently.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
