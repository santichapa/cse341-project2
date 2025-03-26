const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('Welcome to the home route!');
});

router.use('/api-docs', require('./swagger'));
router.use('/spellcasters', require('./spellcasters'));
router.use('/spells', require('./spells'));

module.exports = router;