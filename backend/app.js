var path = require('path');
var express = require('express');
const cors = require('cors');
const env = require('./env');
var createError = require('http-errors');
const methodOverride = require('method-override');
const crypto = require('crypto');
const multer = require('multer');
const GridFsStorage = require('multer-gridfs-storage');
const mongoose = require('mongoose');

var app = express();

var indexRouter = require('./routes/index');
var listingRouter = require('./routes/listing');
var userRouter = require('./routes/user');
var imageRouter = require('./routes/image');

app.use(cors());
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ limit: '50mb', extended: true }));
app.use(methodOverride('_method'));

const url = env.db_url;
const promise = mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });

// connect to the database
const connect = mongoose.connection;
connect.then(() => {
  console.log('Connected to database: GridApp');
}, (err) => console.log(err));

// create storage engine
const storage = new GridFsStorage({
    db: promise,
    file: (req, file) => {
        return new Promise((resolve, reject) => {
            crypto.randomBytes(16, (err, buf) => {
                if (err) {
                    return reject(err);
                }
                const filename = buf.toString('hex') + path.extname(file.originalname);
                const fileInfo = {
                    filename: filename,
                    bucketName: 'housing'
                };
                resolve(fileInfo);
            });
        });
    }
});

const upload = multer({ storage });

app.use('/', indexRouter);
app.use('/api/', listingRouter);
app.use('/api/', userRouter);
app.use('/api/', imageRouter(upload));

app.use(function(req, res, next) {
    next(createError(404));
  });
app.use(function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.status(err.status || 500);
    res.json({
        message: err.message,
        error: err
    });
});

const PORT = env.port;
app.listen(PORT, () => {
    console.log(`Housing backend service is running on port ${PORT}.`);
});

module.exports = app