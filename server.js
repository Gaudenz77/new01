const express = require('express');
const cors = require('cors'); // Import cors package
const app = express();
const port = 3002;

app.use(express.json()); // Middleware to parse JSON bodies
app.use(cors()); // Use CORS middleware to allow all origins (not recommended for production)

let items = [];

// Create route to handle POST requests for adding new items
app.post('/items', (req, res) => {
    const newItem = {
        id: items.length + 1,
        itemName: req.body.itemName,
        itemDescription: req.body.itemDescription
    };

    items.push(newItem);
    console.log('New item added:', newItem);
    res.status(201).json(newItem);
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});

app.get('/items', (req, res) => {
    res.json(items);
});
