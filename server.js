var webpack = require('webpack');
var webpackDevMiddleware = require('webpack-dev-middleware');
var webpackHotMiddleware = require('webpack-hot-middleware');
var config = require('./webpack.config.js');
var bodyParser = require("body-parser");
var app = new (require('express'))();
var port = 8080;

var compiler = webpack(config)
app.use(webpackDevMiddleware(compiler, { noInfo: true, publicPath: config.output.publicPath }))
app.use(webpackHotMiddleware(compiler));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

var cons = require('consolidate');

// view engine setup
app.engine('html', cons.swig)
//app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'html');

var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database('bookkeeping.db');

app.get(['/', '/reports-page', '/categories-page'], function(req, res) {
    res.render('index')
});

app.get("/categories", function(req, res) {
    db.all('SELECT * FROM category ORDER BY category.ts DESC', [], function (error, rows) {
        var categories = [];
        if (error) {
            console.log(error);
        } else {
            categories = rows
        }
        res.json(categories)
    });
});

app.post("/consumptions", function(req, res) {
    if (req.body.category_id && req.body.sum) {
        db.run('INSERT INTO consumption(category_id, sum) VALUES(?, ?)', [req.body.category_id, req.body.sum], function () {
            var lastId = this.lastID;
            db.get('SELECT consumption.id, category.name, consumption.sum, consumption.ts FROM consumption INNER JOIN category ON consumption.category_id = category.id WHERE consumption.id = ?', [lastId], function (error, rows) {
                if (error) {
                    console.log(error);
                }
                res.json(rows)
            });
        });
    }
    else {
        res.send(400);
    }
});

app.post("/categories", function(req, res) {
    if (req.body.name) {
        db.run('INSERT INTO category(name) VALUES(?)', [req.body.name], function () {
            var lastId = this.lastID;
            db.get('SELECT category.id, category.name, category.ts FROM category WHERE category.id = ?', [lastId], function (error, rows) {
                if (error) {
                    console.log(error);
                }
                res.json(rows)
            });
        });
    }
    else {
        res.send(400);
    }
});

app.get("/consumptions", function(req, res) {
    db.all('SELECT consumption.id, category.name, consumption.sum, consumption.ts FROM consumption INNER JOIN category ON consumption.category_id = category.id ORDER BY consumption.ts DESC LIMIT 20', [], function (error, rows) {
        var consumptions = [];
        if (error) {
            console.log(error);
        } else {
            consumptions = rows
        }
        res.json(consumptions)
    });
});

app.delete("/consumptions", function(req, res) {
    if (req.body.id) {
        db.run('DELETE FROM consumption WHERE id = ?', [req.body.id], function () {
            res.json({status: true});
        });
    }
    else {
        res.send(400);
    }
});

app.put("/consumptions", function(req, res) {
    if (req.body.sum && req.body.id) {
        db.run('UPDATE consumption SET sum = ? WHERE id = ?', [req.body.sum, req.body.id], function () {
            res.json({status: true});
        });
    }
    else {
        res.send(400);
    }
});

app.put("/categories", function(req, res) {
    if (req.body.name && req.body.id) {
        db.run('UPDATE category SET name = ? WHERE id = ?', [req.body.name, req.body.id], function () {
            res.json({status: true});
        });
    }
    else {
        res.send(400);
    }
});

app.delete("/categories", function(req, res) {
    if (req.body.id) {
        db.run('DELETE FROM category WHERE id = ?', [req.body.id], function () {
            res.json({status: true});
        });
    }
    else {
        res.send(400);
    }
});

app.get("/report1-data", function(req, res) {
    var reportData = {columns:[], rows: []};

    var columnsTmp = [];
    var rowsTmp = [];
    db.get("SELECT date('now', 'start of month') AS start_month, " +
        "date('now','start of month','+1 month','-1 day') AS end_month, " +
        "strftime('%m', 'now') as now_month, " +
        "strftime('%d', 'now') as now_day, " +
        "strftime('%d', date('now','start of month','+1 month','-1 day')) AS days_amount", [], function(error, dateRow) {
        db.all("SELECT strftime('%d.%m', cons.ts) AS date, " +
            "sum(cons.sum) AS sum, " +
            "cons.category_id AS cat_id, " +
            "cat.name AS cat_name " +
            "FROM consumption cons " +
            "INNER JOIN category cat ON cat.id = cons.category_id " +
            "WHERE cons.ts >= ? " +
            "AND cons.ts <= ? " +
            "GROUP BY date, cat_id ORDER BY date", [dateRow.start_month, dateRow.end_month], function (error, rows) {
            rows.map(function(item) {
                if (columnsTmp.indexOf(item.cat_id) === -1) {
                    reportData.columns.push({label: item.cat_name, type: 'number'});
                    columnsTmp.push(item.cat_id);
                }
            });

            var day = 1;
            while (day <= dateRow.days_amount) {
                if (day > dateRow.now_day) {
                    break;
                }
                var rowTmp = Array.apply(null, Array(columnsTmp.length + 1)).map(Number.prototype.valueOf, 0);
                rowTmp[0] = ("0" + day).slice(-2) + '.' + ("0" + dateRow.now_month).slice(-2);
                rowsTmp.push(rowTmp);
                day++;
            }

            rowsTmp.map(function(rowTmp) {
                rows.map(function(item) {
                    if (item.date == rowTmp[0]) {
                        var columnIndex = columnsTmp.indexOf(item.cat_id);
                        rowTmp[columnIndex+1] = item.sum;
                    }
                });
            });
            reportData.rows = rowsTmp;

            res.json(reportData);
        });
    });




});

app.listen(port, function(error) {
    if (error) {
        console.error(error)
    } else {
        console.info("==> 🌎  Listening on port %s. Open up http://localhost:%s/ in your browser.", port, port)
    }
});
