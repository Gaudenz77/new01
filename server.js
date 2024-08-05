const express = require('express');
const app = express();
const port = 3001; // Changed port number

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

let items = [];

// Route to handle POST requests for adding new items
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
