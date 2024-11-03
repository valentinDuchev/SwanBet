// src/components/BetItem.js
import React from 'react';
import styles from './BetItem.module.css';
import { Link } from 'react-router-dom';

const BetItem = ({ status, match, bets, totalOdds, link }) => {
    const statusIcon = {
        unsettled: '⚪',
        win: '✅',
        loss: '❌'
    };

    return (
        <Link to={link} className={styles.betItem}>
            <div className={`${styles.betStatus} ${styles[status]}`}>
                <span className={styles.icon}>{statusIcon[status]}</span>
            </div>
            <div className={styles.betInfo}>
                <div className={styles.match}>{match}</div>
                {bets.map((bet, index) => (
                    <div key={index} className={styles.betType}>
                        <div>{bet.name} <span className={styles.odds}>{bet.odds}</span></div>
                    </div>
                ))}
            </div>
            <div className={styles.totalOdds}>{totalOdds}</div>
        </Link>
    );
};

export default BetItem;
