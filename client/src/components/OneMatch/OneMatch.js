// src/OneMatch.js
import React, { useState, useEffect } from 'react';
import styles from './OneMatch.module.css';
import PropTypes from 'prop-types';
import BetSlipModal from './utils/BetSlipModal';
import BetSlipLargeScreen from './utils/BetSlipLargeScreen';

import { cannotCombineHelper } from './utils/cannotCombineHelper';
import { sameCombinedHelper } from './utils/sameCombinedHelper';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { BetConvertor } from './utils/BetConvertor';

const OneMatch = () => {
    const [isBetSlipVisible, setBetSlipVisible] = useState(false);
    const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth > 779);
    const [selectedBets, setSelectedBets] = useState([]); // Initialize as an empty array
    const [betsIds, setBetsIds] = useState({
        endresult: 0,
        goals: 0,
        btts: 0,
        correctScore: 0,
        doubleChance: 0,
        htFt: 0,
        firstScore: 0,
        corners: 0,
        bttsOver: 0,
    })
    const [blockPlaceBet, setBlockPlaceBet] = useState(false)
    const [matchDetails, setMatchDetails] = useState({})
    const [matchOdds, setMatchOdds] = useState([])

    console.log('yes')


    const toggleBetSlip = () => {
        setBetSlipVisible(!isBetSlipVisible);
    };

    const handleResize = () => {
        setIsLargeScreen(window.innerWidth > 779);
    };

    useEffect(() => {
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const { legId, matchId } = useParams()


    useEffect(() => {
        axios
            .get(`http://localhost:3030/api/legs/${legId}/${matchId}`)
            .then(res => {
                console.log(res)
                setMatchDetails(res.data.data)
                const newBet = BetConvertor(res.data.data.odds)
                console.log(newBet)
                setMatchOdds(...matchOdds, newBet)

                console.log(matchOdds)
            })
    }, [])

    



    const handleBetSelection = (bet) => {
        const isBetSelected = selectedBets.find(selectedBet => selectedBet.id === bet.id);

        console.log(bet
            
        )

        if (isBetSelected) {
            setSelectedBets(selectedBets.filter(selectedBet => selectedBet.id !== bet.id));

            if (bet.id >= 1 && bet.id <= 3) {
                if (betsIds.endresult > 0) {
                    setBetsIds(betsIds, betsIds.endresult--)
                }
                if (sameCombinedHelper(betsIds)) {
                    setBlockPlaceBet(false)
                } else {
                    setBlockPlaceBet(true)
                }

                if (cannotCombineHelper(betsIds)) {
                    setBlockPlaceBet(true)
                }
            } else if (bet.id >= 4 && bet.id <= 5) {
                if (betsIds.goals > 0) {
                    setBetsIds(betsIds, betsIds.goals--)
                }
                if (sameCombinedHelper(betsIds)) {
                    setBlockPlaceBet(false)
                } else {
                    setBlockPlaceBet(true)
                }

                if (betsIds.goals > 0 && betsIds.btts > 0) {
                    setBlockPlaceBet(true)
                }
                if (cannotCombineHelper(betsIds)) {
                    setBlockPlaceBet(true)
                }
            } else if (bet.id >= 6 && bet.id <= 7) {
                if (betsIds.btts > 0) {
                    setBetsIds(betsIds, betsIds.btts--)
                } if (sameCombinedHelper(betsIds)) {
                    setBlockPlaceBet(false)
                } else {
                    setBlockPlaceBet(true)
                }
                if (cannotCombineHelper(betsIds)
                ) {
                    setBlockPlaceBet(true)
                }
            } else if (bet.id >= 8 && bet.id <= 19) {
                if (betsIds.correctScore > 0) {
                    setBetsIds(betsIds, betsIds.correctScore--)
                } if (sameCombinedHelper(betsIds)) {
                    setBlockPlaceBet(false)
                } else {
                    setBlockPlaceBet(true)
                }

                if (cannotCombineHelper(betsIds)
                ) {
                    setBlockPlaceBet(true)
                }
            } else if (bet.id >= 20 && bet.id <= 25) {
                if (betsIds.htFt > 0) {
                    setBetsIds(betsIds, betsIds.htFt--)
                } if (sameCombinedHelper(betsIds)) {
                    setBlockPlaceBet(false)
                } else {
                    setBlockPlaceBet(true)
                }

                if (cannotCombineHelper(betsIds)
                ) {
                    setBlockPlaceBet(true)
                }
            } else if (bet.id >= 26 && bet.id <= 28) {
                if (betsIds.firstScore > 0) {
                    setBetsIds(betsIds, betsIds.firstScore--)
                } if (sameCombinedHelper(betsIds)) {
                    setBlockPlaceBet(false)
                } else {
                    setBlockPlaceBet(true)
                }

                if (cannotCombineHelper(betsIds)
                ) {
                    setBlockPlaceBet(true)
                }
            } else if (bet.id >= 29 && bet.id <= 31) {
                if (betsIds.doubleChance > 0) {
                    setBetsIds(betsIds, betsIds.doubleChance--)
                } if (sameCombinedHelper(betsIds)) {
                    setBlockPlaceBet(false)
                } else {
                    setBlockPlaceBet(true)
                }

                if (cannotCombineHelper(betsIds)
                ) {
                    setBlockPlaceBet(true)
                }
            } else if (bet.id >= 32 && bet.id <= 33) {
                if (betsIds.corners > 0) {
                    setBetsIds(betsIds, betsIds.corners--)
                } if (sameCombinedHelper(betsIds)) {
                    setBlockPlaceBet(false)
                } else {
                    setBlockPlaceBet(true)
                }

                if (cannotCombineHelper(betsIds)
                ) {
                    setBlockPlaceBet(true)
                }
            } else if (bet.id >= 34 && bet.id <= 35) {
                if (betsIds.bttsOver > 0) {
                    setBetsIds(betsIds, betsIds.bttsOver--)
                } if (sameCombinedHelper(betsIds)) {
                    setBlockPlaceBet(false)
                } else {
                    setBlockPlaceBet(true)
                }

                if (cannotCombineHelper(betsIds)
                ) {
                    setBlockPlaceBet(true)
                }
            }

            console.log(selectedBets)

        } else {
            setSelectedBets([...selectedBets, bet]);

            if (bet.id >= 1 && bet.id <= 3) {
                setBetsIds(betsIds, betsIds.endresult++)
                if (sameCombinedHelper(betsIds)) {
                    setBlockPlaceBet(false)
                } else {
                    setBlockPlaceBet(true)
                }

                if (cannotCombineHelper(betsIds)
                ) {
                    setBlockPlaceBet(true)
                }


            } else if (bet.id >= 4 && bet.id <= 5) {
                setBetsIds(betsIds, betsIds.goals++)
                if (sameCombinedHelper(betsIds)) {
                    setBlockPlaceBet(false)
                } else {
                    setBlockPlaceBet(true)
                }

                if (cannotCombineHelper(betsIds)
                ) {
                    setBlockPlaceBet(true)
                }

            } else if (bet.id >= 6 && bet.id <= 7) {
                setBetsIds(betsIds, betsIds.btts++)
                if (sameCombinedHelper(betsIds)) {
                    setBlockPlaceBet(false)
                } else {
                    setBlockPlaceBet(true)
                }

                if (cannotCombineHelper(betsIds)
                ) {
                    setBlockPlaceBet(true)
                }


            } else if (bet.id >= 8 && bet.id <= 19) {
                setBetsIds(betsIds, betsIds.correctScore++)
                if (sameCombinedHelper(betsIds)) {
                    setBlockPlaceBet(false)
                } else {
                    setBlockPlaceBet(true)
                }

                if (cannotCombineHelper(betsIds)
                ) {
                    setBlockPlaceBet(true)
                }

            } else if (bet.id >= 20 && bet.id <= 25) {
                setBetsIds(betsIds, betsIds.htFt++)
                if (sameCombinedHelper(betsIds)) {
                    setBlockPlaceBet(false)
                } else {
                    setBlockPlaceBet(true)
                }

                if (cannotCombineHelper(betsIds)
                ) {
                    setBlockPlaceBet(true)
                }

            } else if (bet.id >= 26 && bet.id <= 28) {
                setBetsIds(betsIds, betsIds.firstScore++)
                if (sameCombinedHelper(betsIds)) {
                    setBlockPlaceBet(false)
                } else {
                    setBlockPlaceBet(true)
                }

                if (cannotCombineHelper(betsIds)
                ) {
                    setBlockPlaceBet(true)
                }

            } else if (bet.id >= 29 && bet.id <= 31) {
                setBetsIds(betsIds, betsIds.doubleChance++)
                if (sameCombinedHelper(betsIds)) {
                    setBlockPlaceBet(false)
                } else {
                    setBlockPlaceBet(true)
                }

                if (cannotCombineHelper(betsIds)
                ) {
                    setBlockPlaceBet(true)
                }

            } else if (bet.id >= 32 && bet.id <= 33) {
                setBetsIds(betsIds, betsIds.corners++)
                if (sameCombinedHelper(betsIds)) {
                    setBlockPlaceBet(false)
                } else {
                    setBlockPlaceBet(true)
                }

                if (cannotCombineHelper(betsIds)
                ) {
                    setBlockPlaceBet(true)
                }

            } else if (bet.id >= 34 && bet.id <= 35) {
                setBetsIds(betsIds, betsIds.bttsOver++)
                if (sameCombinedHelper(betsIds)) {
                    setBlockPlaceBet(false)
                } else {
                    setBlockPlaceBet(true)
                }

                if (cannotCombineHelper(betsIds)
                ) {
                    setBlockPlaceBet(true)
                }

            }
        }
    };

    const removeBet = (itemToRemove) => {
        setSelectedBets((prevItems) => {

            if (itemToRemove.id >= 4 && itemToRemove.id <= 5) {
                if (betsIds.goals > 0) {
                    setBetsIds(betsIds, betsIds.goals--)
                    console.log(betsIds)
                }
                if (sameCombinedHelper(betsIds)) {
                    setBlockPlaceBet(false)
                } else {
                    setBlockPlaceBet(true)
                }
                if (cannotCombineHelper(betsIds)
                ) {
                    setBlockPlaceBet(true)
                }
            } else if (itemToRemove.id >= 1 && itemToRemove.id <= 3) {
                if (betsIds.endresult > 0) {
                    setBetsIds(betsIds, betsIds.endresult--)
                    console.log(betsIds.goals < 2)

                }
                if (sameCombinedHelper(betsIds)) {
                    setBlockPlaceBet(false)
                } else {
                    setBlockPlaceBet(true)
                }
                if (cannotCombineHelper(betsIds)
                ) {
                    setBlockPlaceBet(true)
                }
            } else if (itemToRemove.id >= 6 && itemToRemove.id <= 7) {
                if (betsIds.btts > 0) {
                    setBetsIds(betsIds, betsIds.btts--)
                    console.log(betsIds)

                }
                if (sameCombinedHelper(betsIds)) {
                    setBlockPlaceBet(false)
                    console.log('false', betsIds)
                } else {
                    setBlockPlaceBet(true)
                    console.log('true', betsIds)
                }

                if (cannotCombineHelper(betsIds)
                ) {
                    setBlockPlaceBet(true)
                }
            } else if (itemToRemove.id >= 8 && itemToRemove.id <= 19) {
                if (betsIds.correctScore > 0) {
                    setBetsIds(betsIds, betsIds.correctScore--)
                }
                if (sameCombinedHelper(betsIds)) {
                    setBlockPlaceBet(false)
                } else {
                    setBlockPlaceBet(true)
                }
                if (cannotCombineHelper(betsIds)
                ) {
                    setBlockPlaceBet(true)
                }
            } else if (itemToRemove.id >= 20 && itemToRemove.id <= 25) {
                if (betsIds.htFt > 0) {
                    setBetsIds(betsIds, betsIds.htFt--)

                }
                if (sameCombinedHelper(betsIds)) {
                    setBlockPlaceBet(false)
                } else {
                    setBlockPlaceBet(true)
                }
                if (cannotCombineHelper(betsIds)
                ) {
                    setBlockPlaceBet(true)
                }
            } else if (itemToRemove.id >= 26 && itemToRemove.id <= 28) {
                if (betsIds.firstScore > 0) {
                    setBetsIds(betsIds, betsIds.firstScore--)

                }
                if (sameCombinedHelper(betsIds)) {
                    setBlockPlaceBet(false)
                } else {
                    setBlockPlaceBet(true)
                }
                if (cannotCombineHelper(betsIds)
                ) {
                    setBlockPlaceBet(true)
                }
            } else if (itemToRemove.id >= 29 && itemToRemove.id <= 31) {
                if (betsIds.doubleChance > 0) {
                    setBetsIds(betsIds, betsIds.doubleChance--)

                }
                if (sameCombinedHelper(betsIds)) {
                    setBlockPlaceBet(false)
                } else {
                    setBlockPlaceBet(true)
                }
                if (cannotCombineHelper(betsIds)
                ) {
                    setBlockPlaceBet(true)
                }
            } else if (itemToRemove.id >= 32 && itemToRemove.id <= 33) {
                if (betsIds.corners > 0) {
                    setBetsIds(betsIds, betsIds.corners--)

                }
                if (sameCombinedHelper(betsIds)) {
                    setBlockPlaceBet(false)
                } else {
                    setBlockPlaceBet(true)
                }
                if (cannotCombineHelper(betsIds)) {
                    setBlockPlaceBet(true)
                }
            } else if (itemToRemove.id >= 34 && itemToRemove.id <= 35) {
                if (betsIds.bttsOver > 0) {
                    setBetsIds(betsIds, betsIds.bttsOver--)

                }
                if (sameCombinedHelper(betsIds)) {
                    setBlockPlaceBet(false)
                } else {
                    setBlockPlaceBet(true)
                }
                if (cannotCombineHelper(betsIds)
                ) {
                    setBlockPlaceBet(true)
                }
            }

            const index = prevItems.indexOf(itemToRemove);
            return index !== -1 ? [...prevItems.slice(0, index), ...prevItems.slice(index + 1)] : prevItems;

        });

    };

    const totalOdds = selectedBets.length > 0
        ? selectedBets.reduce((total, bet) => total * bet.odds, 1).toFixed(2)
        : 0;

    const betOptions = [
        {
            title: 'End Result',
            options: [
                { id: 1, name: 'CSKA to win', odds: 2.00 },
                { id: 2, name: 'Draw', odds: 3.60 },
                { id: 3, name: 'Levski to win', odds: 4.00 }
            ]
        },
        {
            title: 'Double chance',
            options: [
                { id: 29, name: '1X', odds: 1.90 },
                { id: 30, name: 'X2', odds: 1.70 },
                { id: 31, name: '12', odds: 1.70 }

            ]
        },
        {
            title: 'Total Goals',
            options: [
                { id: 4, name: 'Over 2.5 Goals', odds: 1.80 },
                { id: 5, name: 'Under 2.5 Goals', odds: 1.90 }
            ]
        },
        {
            title: 'Both Teams to Score',
            options: [
                { id: 6, name: 'Yes', odds: 1.90 },
                { id: 7, name: 'No', odds: 1.70 }
            ]
        },
        {
            title: 'Correct Score',
            options: [
                { id: 8, name: '1-0', odds: 8.00 },
                { id: 9, name: '2-0', odds: 11.00 },
                { id: 10, name: '2-1', odds: 9.00 },
                { id: 11, name: '0-1', odds: 12.00 },
                { id: 12, name: '0-2', odds: 13.00 },
                { id: 13, name: '1-2', odds: 13.00 },
                { id: 14, name: '0-0', odds: 13.00 },
                { id: 15, name: '1-1', odds: 13.00 },
                { id: 16, name: '2-2', odds: 13.00 },
                { id: 17, name: '3-3', odds: 13.00 },
                { id: 18, name: '1-3', odds: 13.00 },
                { id: 19, name: 'other', odds: 13.00 },

            ]
        },
        {
            title: 'Half-Time/Full-Time',
            options: [
                { id: 20, name: '1/1', odds: 3.00 },
                { id: 21, name: 'X/1', odds: 4.00 },
                { id: 22, name: '2/2', odds: 4.50 },
                { id: 23, name: 'X/2', odds: 5.50 },
                { id: 24, name: '1/2', odds: 6.00 },
                { id: 25, name: '2/1', odds: 7.00 }
            ]
        },
        {
            title: 'First Team to Score',
            options: [
                { id: 26, name: 'CSKA', odds: 2.20 },
                { id: 27, name: 'Levski', odds: 2.80 },
                { id: 28, name: 'No Goals', odds: 4.00 }
            ]
        },
        {
            title: 'Corners',
            options: [
                { id: 32, name: 'Over 9.5', odds: 2.20 },
                { id: 33, name: 'Under 9.5', odds: 2.80 },
            ]
        },
        {
            title: 'Both teams to score and over 2.5',
            options: [
                { id: 34, name: 'Yes', odds: 2.20 },
                { id: 35, name: 'No', odds: 2.80 },
            ]
        }
    ];

    return (
        <div className={styles.container}>
            {/* Match Info */}
            <div className={styles.matchSection}>
                <div className={styles.matchTitle}>
                    <p className={styles.league}>{matchDetails.league}</p>
                    <h1>{matchDetails.name}</h1>
                    <p className={styles.matchInfo}>{matchDetails.date}</p>
                </div>

                {/* Betting Options */}
                <div className={styles.bettingOptions}>
                    {matchOdds ? matchOdds.map((section) => (
                        <div key={section.title}>
                            <h2>{section.title}</h2>
                            <div className={styles.betRow}>

                                {section.options.map(option => (
                                        <div
                                            key={option.id}
                                            
                                            className={`${styles.betOption} ${selectedBets.some(thisBet => Number(thisBet.id) === Number(option.id)) ? styles.selected : ''}`}
                                            onClick={() => handleBetSelection(option)}
                                        >
                                            {option.name} <span className={styles.odds}>{Number(option.odds).toFixed(2)}</span>
                                        </div>
                                        
                                ))}


                            </div>


                        </div>
                    )) : ''}


                </div>

            </div>

            {/* Button to open Bet Slip on Mobile */}
            {!isLargeScreen && (
                <button className={styles.mobileBetSlipButton} onClick={toggleBetSlip}>
                    {isBetSlipVisible ? 'Close Bet Slip' : 'Open Bet Slip'}
                </button>
            )}



            <div>
                {/* Other content here */}
                <BetSlipModal
                    isBetSlipVisible={isBetSlipVisible}
                    selectedBets={selectedBets}
                    toggleBetSlip={toggleBetSlip}
                    removeBet={removeBet}
                    totalOdds={totalOdds}
                    blockPlaceBet={blockPlaceBet}
                />
            </div>

            {/* Always Visible Bet Slip on Larger Screens */}
            {isLargeScreen && (
                <div>
                    {/* Other content here */}
                    <BetSlipLargeScreen
                        selectedBets={selectedBets}
                        removeBet={removeBet}
                        blockPlaceBet={blockPlaceBet}
                    />
                </div>
            )}
        </div>
    );
};

// Define PropTypes for the component
OneMatch.propTypes = {
    selectedBets: PropTypes.array,
};

export default OneMatch;


{/* BetSlip Mddal - Only visible when on phone screen size */ }
{/* <div className={`${styles.modal} ${isBetSlipVisible ? styles.visible : ''}`} onClose={toggleBetSlip} selectedBets={selectedBets}>
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
                    <div className={styles.totalOdds}>Total Odds: <span>{totalOdds}</span></div>
                    <button className={styles.placeBetButton} style={blockPlaceBet ? { display: 'none' } : {}}>Place Bet</button>
                    {blockPlaceBet ? <span>You cannot place a bet</span> : ''}
                    <button className={styles.closeButton} onClick={toggleBetSlip}>Close</button>
                </div>
            </div> */}
