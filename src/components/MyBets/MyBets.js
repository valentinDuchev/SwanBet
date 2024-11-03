// src/components/MyBets.js
import React from 'react';
import { Link } from 'react-router-dom';
import styles from './MyBets.module.css';
import BetItem from '../BetItem/BetItem';

const MyBets = () => {
    const bets = [
        {
            status: 'unsettled',
            match: 'CSKA vs Levski',
            bets: [
                { name: 'CSKA to win', odds: '2.00' },
                { name: 'Under 2.5', odds: '1.85' },
            ],
            totalOdds: '3.70',
            link: '/bet/cska-levski'
        },
        {
            status: 'win',
            match: 'Real Madrid vs Barcelona',
            bets: [
                { name: 'Real Madrid to win', odds: '1.75' },
                { name: 'Over 2.5', odds: '1.90' },
                { name: 'Over 9.5 corners', odds: '2.10' },
            ],
            totalOdds: '6.57',
            link: '/bet/real-barcelona'
        },
        {
            status: 'loss',
            match: 'Manchester City vs Manchester United',
            bets: [
                { name: 'Manchester City to win', odds: '1.50' },
            ],
            totalOdds: '1.50',
            link: '/bet/city-united'
        },
        {
            status: 'unsettled',
            match: 'Liverpool vs Arsenal',
            bets: [
                { name: 'Liverpool to win', odds: '1.80' },
            ],
            totalOdds: '1.80',
            link: '/bet/liverpool-arsenal'
        },
        {
            status: 'unsettled',
            match: 'Liverpool vs Arsenal',
            bets: [
                { name: 'Liverpool to win', odds: '1.80' },
            ],
            totalOdds: '1.80',
            link: '/bet/liverpool-arsenal'
        },
        {
            status: 'unsettled',
            match: 'Liverpool vs Arsenal',
            bets: [
                { name: 'Liverpool to win', odds: '1.80' },
            ],
            totalOdds: '1.80',
            link: '/bet/liverpool-arsenal'
        }
    ];

    return (
        <div className={styles.myBets}>
            <div className={styles.navButtons}>
                <Link to="/MyBets" className={styles.navButton}>Previous Bets</Link>
                <Link to="/MyBets" className={styles.navButton}>Current Bets</Link>
            </div>
            <main className={styles.mainContent}>
                <div className={styles.betsContainer}>
                    {bets.map((bet, index) => (
                        <BetItem key={index} {...bet} />
                    ))}
                </div>
            </main>
        </div>
    );
};

export default MyBets;
