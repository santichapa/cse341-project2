const Spellcaster = require('../models/spellcaster');

// Get all spellcasters
const getAllSpellcasters = async (req, res) => {
    try {
        const spellcasters = await Spellcaster.find();
        res.status(200).json(spellcasters);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching spellcasters', error });
    }
};

// Get a spellcaster by ID
const getSpellcasterById = async (req, res) => {
    const { id } = req.params;
    try {
        const spellcaster = await Spellcaster.findById(id);
        if (!spellcaster) {
            return res.status(404).json({ message: 'Spellcaster not found' });
        }
        res.status(200).json(spellcaster);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching spellcaster', error });
    }
};

// Create a new spellcaster
const createSpellcaster = async (req, res) => {
    try {
        const newSpellcaster = new Spellcaster(req.body);
        await newSpellcaster.validate(); // Validate against the schema
        await newSpellcaster.save();
        res.status(201).json(newSpellcaster);
    } catch (error) {
        if (error.name === 'ValidationError') {
            res.status(400).json({ message: 'Invalid spellcaster data', error });
        } else {
            res.status(500).json({ message: 'Error creating spellcaster', error });
        }
    }
};

// Update a spellcaster
const updateSpellcaster = async (req, res) => {
    const { id } = req.params;
    const updates = req.body;
    try {
        const spellcaster = await Spellcaster.findByIdAndUpdate(id, updates);
        if (!spellcaster) {
            return res.status(404).json({ message: 'Spellcaster not found' });
        }
        res.status(200).json(spellcaster);
    } catch (error) {
        res.status(500).json({ message: 'Error updating spellcaster', error });
    }
};

// Delete a spellcaster
const deleteSpellcaster = async (req, res) => {
    const { id } = req.params;
    try {
        const spellcaster = await Spellcaster.findByIdAndDelete(id);
        if (!spellcaster) {
            return res.status(404).json({ message: 'Spellcaster not found' });
        }
        res.status(200).json({ message: 'Spellcaster successfully deleted' });
    } catch (error) {
        res.status(500).json({ message: 'Error deleting spellcaster', error });
    }
};

module.exports = {
    getAllSpellcasters,
    getSpellcasterById,
    createSpellcaster,
    updateSpellcaster,
    deleteSpellcaster
};
