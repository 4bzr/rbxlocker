const express = require('express');
const app = express();
const port = 4055;

let currentScript = '';

app.use(express.text());
app.use(express.static('public'));

app.post('/cscript', (req, res) => {
    currentScript = req.body;
    console.log('New script received:', currentScript);
    res.send('Script updated successfully');
});

app.get('/cscript', (req, res) => {
    res.send(currentScript);
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});