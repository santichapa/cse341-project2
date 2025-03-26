const express = require("express");
const router = express.Router();
const spells = require("../controllers/spells");

/**
 * @swagger
 * /spells:
 *   get:
 *     summary: Retrieve all spells
 *     responses:
 *       200:
 *         description: A list of spells
 */
router.get("/", spells.getAllSpells);

/**
 * @swagger
 * /spells/{id}:
 *   get:
 *     summary: Retrieve a spell by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The spell ID
 *     responses:
 *       200:
 *         description: A spell object
 */
router.get("/:id", spells.getSpellById);

/**
 * @swagger
 * /spells:
 *   post:
 *     summary: Create a new spell
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               description:
 *                 type: string
 *               manaCost:
 *                 type: number
 *               element:
 *                 type: string
 *     responses:
 *       201:
 *         description: Spell created successfully
 */
router.post("/", spells.createSpell);

/**
 * @swagger
 * /spells/{id}:
 *   put:
 *     summary: Update a spell by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The spell ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               description:
 *                 type: string
 *               manaCost:
 *                 type: number
 *               element:
 *                 type: string
 *     responses:
 *       200:
 *         description: Spell updated successfully
 */
router.put("/:id", spells.updateSpell);

/**
 * @swagger
 * /spells/{id}:
 *   delete:
 *     summary: Delete a spell by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The spell ID
 *     responses:
 *       200:
 *         description: Spell deleted successfully
 */
router.delete("/:id", spells.deleteSpell);

module.exports = router;
