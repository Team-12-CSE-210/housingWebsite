var path = require('path');
var express = require('express');
const cors = require('cors');
var createError = require('http-errors');


var app = express();

app.use(cors());
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ limit: '50mb', extended: true }));
// catch 404 and forward to error handler
app.use(function (req, res, next) {
    next(createError(404));
});


//error handler
app.use(function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.status(err.status || 500);
    res.json({
        message: err.message,
        error: err
    });
});

const PORT = 8080;
app.listen(PORT, () => {
    console.log(`Housing backend service is running on port ${PORT}.`);
});

module.exports = app