const Spell = require('../models/spells');


// Get all spells
const getAllSpells = async (req, res) => {
    try {
        const spells = await Spell.find();
        res.status(200).json(spells);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching spells', error });
    }
};

// Get a spell by ID
const getSpellById = async (req, res) => {
    const { id } = req.params;
    try {
        const spell = await Spell.findById(id);
        if (!spell) {
            return res.status(404).json({ message: 'Spell not found' });
        }
        res.status(200).json(spell);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching spell', error });
    }
};

// Create a new spell
const createSpell = async (req, res) => {
    try {
        const newSpell = new Spell(req.body);
        await newSpell.validate(); // Validate against the schema
        await newSpell.save();
        res.status(201).json(newSpell);
    } catch (error) {
        if (error.name === 'ValidationError') {
            res.status(400).json({ message: 'Invalid spell data', error });
        } else {
            res.status(500).json({ message: 'Error creating spell', error });
        }
    }
};

// Update a spell
const updateSpell = async (req, res) => {
    const { id } = req.params;
    const updates = req.body;
    try {
        const spell = await Spell.findByIdAndUpdate(id, updates);
        if (!spell) {
            return res.status(404).json({ message: 'Spell not found' });
        }
        res.status(200).json(spell);
    } catch (error) {
        res.status(500).json({ message: 'Error updating spell', error });
    }
};

// Delete a spell
const deleteSpell = async (req, res) => {
    const { id } = req.params;
    try {
        const spell = await Spell.findByIdAndDelete(id);
        if (!spell) {
            return res.status(404).json({ message: 'Spell not found' });
        }
        res.status(200).json({ message: 'Spell successfully deleted' });
    } catch (error) {
        res.status(500).json({ message: 'Error deleting spell', error });
    }
};

module.exports = {
    getAllSpells,
    getSpellById,
    createSpell,
    updateSpell,
    deleteSpell
};