const express = require('express');
const { createLeg, getAllLegs, getOneLeg, getOneMatch } = require('../controllers/matchController');
const router = express.Router();

router.post('/legs', async (req, res) => {
    try {
        // Validate the incoming leg data
        const reqData = req.body;

        // Validate that the 'matches' array contains exactly 5 matches
        if (!reqData.matches || reqData.matches.length !== 5) {
            throw new Error('A leg must contain exactly 5 matches.');
        }

        // Optionally validate other fields, like the name of the leg
        if (!reqData.name || reqData.name.trim() === "") {
            throw new Error('The name of the leg is required.');
        }

        // If validations pass, proceed to create the leg
        const leg = await createLeg(reqData); // Call the controller function to create the leg

        // Send a success response with the created leg data
        return res.status(201).json({
            message: "Leg created successfully",
            leg
        });

    } catch (err) {
        // Handle errors and send a failure response
        res.status(400).json({
            message: "An error has occurred",
            error: err.message
        });
        console.log(err); // Optionally log the error for debugging
    }
});

router.get('/legs', async (req, res) => {
    const result = await getAllLegs()
    res.status(200).json({ result, message: 'success' })
})

router.get('/legs/:id', async (req, res) => {
    const id = req.params.id
    const data = await getOneLeg(id)



    res.status(200).json({ message: "Successfully opened details", data });  //isauthor

})

router.get('/legs/:legId/:matchId', async (req, res) => {
    const legId = req.params.legId;
    const matchId = req.params.matchId;

    const data = await getOneMatch(legId, matchId);
    res.status(200).json({ message: "Successfully opened details", data });  //isauthor

})

module.exports = router;
