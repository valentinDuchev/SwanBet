import React from 'react';
import styles from '../OneMatch.module.css'; // Assuming you have a CSS module for styling

const BetSlipLargeScreen = ({ selectedBets, removeBet, blockPlaceBet }) => {
    // Calculate the total odds by multiplying all bet odds
    const totalOdds = selectedBets.reduce((total, bet) => total * bet.odds, 1).toFixed(2);

    return (
        <div className={styles.betSlip}>
            <h2>Your Bet Slip</h2>
            
            {selectedBets.length > 0 ? (
                selectedBets.map(bet => (
                    <div key={bet.id} className={styles.selectedBet}>
                        {bet.name} - <span className={styles.odds}>{bet.odds}</span>
                        <button onClick={() => removeBet(bet)}>X</button>
                    </div>
                ))
            ) : (
                <p>No bets selected.</p>
            )}

            <div 
                className={styles.totalOdds} 
                style={blockPlaceBet ? { display: 'none' } : {}}
            >
                Total Odds: <span>{totalOdds}</span>
            </div>

            <button 
                className={styles.placeBetButton} 
                style={blockPlaceBet ? { display: 'none' } : {}}
            >
                Place Bet
            </button>

            {blockPlaceBet && <span>Some of the selections cannot be combined</span>}
        </div>
    );
};

export default BetSlipLargeScreen;
