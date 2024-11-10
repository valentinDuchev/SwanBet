import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Navigation.module.css'; // Importing the CSS module

const Navigation = () => {
  return (
    <div>
      {/* Upper Navigation Bar */}
      <header className={styles['upper-nav']}>
        <div className={styles['nav-top']}>
          <div className={styles['nav-left']}>
            <img src="logo.png" alt="SwanBet Logo" className={styles.logo} />
            <span className={styles['brand-name']}>
              Swan<span className={styles.bet}>Bet</span>
            </span>
          </div>
          <div className={styles['nav-right']}>
            <Link to="/Login" className={styles['sign-btn']}>
              Sign In
            </Link>
            <Link to="/Register" className={styles['sign-btn']}>
              Sign Up
            </Link>
          </div>
        </div>
        <nav className={styles['nav-bottom']}>
          <Link to="/AllMatches/672fa9bba2877c22ee25ffc0" className={`${styles['nav-link']} ${styles.active}`}>
            Matches
          </Link>
          <Link to="/MyBets" className={styles['nav-link']}>
            My Bets
          </Link>
          <Link to="/Leagues" className={styles['nav-link']}>
            Leagues
          </Link>
          <Link to="/Standings" className={styles['nav-link']}>
            Standings
          </Link>
        </nav>
      </header>

      {/* Main Content Area */}
      <main className={styles['main-content']}>
        {/* Place your other content here */}
      </main>

      {/* Bottom Navigation Bar (for phone screens only) */}
      <footer className={styles['bottom-nav']}>
        <Link to="/AllMatches" className={styles['bottom-nav-link']}>
          <span>🏆</span>
          <span>Matches</span>
        </Link>
        <Link to="/MyBets" className={styles['bottom-nav-link']}>
          <span>🎫</span>
          <span>My Bets</span>
        </Link>
        <Link to="/Leagues" className={styles['bottom-nav-link']}>
          <span>📊</span>
          <span>Leagues</span>
        </Link>
        <Link to="/Standings" className={styles['bottom-nav-link']}>
          <span>🏅</span>
          <span>Standings</span>
        </Link>
        <Link to="/Profile" className={styles['bottom-nav-link']}>
          <span>👤</span>
          <span>Profile</span>
        </Link>
      </footer>
    </div>
  );
};

export default Navigation;
