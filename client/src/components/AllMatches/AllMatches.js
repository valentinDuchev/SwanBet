import React, { useEffect, useState } from 'react';
import styles from './AllMatches.module.css';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';

const MatchesPage = () => {

  const [matches, setMatches] = useState([])

  const { id } = useParams()

  useEffect(() => {
    axios
      .get(`http://localhost:3030/api/legs/${id}`)
      .then(res => {
        console.log(res)
        setMatches([...matches, res.data.data.matches])
      })
  }, [])

  console.log(matches)

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
          {matches[0] ? matches[0].map((match) =>
            <div className={styles.match}>
              <div className={styles.league}>{match.league}</div>
              <div className={styles.teams}>{match.name}</div>
              <div className={styles['date-year']}>{match.date}</div>
              <div className={styles['start-time']}>18:00</div>
              <Link to={`/OneMatch/${id}/${match._id}`} className={styles['bet-btn']}>Bet Now</Link>
              <span>Bets closing in 17.50</span>
            </div>
          ) : ''}
        </div>
        {/* <div className={styles['matches-box']}>
          <div className={styles.match}>
            <div className={styles.league}>Premier League</div>
            <div className={styles.teams}>CSKA vs Levski</div>
            <div className={styles['date-year']}>03 Nov 2024</div>
            <div className={styles['start-time']}>18:00</div>
            <Link to='/OneMatch' className={styles['bet-btn']}>Bet Now</Link>
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
        </div> */}
      </main>
    </div>
  );
};

export default MatchesPage;
