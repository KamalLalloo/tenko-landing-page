"use client";
import { motion } from "framer-motion";
import styles from "./About.module.css";

export default function About() {
  return (
    <section className={styles.about} id="about">
      <motion.div
        className={styles.intro}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.2 }}
      >
        <h2 className={styles.heading}>About Us</h2>
        <p>
          At Tenko, we believe every South African student deserves equal access
          to education, opportunities, and career growth.
        </p>
        <p>
          Our mission is simple: to guide learners from university applications
          → studying → career prep, all in one easy-to-use platform.
        </p>
      </motion.div>

      <div className={styles.problems}>
        <motion.h3
          className={styles.subheading}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.2 }}
        >
          The Problems We Solve
        </motion.h3>

        <div className={styles.grid}>
          {[
            {
              title: "Confusing University Applications",
              text: "Students face unclear deadlines, APS confusion, and entry requirements.",
            },
            {
              title: "Scattered & Outdated Resources",
              text: "Study notes and past papers are hard to find, scattered across WhatsApp groups or outdated PDFs.",
            },
            {
              title: "Lack of Smart Study Support",
              text: "Students don’t have AI tools to help them revise or learn efficiently.",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              className={styles.card}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: 0.3 + i * 0.2,
                ease: "easeOut",
              }}
              viewport={{ once: true, amount: 0.2 }}
            >
              <h4>{item.title}</h4>
              <p>{item.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
