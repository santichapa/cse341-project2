const express = require('express');
const router = express.Router();

router.use('/api-docs', require('./swagger'));
router.use('/spellcasters', require('./spellcasters'));
router.use('/spells', require('./spells'));

router.get('/', (req, res) => {
    res.send('Hello, World! Welcome to Project 2: Spells API');
});

module.exports = router;