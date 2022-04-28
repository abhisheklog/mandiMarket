const express = require('express');
const Mandi = require('./userModel');
const router = express.Router();
const jwt = require('jsonwebtoken');

router.post('/reports', async(req, res) => {

    try {
        const market = new Mandi({
            userID: req.body.userID,
            marketID: req.body.marketID,
            marketName: req.body.marketName,
            cmdtyID: req.body.cmdtyID,
            marketType: req.body.marketType,
            cmdtyName: req.body.cmdtyName,
            priceUnit: req.body.priceUnit,
            convFctr: req.body.convFctr,
            price: req.body.price
    
        })    
        
      
        const agent = await market.save()
        const token = jwt.sign({id:agent._id}, 'secret123')
        res.status(201).json({
            status: "success",
            reportID: agent._id
        })
        }
        catch (error) {
            res.json(error)
        console.log('report error')
    }
})

router.get('/reportsID/:id', async(req, res) => {
    try {
        const user = await Mandi.findById(req.params.id)
        console.log(user)
        res.json(user)
    } catch (error) {
        console.log('error')
    }
})

router.get('/reports', async(req, res) => {
    try {
        const user = await Mandi.find()
        res.json(user)
    } catch (error) {
        console.log('error')
    }
})




module.exports = router;