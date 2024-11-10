const Leg = require('../models/Match');

// Function to create a new leg document
async function createLeg(reqData) {
    // Validate the number of matches
    if (!reqData.matches || reqData.matches.length !== 5) {
        throw new Error('A leg must contain exactly 5 matches.');
    }

    // Create a new Leg document using the request data
    const leg = new Leg({
        name: reqData.name,
        matches: reqData.matches.map(match => ({
            name: match.name,
            date: match.date,
            league: match.league,
            odds: {
                endResult: { items: match.odds.endResult.items },
                btts: { items: match.odds.btts.items },
                goals: { items: match.odds.goals.items },
                corners: { items: match.odds.corners.items },
                doubleChance: { items: match.odds.doubleChance.items },
                correctScore: { items: match.odds.correctScore.items },
                htft: { items: match.odds.htft.items },
                firstScore: { items: match.odds.firstScore.items },
                bttsOver: { items: match.odds.bttsOver.items }
            }
        }))
    });

    // Save the new leg document to the database
    await leg.save();

    return leg;
}

async function getAllLegs() {
    const result = await Leg.find({});
    return result
}

async function getOneLeg(_id) {
    const result = await Leg.findOne({ _id })
    return result;
}

async function getOneMatch(legId, matchId) {
    const leg = await Leg.findOne({ _id: legId });

    const match = leg.matches.find(match => match._id.toString() === matchId);

    if (!match) {
        throw new Error("Match not found");
    }

    return match;
}



// todo - getoneleg, getonematch from a leg, updatelegbyid, updatematchbyid
module.exports = {
    createLeg,
    getAllLegs,
    getOneLeg, 
    getOneMatch
};
