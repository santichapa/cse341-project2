const { body, validationResult } = require("express-validator");

// Helper function to handle validation errors
const handleValidationErrors = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  next();
};

// Validation rules for spellcasters
const validateSpellcaster = [
  body("name").notEmpty().withMessage("Name is required"),
  body("title").notEmpty().withMessage("Title is required"),
  body("specialty").notEmpty().withMessage("Specialty is required"),
  body("proficiencyLevel")
    .isInt({ min: 1 })
    .withMessage(
      "Proficiency level must be an integer greater than or equal to 1"
    ),
  body("backstory")
    .optional()
    .isString()
    .withMessage("Backstory must be a string"),
  handleValidationErrors, // Add error handling at the end
];

// Validation rules for spells
const validateSpell = [
  body("name").notEmpty().withMessage("Name is required"),
  body("manaCost")
    .isInt({ min: 0 })
    .withMessage("Mana cost must be a non-negative integer"),
  body("school").notEmpty().withMessage("School is required"),
  body("proficiencyLevel")
    .isInt({ min: 0 })
    .withMessage("Proficiency level must be a non-negative integer"),
  body("range")
    .isInt({ min: 0 })
    .withMessage("Range must be a non-negative integer"),
  body("cooldown")
    .isInt({ min: 0 })
    .withMessage("Cooldown must be a non-negative integer"),
  body("effects")
    .optional()
    .isObject()
    .withMessage("Effects must be an object"),
  body("description").notEmpty().withMessage("Description is required"),
  body("tags")
    .isArray({ min: 1 })
    .withMessage("Tags must be a non-empty array of strings"),
  handleValidationErrors, // Add error handling at the end
];

module.exports = {
  validateSpellcaster,
  validateSpell,
};
