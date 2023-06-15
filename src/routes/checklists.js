const express = require('express');

const router = express.Router();

router.get('/', async (req, res) => {
    console.log("Passou por aqui no checklists")
    console.log(req.body)
    res.send({message: "Passou por aqui no checklists"})
});

router.post('/', (req, res) => {
    console.log(req.body);
    res.status(200).send(req.body)
})

router.get('/:id', (req, res) => {
    console.log(req.params.id);
    res.send(`ID: ${req.params.id}`)
})


module.exports = router;