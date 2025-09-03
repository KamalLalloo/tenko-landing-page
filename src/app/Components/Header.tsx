"use client";
import Link from "next/link";
import Image from "next/image";
import styles from "./Header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        {/* Logo on the left */}
        <div className={styles.logo}>
          <Link href="/">
            <Image src="/logo.png" alt="Logo" width={56} height={56} />
          </Link>
        </div>

        {/* Navigation links */}
        <ul className={styles.navList}>
          <li>
            <Link href="/" className={styles.link}>
              Home
            </Link>
          </li>
          <li>
            <Link href="#about" className={styles.link}>
              About
            </Link>
          </li>
          <li>
            <Link href="#features" className={styles.link}>
              Features
            </Link>
          </li>
        </ul>

        {/* Button on the right */}
        <Link href="https://tenko-sepia.vercel.app" target="_blank">
          <button className={styles.button}>Dashboard</button>
        </Link>
      </nav>
    </header>
  );
}
