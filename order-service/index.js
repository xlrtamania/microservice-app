const express = require('express');
const app = express();
const port = 3001;

app.use(express.json());

let orders = [
    { id: 1, product: 'Laptop', quantity: 1 },
    { id: 2, product: 'Phone', quantity: 2 }
];

app.get('/orders', (req, res) => {
    res.json(orders);
});

app.post('/orders', (req, res) => {
    const newOrder = req.body;
    orders.push(newOrder);
    res.status(201).json(newOrder);
});

app.listen(port, () => {
    console.log(`Order service is running on port ${port}`);
});
