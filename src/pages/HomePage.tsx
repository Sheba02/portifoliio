import styles from './HomePage.module.css';

const HomePage = () => {
  return (
    <div className={styles.homeContainer}>
      <header className={styles.headerSection}>
        <div className={styles.profileImgContainer}>
          <img src="/shb.jpg" alt="Sheba Mugisha Profile" className={styles.profileImg} />
        </div>
        <div className={styles.headerInfo}>
          <h1>SHEBA MUGISHA</h1>
          <div className={styles.title}>Business Computing Professional | Versatile Business-Technology Specialist</div>
          <div className={styles.contactInfo}>
            <div className={styles.contactItem}>📍 Kigali Rwanda</div>
            <div className={styles.contactItem}>📞 +250736083584</div>
            <div className={styles.contactItem}>📧 shebamugisha9@gmail.com</div>
          </div>
          <div className={styles.socialLinks}>
            <a href="https://www.linkedin.com/in/sheba-mugisha-aa798b2b0/" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>LinkedIn</a>
            <a href="https://github.com/Sheba02" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>GitHub</a>
            <a href="https://x.com/sheba_mugisha" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>X (Twitter)</a>
          </div>
        </div>
      </header>
      <main className={styles.mainContent}>
        <p>This is my professional portfolio built with React and TypeScript. Explore the navigation to learn more about my skills, education, and how to contact me.</p>
      </main>
    </div>
  );
};

export default HomePage;
