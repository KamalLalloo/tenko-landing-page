"use client";
import styles from "./Features.module.css";

export default function Features() {
  return (
    <section className={styles.features} id="features">
      <h2 className={styles.heading}>Key Features</h2>
      <div className={styles.grid}>
        <div className={styles.card}>
          <h3>🎓 University Application Assistant</h3>
          <ul>
            <li>Track submission deadlines across all SA universities</li>
            <li>Requirements checker with APS calculator</li>
            <li>University recommendor based on your marks</li>
            <li>Visual roadmap from application to registration</li>
            <li>Calendar sync with personalized deadlines</li>
          </ul>
        </div>

        <div className={styles.card}>
          <h3>📅 Smart Calendar System</h3>
          <ul>
            <li>Auto-sync with academic and event deadlines</li>
            <li>Push notifications for important dates</li>
            <li>Integration with university calendars</li>
            <li>Customizable reminder settings</li>
          </ul>
        </div>

        <div className={styles.card}>
          <h3>📚 Notes & Past Papers Hub</h3>
          <ul>
            <li>Upload and share notes, past papers, exam archives</li>
            <li>Points system for contributing resources</li>
            <li>Community leaderboard for top contributors</li>
            <li>Quality rating system for shared content</li>
          </ul>
        </div>

        <div className={styles.card}>
          <h3>👩‍🏫 Tutor Marketplace</h3>
          <ul>
            <li>Peer-to-peer tutoring platform</li>
            <li>Student-rated tutors with reviews</li>
            <li>Affordable rates for township students</li>
            <li>Specialized matric exam support</li>
          </ul>
        </div>

        <div className={styles.card}>
          <h3>🤖 AI Study Assistant</h3>
          <ul>
            <li>24/7 chatbot for questions and guidance</li>
            <li>Test generator from uploaded notes</li>
            <li>Note summarizer for quick reviews</li>
            <li>Personalized study recommendations</li>
          </ul>
        </div>

        <div className={styles.card}>
          <h3>📢 Events & Opportunities</h3>
          <ul>
            <li>Hackathons, bursaries, and career fairs</li>
            <li>Youth development programs</li>
            <li>Personalized suggestions by field of study</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
