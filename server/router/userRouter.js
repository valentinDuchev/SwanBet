const { register  } = require('../controllers/userController');
// const { generateAccessToken, isGuest, isUser, parseJwt } = require('../middlewares/auth');

const router = require('express').Router();


router.post('/users/register', async (req, res) => {


    try {
        if (req.body.password != req.body.rePass) {
            throw new Error('Passwords do not match');
        }

        if (req.body.password.length < 8) {
            throw new Error('Password must be at least 3 characters long')
        }

        const reqData = {
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            password: req.body.password,
            // gender: req.body.gender,
            email: req.body.email,
            username: req.body.username, 
            phone: req.body.phone
        }


        const user = await register(reqData);

        // const token = generateAccessToken(req.body.email, user.firstName, user.lastName); //user.gender


        return res.cookie("access_token", token, {
            httpOnly: true,
            // secure: process.env.NODE_ENV === "production"
        })

            .status(200)
            .json({ message: "Registered in Successfully", user }); //add token

    } catch (err) {
        res.json({ message: "An error has occured", error: err.message })
        console.log(err)
    }

});

router.get('/users/register'), (req, res) => {
    console.log('not here')
    try {
        console.log('here')
        return res.json({message: 'Success! '})
    } catch (err) {
        res.json({ message: "An error has occurred", error: err.message })
        console.log(err)
    }
};

router.get('/yes', (req, res) => {
    res.send('Hello, world!');
});

module.exports = router;