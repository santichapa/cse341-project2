const express = require('express');
const router = express.Router();
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('../swagger-output.json'); // Adjust path if needed


router.use('/', (req, res, next) => {
    const host = req.get('host'); // Get the host from the incoming request
    swaggerDocument.host = host; // Dynamically set the host in the Swagger document
    console.log(`Swagger host set to: ${host}`);
    next();
});
router.use('/', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

module.exports = router;