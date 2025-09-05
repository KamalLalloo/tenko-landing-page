"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section id="hero" className={styles.hero}>
      <motion.h1
        className={styles.title}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.2 }}
      >
        Your Complete Education Platform
      </motion.h1>

      <motion.p
        className={styles.subtitle}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.2 }}
      >
        Get peer tutoring, free past papers, bursary alerts, and AI-powered
        study tools to level up your education journey.
      </motion.p>

      <motion.div
        className={styles.buttons}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.2 }}
      >
        <Link href="https://tenko-sepia.vercel.app/login" target="_blank">
          <button className={styles.primary}>Go to Dashboard</button>
        </Link>
        <Link href="#features">
          <button className={styles.secondary}>Explore Features</button>
        </Link>
      </motion.div>
    </section>
  );
}
