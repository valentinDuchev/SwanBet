const User = require('../models/User');
const { compare, hash } = require('bcrypt');


async function register(reqData) {

    const existing = await User.findOne({email: reqData.email});
    const existingUsername = await User.findOne({username: reqData.username})

    if (existing) {
        throw new Error ('Email is taken.')
    }

    console.log(reqData)

    const hashedPassword = await hash(reqData.password, 10);

    const user = new User({
        firstName: reqData.firstName,
        lastName: reqData.lastName,
        hashedPassword,
        // gender: reqData.gender,
        email: reqData.email,
        username: reqData.username, 
        phone: reqData.phone

        
    });


    await user.save();

    return user;
};


module.exports = {
    register, 
}