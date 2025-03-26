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
router.get("/", async (req, res) => {
    try {
        await casters.getAllSpellcasters(req, res);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal Server Error" });
    }
});

/**
 * @swagger
 * /spellcasters:
 *   get:
 *     summary: Get spellcaster by ID
 *     responses:
 *       200:
 *         description: A spellcaster
 */
router.get("/:id", async (req, res) => {
    try {
        await casters.getSpellcasterById(req, res);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal Server Error" });
    }
});

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
router.post("/", async (req, res) => {
    try {
        await casters.createSpellcaster(req, res);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal Server Error" });
    }
});

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
router.put("/:id", async (req, res) => {
    try {
        await casters.updateSpellcaster(req, res);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal Server Error" });
    }
});

/**
 * @swagger
 * /spellcasters:
 *   delete:
 *     summary: Delete spellcaster by ID
 *     responses:
 *       200:
 *         description: Spellcaster deleted successfully
 */
router.delete("/:id", async (req, res) => {
    try {
        await casters.deleteSpellcaster(req, res);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal Server Error" });
    }
});

module.exports = router;
