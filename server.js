const express = require('express');
const dotenv = require('dotenv');
const app = express();
const PORT = process.env.PORT || 3000;
const mongodb = require('./config/db');

dotenv.config();
mongodb.connectDB();

app.use(express.json());

app.use('/', require('./routes/index'));
app.use('/api-docs', require('./routes/swagger'));
app.use('/spellcasters', require('./routes/spellcasters'));
app.use('/spells', require('./routes/spells'));

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

