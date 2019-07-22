import * as express from 'express';
import * as path from 'path';

var app = express();
app.set('view engine', 'pug')
app.set('views', path.join(__dirname, '/views'));
app.use('/static', express.static('public'))

app.get('*', (req, res) => {
    res.render('main.pug', {
        title: 'My first express app',
        loading: 'Loading...???'
    });
});

app.listen(9000);
