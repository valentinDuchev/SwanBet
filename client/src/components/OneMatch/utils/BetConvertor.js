export const BetConvertor = (bets) => {
    return (
        [
            {
                title: 'End result',
                options: [
                    { id: bets.endResult.items[0].betId, name: bets.endResult.items[0].type, odds: bets.endResult.items[0].odds },
                    { id: bets.endResult.items[1].betId, name: bets.endResult.items[1].type, odds: bets.endResult.items[1].odds },
                    { id: bets.endResult.items[2].betId, name: bets.endResult.items[2].type, odds: bets.endResult.items[2].odds },
                ]
            },
            {
                title: 'Double Chance',
                options: [
                    { id: bets.doubleChance.items[0].betId, name: bets.doubleChance.items[0].type, odds: bets.doubleChance.items[0].odds },
                    { id: bets.doubleChance.items[1].betId, name: bets.doubleChance.items[1].type, odds: bets.doubleChance.items[1].odds }
                ]
            },
            {
                title: 'Total Goals',
                options: [
                    { id: bets.goals.items[0].betId, name: bets.goals.items[0].type, odds: bets.goals.items[0].odds },
                    { id: bets.goals.items[1].betId, name: bets.goals.items[1].type, odds: bets.goals.items[1].odds }
                ]
            },
            {
                title: 'Both teams to score',
                options: [
                    { id: bets.btts.items[0].betId, name: bets.btts.items[0].type, odds: bets.btts.items[0].odds },
                    { id: bets.btts.items[1].betId, name: bets.btts.items[1].type, odds: bets.btts.items[1].odds }
                ]
            },
            {
                title: 'Correct Score',
                options: [
                    { id: bets.correctScore.items[0].betId, name: bets.correctScore.items[0].type, odds: bets.correctScore.items[0].odds },
                    { id: bets.correctScore.items[1].betId, name: bets.correctScore.items[1].type, odds: bets.correctScore.items[1].odds },
                    { id: bets.correctScore.items[2].betId, name: bets.correctScore.items[2].type, odds: bets.correctScore.items[2].odds },
                    { id: bets.correctScore.items[3].betId, name: bets.correctScore.items[3].type, odds: bets.correctScore.items[3].odds },
                    { id: bets.correctScore.items[4].betId, name: bets.correctScore.items[4].type, odds: bets.correctScore.items[4].odds },
                    { id: bets.correctScore.items[5].betId, name: bets.correctScore.items[5].type, odds: bets.correctScore.items[5].odds },
                    { id: bets.correctScore.items[6].betId, name: bets.correctScore.items[6].type, odds: bets.correctScore.items[6].odds },
                    { id: bets.correctScore.items[7].betId, name: bets.correctScore.items[7].type, odds: bets.correctScore.items[7].odds }

                ]

            },
            {
                title: 'Half Time/Full Time',
                options: [
                    { id: bets.htft.items[0].betId, name: bets.htft.items[0].type, odds: bets.htft.items[0].odds },
                    { id: bets.htft.items[1].betId, name: bets.htft.items[1].type, odds: bets.htft.items[1].odds },

                ]
            },
            {
                title: 'Corners',
                options: [
                    { id: bets.corners.items[0].betId, name: bets.corners.items[0].type, odds: bets.corners.items[0].odds },
                    { id: bets.corners.items[1].betId, name: bets.corners.items[1].type, odds: bets.corners.items[1].odds },

                ]
            },
            {
                title: 'Both teams to score and over 2.5',
                options: [
                    { id: bets.bttsOver.items[0].betId, name: bets.bttsOver.items[0].type, odds: bets.bttsOver.items[0].odds },
                    { id: bets.bttsOver.items[1].betId, name: bets.bttsOver.items[1].type, odds: bets.bttsOver.items[1].odds },

                ]
            },

            {
                title: 'First Team to Score',
                options: [
                    { id: bets.firstScore.items[0].betId, name: bets.firstScore.items[0].type, odds: bets.firstScore.items[0].odds },
                    { id: bets.firstScore.items[1].betId, name: bets.firstScore.items[1].type, odds: bets.firstScore.items[1].odds },
                ]
            },

        ]
    );
};

/*
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

*/