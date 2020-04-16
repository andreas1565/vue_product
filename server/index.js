require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');
// Database
const { dbCheck } = require('./config/database');
dbCheck();

app.use(cors({ credentials: true }));
app.use('/file-bucket', express.static('public'));
require('./config/parser')(app);
require('./config/morgan')(app);
// routes
require('./routes/index')(app);

require('./server/server')(app);
