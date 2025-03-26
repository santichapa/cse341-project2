const express = require("express");
const router = express.Router();
const casters = require("../controllers/spellcasters");

/**
 * @swagger
 * /spellcasters:
 *   get:
 *     summary: Get all spellcasters
 *     responses:
 *       200:
 *         description: A list of spellcasters
 */
router.get("/", casters.getAllSpellcasters);

/**
 * @swagger
 * /spellcasters:
 *   get:
 *     summary: Get spellcaster by ID
 *     responses:
 *       200:
 *         description: A spellcaster
 */
router.get("/:id", casters.getSpellcasterById);

/**
 * @swagger
 * /spellcasters:
 *   post:
 *     summary: Create a new spellcaster
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               title:
 *                 type: string
 *               specialty:
 *                 type: string
 *               proficiencyLevel:
 *                 type: number
 *               backstory:
 *                 type: string
 *     responses:
 *       201:
 *         description: Spellcaster created successfully
 */
router.post("/", casters.createSpellcaster);

/**
 * @swagger
 * /spellcasters:
 *   put:
 *     summary: Update spellcaster by ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               title:
 *                 type: string
 *               specialty:
 *                 type: string
 *               proficiencyLevel:
 *                 type: number
 *               backstory:
 *                 type: string
 *     responses:
 *       200:
 *         description: Spellcaster updated successfully
 */
router.put("/:id", casters.updateSpellcaster);

/**
 * @swagger
 * /spellcasters:
 *   delete:
 *     summary: Delete spellcaster by ID
 *     responses:
 *       200:
 *         description: Spellcaster deleted successfully
 */
router.delete("/:id", casters.deleteSpellcaster);

module.exports = router;
