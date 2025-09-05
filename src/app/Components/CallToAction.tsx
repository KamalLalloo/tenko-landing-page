"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import styles from "./CallToAction.module.css";

export default function CallToAction() {
  return (
    <section className={styles.ctaSection}>
      <div className={styles.container}>
        <motion.h2
          className={styles.heading}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.2 }}
        >
          Ready to Transform Your Education Journey?
        </motion.h2>

        <motion.p
          className={styles.subheading}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.2 }}
        >
          Join thousands of South African students who are already succeeding
          with our platform.
        </motion.p>

        <motion.div
          className={styles.buttons}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <Link href="https://tenko-sepia.vercel.app/login">
            <button className={styles.primaryButton}>Sign Up for Free</button>
          </Link>
        </motion.div>

        <motion.p
          className={styles.note}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.2 }}
        >
          ✓ No credit card required ✓ 100% free signup
        </motion.p>
      </div>
    </section>
  );
}
