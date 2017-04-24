const express = require('express');
const app = express();
const PORT = 3001;

app.get('/', function(req, res) {
    res.send('React & Redux');
});

app.listen(PORT, function() {
    console.log(`Express server running on http://localhost:${PORT}`);
});
