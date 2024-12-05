// routes/performAction.js
const express = require('express');
const router = express.Router();

router.post('/', async (req, res) => {
    const { action } = req.body;

    if (!action) {
        return res.json({
            response_type: 'ephemeral',
            text: 'Error: no action provided.',
        });
    }

    return res.json({
        response_type: 'in_channel',
        text: `Performed action: ${action}`,
    });
});

module.exports = router;

