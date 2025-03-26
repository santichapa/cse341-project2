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
router.get("/", async (req, res) => {
    try {
        await spells.getAllSpells(req, res);
    } catch (error) {
        res.status(500).json({ error: "Failed to retrieve spells" });
    }
});

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
router.get("/:id", async (req, res) => {
    try {
        await spells.getSpellById(req, res);
    } catch (error) {
        res.status(500).json({ error: "Failed to retrieve the spell" });
    }
});

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
router.post("/", async (req, res) => {
    try {
        await spells.createSpell(req, res);
    } catch (error) {
        res.status(500).json({ error: "Failed to create the spell" });
    }
});

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
router.put("/:id", async (req, res) => {
    try {
        await spells.updateSpell(req, res);
    } catch (error) {
        res.status(500).json({ error: "Failed to update the spell" });
    }
});

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
router.delete("/:id", async (req, res) => {
    try {
        await spells.deleteSpell(req, res);
    } catch (error) {
        res.status(500).json({ error: "Failed to delete the spell" });
    }
});

module.exports = router;
