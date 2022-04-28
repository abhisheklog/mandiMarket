const jwt = require('jsonwebtoken');
const Mandi = require("./userModel")

const protect = (req, res, next) => {
    const headers = req.headers[`authorization`];
    const token = headers.split(" ")[1];
    if(!token) {
        res.status(404).json({message: "no token found"})
    }
    jwt.verify(String(token), 'secret123', (err, user) => {
        if(err) {
            res.status(400).json({message: "invalid token"})
        }
        req.id = user.id;
        console.log(user.id);
    })
    next();
}

const getUser = async(req, res, next) => {
    const userId = req.id;
    let displayUser;
    try {
        displayUser = await Mandi.findById(userId);
    } catch (error) {
        console.log("error")
    }
}


module.exports = {protect, getUser};