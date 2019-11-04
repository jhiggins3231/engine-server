const router = require('express').Router();
const Wishlist = require('../db').import('../models/wishlist');

router.get('/', (req, res) => {
    Wishlist.findOne({
        where: {
            owner: req.user.id
        }
    })
    .then(wishlist => res.status(200).json(wishlist))
    .catch(err => res.status(500).json({
        error: err
    }))
})


router.post('/', (req, res) => {
    const wishlistFromRequest = {
        itemName: req.body.itemName,
        price: req.body.price,
        location: req.body.location,
        quantity: req.body.quantity,
        motorName: req.body.motorName,
        owner: req.user.id
    }
    Wishlist.create(wishlistFromRequest)
    .then(wishlist => res.status(200).json(wishlist))
    .catch(err => res.json({
        error: err
    }));
})


router.get('/:motorName', (req, res) => {
    Wishlist.findAll({ where: { motorName: req.params.motorName}})
    .then(wishlist => res.status(200).json(wishlist))
    .catch(err => res.status(500).json({ error: err}))
})

router.put('/:id', (req, res) => {
    Wishlist.update(req.body, { where: { id: req.params.id }})
    .then(wishlist => res.status(200).json(wishlist))
    .catch(err => res.json({
        error: err
    }))
})

router.delete('/:id', (req, res) => {
    Wishlist.destroy({
        where: {
            id: req.params.id
        }
    })
    .then(wishlist => res.status(200).json(wishlist))
    .catch(err => res.json({
        error: err
    }))
})

module.exports = router