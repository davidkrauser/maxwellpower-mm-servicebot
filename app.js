// app.js
const express = require('express');
require('dotenv').config();

const performActionRoute = require('./routes/performAction');
const listActionsRoute = require('./routes/listActions');

const app = express();
const PORT = process.env.PORT || 3000;

// Use etags to avoid updating actions when unnecessary
app.enable('etag');

// Middleware to parse incoming request bodies
app.use(express.json());

// Define routes
app.use('/perform-action', performActionRoute);
app.use('/list-actions', listActionsRoute);

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

