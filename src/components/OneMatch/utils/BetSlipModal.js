import React from 'react';
import styles from '../OneMatch.module.css'; // Assuming you have a separate CSS module for styling

const BetSlipModal = ({ 
    isBetSlipVisible, 
    selectedBets, 
    toggleBetSlip, 
    removeBet, 
    totalOdds, 
    blockPlaceBet 
}) => {
    return (
        <div 
            className={`${styles.modal} ${isBetSlipVisible ? styles.visible : ''}`} 
            onClose={toggleBetSlip}
        >
            <div className={styles.modalContent}>
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
                <div className={styles.totalOdds}>
                    Total Odds: <span>{totalOdds}</span>
                </div>
                <button 
                    className={styles.placeBetButton} 
                    style={blockPlaceBet ? { display: 'none' } : {}}
                >
                    Place Bet
                </button>
                {blockPlaceBet && <span>You cannot place a bet</span>}
                <button className={styles.closeButton} onClick={toggleBetSlip}>
                    Close
                </button>
            </div>
        </div>
    );
};

export default BetSlipModal;
