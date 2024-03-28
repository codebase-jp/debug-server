const express = require('express');
const app = express();
app.use(express.json());

app.all('*', (req, res) => {
    console.log(`Received ${req.method} request on ${req.path}`);
    console.log('Headers:', req.headers);
    console.log('Body:', req.body);
    res.send(`Received ${req.method} request!`);
});

const port = 3000;
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});