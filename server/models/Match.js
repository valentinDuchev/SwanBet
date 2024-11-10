// models/Leg.js

const mongoose = require('mongoose');

// Define the sub-schema for individual odds items (e.g., a single bet option)
const oddsItemSchema = new mongoose.Schema({
    type: { type: String, required: true },  // Type of bet, e.g., "Cska", "Draw"
    odds: { type: String, required: true }, 
    betId: {type: Number, required: true},  // The odds value
    isTrue: { type: Boolean, default: false } // Whether this outcome is true
}, { _id: false }); // Avoid creating _id for each odds item

// Define separate schemas for each category of odds
const endResultSchema = new mongoose.Schema({
    items: [oddsItemSchema]
}, { _id: false });

const bttsSchema = new mongoose.Schema({
    items: [oddsItemSchema]
}, { _id: false });

const goalsSchema = new mongoose.Schema({
    items: [oddsItemSchema]
}, { _id: false });

const cornersSchema = new mongoose.Schema({
    items: [oddsItemSchema]
}, { _id: false });

const doubleChanceSchema = new mongoose.Schema({
    items: [oddsItemSchema]
}, { _id: false });

const correctScoreSchema  = new mongoose.Schema({
    items: [oddsItemSchema]
}, { _id: false });

const htFtSchema = new mongoose.Schema({
    items: [oddsItemSchema]
}, { _id: false });

const firstScoreSchema = new mongoose.Schema({
    items: [oddsItemSchema]
}, { _id: false });

const bttsOverSchema = new mongoose.Schema({
    items: [oddsItemSchema]
}, { _id: false });

// Define the Match schema, grouping odds categories within the odds field
const matchSchema = new mongoose.Schema({
    name: { type: String, required: true },
    date: { type: String, required: true },
    league: { type: String, required: true },
    odds: {
        endResult: endResultSchema, // Grouped odds for end result
        btts: bttsSchema,           // Grouped odds for both teams to score
        goals: goalsSchema,         // Grouped odds for goals
        corners: cornersSchema,    // Grouped odds for corners
        doubleChance: doubleChanceSchema, 
        correctScore: correctScoreSchema, 
        htft: htFtSchema, 
        firstScore: firstScoreSchema, 
        bttsOver: bttsOverSchema
    }
}, ); // No _id for matches if they are subdocuments of Leg

// Define the Leg schema, which contains an array of grouped matches
const legSchema = new mongoose.Schema({
    name: { type: String, required: true },
    matches: {
        type: [matchSchema], // Array of grouped Match subdocuments
        validate: [arrayLimit, '{PATH} exceeds the limit of 5 matches'] // Custom validator for max length
    }
});

// Helper function to limit the number of matches in a leg
function arrayLimit(val) {
    return val.length === 5; // Limit to exactly 5 matches per leg
}

// Create a model from the Leg schema
const Leg = mongoose.model('Leg', legSchema);

module.exports = Leg;
