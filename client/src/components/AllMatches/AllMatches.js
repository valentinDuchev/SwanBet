import React from 'react';
import styles from './AllMatches.module.css';
import { Link } from 'react-router-dom';

const MatchesPage = () => {
  return (
    <div>
      {/* Top Buttons */}
      <header className={styles.header}>
        <button className={`${styles['nav-link']} ${styles.active}`}>Previous Legs</button>
        <button className={styles['nav-link']}>Current Leg</button>
      </header>

      {/* Main Content */}
      <main className={styles['main-content']}>
        <div className={styles['matches-box']}>
          <div className={styles.match}>
            <div className={styles.league}>Premier League</div>
            <div className={styles.teams}>CSKA vs Levski</div>
            <div className={styles['date-year']}>03 Nov 2024</div>
            <div className={styles['start-time']}>18:00</div>
            <Link to='/OneMatch'className={styles['bet-btn']}>Bet Now</Link>
            <span>Bets closing in 17.50</span>
          </div>
          <div className={styles.separator}>...</div>

          <div className={styles.match}>
            <div className={styles.league}>La Liga</div>
            <div className={styles.teams}>Real Madrid vs Barcelona</div>
            <div className={styles['date-year']}>03 Nov 2024</div>
            <div className={styles['start-time']}>21:00</div>
            <button className={styles['bet-btn']}>Bet Now</button>
          </div>
          <div className={styles.separator}>...</div>

          <div className={styles.match}>
            <div className={styles.league}>Premier League</div>
            <div className={styles.teams}>Manchester City vs Manchester United</div>
            <div className={styles['date-year']}>03 Nov 2024</div>
            <div className={styles['start-time']}>19:30</div>
            <button className={styles['bet-btn']}>Bet Now</button>
          </div>
          <div className={styles.separator}>...</div>

          <div className={styles.match}>
            <div className={styles.league}>Premier League</div>
            <div className={styles.teams}>Liverpool vs Arsenal</div>
            <div className={styles['date-year']}>03 Nov 2024</div>
            <div className={styles['start-time']}>17:00</div>
            <button className={styles['bet-btn']}>Bet Now</button>
          </div>
          <div className={styles.separator}>...</div>

          <div className={styles.match}>
            <div className={styles.league}>Serie A</div>
            <div className={styles.teams}>Inter vs Napoli</div>
            <div className={styles['date-year']}>03 Nov 2024</div>
            <div className={styles['start-time']}>20:00</div>
            <button className={styles['bet-btn']}>Bet Now</button>
          </div>
          <div className={styles.separator}>...</div>
        </div>
      </main>
    </div>
  );
};

export default MatchesPage;
