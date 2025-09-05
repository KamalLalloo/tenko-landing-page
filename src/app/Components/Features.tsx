"use client";
import { motion } from "framer-motion";
import styles from "./Features.module.css";

export default function Features() {
  const features = [
    {
      title: "🎓 University Application Assistant",
      items: [
        "Track submission deadlines across all SA universities",
        "Requirements checker with APS calculator",
        "University recommendor based on your marks",
        "Visual roadmap from application to registration",
        "Calendar sync with personalized deadlines",
      ],
    },
    {
      title: "📅 Smart Calendar System",
      items: [
        "Auto-sync with academic and event deadlines",
        "Push notifications for important dates",
        "Integration with university calendars",
        "Customizable reminder settings",
      ],
    },
    {
      title: "📚 Notes & Past Papers Hub",
      items: [
        "Upload and share notes, past papers, exam archives",
        "Points system for contributing resources",
        "Community leaderboard for top contributors",
        "Quality rating system for shared content",
      ],
    },
    {
      title: "👩‍🏫 Tutor Marketplace",
      items: [
        "Peer-to-peer tutoring platform",
        "Student-rated tutors with reviews",
        "Affordable rates for township students",
        "Specialized matric exam support",
      ],
    },
    {
      title: "🤖 AI Study Assistant",
      items: [
        "24/7 chatbot for questions and guidance",
        "Test generator from uploaded notes",
        "Note summarizer for quick reviews",
        "Personalized study recommendations",
      ],
    },
    {
      title: "📢 Events & Opportunities",
      items: [
        "Hackathons, bursaries, and career fairs",
        "Youth development programs",
        "Personalized suggestions by field of study",
      ],
    },
  ];

  return (
    <section className={styles.features} id="features">
      <motion.h2
        className={styles.heading}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.2 }}
      >
        Key Features
      </motion.h2>

      <div className={styles.grid}>
        {features.map((feature, i) => (
          <motion.div
            key={i}
            className={styles.card}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.15, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <h3>{feature.title}</h3>
            <ul>
              {feature.items.map((item, j) => (
                <li key={j}>{item}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
