const express = require('express');
const passport = require('passport');
const router = express.Router();

router.use('/api-docs', require('./swagger'));
router.use('/spellcasters', require('./spellcasters'));
router.use('/spells', require('./spells'));

router.use('/login', passport.authenticate('github', { session: false }), (req, res) => {});
router.use('/logout', (req, res) => {
    req.logout((err) => {
        if (err) {
            return res.status(500).json({ error: "Failed to log out" });
        }
        req.session.destroy((err) => {
            if (err) {
                return res.status(500).json({ error: "Failed to destroy session" });
            }
            res.redirect('/');
        });
    });
});

// router.get('/', (req, res) => {
//     res.send('Hello, World! Welcome to Project 2: Spells API');
// });

module.exports = router;