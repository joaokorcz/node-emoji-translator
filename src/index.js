const express = require('express');
const path = require('path');

const TranslatorRoutes = require("./routes/TranslatorRoutes");

const app = express();

app.use(express.json());

app.use(TranslatorRoutes);

app.use(express.static(path.join(__dirname ,'public')));
app.set('views', path.join(__dirname, 'public'));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

app.use('/', (request, response) => {
    response.render('index.html');
});

app.listen(3333);