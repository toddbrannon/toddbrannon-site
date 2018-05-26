const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

app.set("view engine", "ejs");
app.use(express.static(__dirname + '/assets'));

app.get('/', (req, res) => {
    res.render('landing');
});

app.get('/main', (req, res) => {
    res.render('main');
});

app.get('/portfolio', (req, res) => {
    res.render('portfolio');
});

app.get('/webdev', (req, res) => {
    res.render('webdev');
});

app.get('/excel', (req, res) => {
    res.render('excel');
});

app.listen(port);

//const port = (process.env.PORT, process.env.IP) || 5000;

//app.listen(port, () => {
//console.log(`TB server started on port ${port}`)
//});