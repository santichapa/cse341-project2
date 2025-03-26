const mongoose = require('mongoose');

const spellSchema = new mongoose.Schema({
    name: { type: String, required: true },
    manaCost: { type: Number, required: true, min: 0 },
    school: { type: String, required: true },
    proficiencyLevel: { type: Number, required: true, min: 0 },
    range: { type: Number, required: true, min: 0 },
    cooldown: { type: Number, required: true, min: 0 },
    effects: {
        damage: { type: Number, required: false, default: 0, min: 0 },
        damageOverTime: { type: Number, required: false, default: 0, min: 0 },
        heal: { type: Number, required: false, default: 0, min: 0 },
        duration: { type: Number, required: false, default: 0, min: 0 },
        areaOfEffectRadius: { type: Number, required: false, default: 0, min: 0 },
        knockback: { type: Boolean, required: false, default: false },
        stun: { type: Boolean, required: false, default: false },
    },
    description: { type: String, required: true },
    tags: { type: [String], required: true, index: true }
});

module.exports = mongoose.model('Spell', spellSchema);
