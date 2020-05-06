const dotenv = require('dotenv');
dotenv.config();

const express = require('express');
const PORT = process.env.PORT || 3000;
const cors = require('cors');

const app = express();
const locationData = require('./data/geoData.json');

app.use(cors());

app.get('/', (req, res) => {
    res.json({ hello: 'world' });
 
app.listen(PORT, () => console.log(`running on port ${PORT}`));

