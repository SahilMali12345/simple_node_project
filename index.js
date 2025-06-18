const express = require('express');
const connectDB = require('./config/db');

const app = express();

// Connect to database (or skip if using no-DB mode)
connectDB();

// Init Middleware
app.use(express.json());

// Define Routes
app.use('/', require('./routes/index'));
app.use('/api/url', require('./routes/url'));

// Set custom port
const PORT = process.env.PORT || 4567;

app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
