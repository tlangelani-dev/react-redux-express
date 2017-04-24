const express = require('express');
const app = express();
const PORT = 3001;

app.use('/static', express.static(__dirname + '/public'));
app.set('view engine', 'pug');
app.set('views', __dirname + '/views');

app.get('/', function(req, res) {
    res.render('index');
});

app.listen(PORT, function() {
    console.log(`Express server running on http://localhost:${PORT}`);
});
