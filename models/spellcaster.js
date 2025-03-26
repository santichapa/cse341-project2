const mongoose = require('mongoose');

const spellcasterSchema = new mongoose.Schema({
    name: { type: String, required: true },
    title: { type: String, required: true },
    specialty: { type: String, required: true },
    proficiencyLevel: { type: Number, required: true, min: 1 },
    backstory: { type: String, default: 'Unknown' }
});

module.exports = mongoose.model('Spellcaster', spellcasterSchema);
