"use client";
import Link from "next/link";
import styles from "./CallToAction.module.css";

export default function CallToAction() {
  return (
    <section className={styles.ctaSection}>
      <div className={styles.container}>
        <h2 className={styles.heading}>
          Ready to Transform Your Education Journey?
        </h2>
        <p className={styles.subheading}>
          Join thousands of South African students who are already succeeding
          with our platform.
        </p>

        <div className={styles.buttons}>
          <Link href="https://tenko-sepia.vercel.app/login">
            <button className={styles.primaryButton}>Sign Up for Free</button>
          </Link>
        </div>

        <p className={styles.note}>
          ✓ No credit card required ✓ 100% free signup ✓ Cancel anytime
        </p>
      </div>
    </section>
  );
}
