const express = require('express');

const router = new express.Router();

router.get('/users', (req, res) => {
    res.status(200).json([
        { name: 'user1' },
        { name: 'user2' }
    ]);
});

router.get('/users/:id', (req, res) => {
    console.log(req.params.id);
    const user = { name: 'user1'};
    res.status(200).send(user);
});

router.post('/users', (req, res) => {
    res.status(201).send();    
});

router.patch('/users/:id', (req, res) => {
    console.log(req.params.id);
    res.status(202).send();
})

router.delete('/users/:id', (req, res) => {
    console.log(req.params.id);
    res.status(202).send();
})

module.exports = router;
