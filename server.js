var webpack = require('webpack')
var webpackDevMiddleware = require('webpack-dev-middleware')
var webpackHotMiddleware = require('webpack-hot-middleware')
var config = require('./webpack.config')

var app = new (require('express'))()
var port = 3000

var compiler = webpack(config)
app.use(webpackDevMiddleware(compiler, { noInfo: true, publicPath: config.output.publicPath }))
app.use(webpackHotMiddleware(compiler))

var cons = require('consolidate');

// view engine setup
app.engine('html', cons.swig)
//app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'html');

var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database('bookkeeping.db');
/*
db.serialize(function() {
    db.run("CREATE TABLE IF NOT EXISTS cunsumption (" +
        "id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL," +
        "category_id INTEGER NOT NULL," +
        "ts TIMESTAMP DEFAULT CURRENT_TIMESTAMP)");
    db.run("CREATE TABLE IF NOT EXISTS category (" +
        "id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL REFERENCES cunsumption(category_id) ON UPDATE CASCADE ON DELETE RESTRICT," +
        "name VARCHAR(255) NOT NULL," +
        "ts TIMESTAMP DEFAULT CURRENT_TIMESTAMP)");
    db.run("CREATE UNIQUE INDEX IF NOT EXISTS idx_name_uq ON category(name)");

    var stmt = db.prepare("INSERT OR IGNORE INTO category(name) VALUES (?)");
    var categories = [
        'Еда', 'Машина', 'Квартира', 'Путешествия', 'Одежда'
    ];
    for (var i = 0; i < categories.length; i++) {
        stmt.run(categories[i]);
    }
    stmt.finalize();

    db.each("SELECT name FROM category", function(err, row) {
        console.log(row.name);
    });
});

db.close();
*/
app.get("/", function(req, res) {
    res.render('index')
});

app.get("/categories", function(req, res) {
    db.all('SELECT * FROM category', [], function (error, rows) {
        var categories = []
        if (error) {
            console.log(error);
        } else {
            categories = rows
        }
        res.json(categories)
    });
});

app.listen(port, function(error) {
    if (error) {
        console.error(error)
    } else {
        console.info("==> 🌎  Listening on port %s. Open up http://localhost:%s/ in your browser.", port, port)
    }
});