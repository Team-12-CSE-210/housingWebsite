const express = require('express');
const imageRouter = express.Router();
const mongoose = require('mongoose');
const Image = require("../models/image");
const env = require("../env")

module.exports = (upload) => {
    const url = env.db_url;
    const connect = mongoose.createConnection(url, { useNewUrlParser: true, useUnifiedTopology: true });

    let gfs;

    connect.once('open', () => {
        // initialize stream
        console.log("open connection here");
        gfs = new mongoose.mongo.GridFSBucket(connect.db, {
            bucketName: "housing"
        });
    });

    imageRouter.route('/upload_property_image')
        .post(upload.array('file', 10), (req, res, next) => {
            for (let i = 0; i < req.files.length; i++) {
                let newImage = new Image({
                    propertyID: req.body.propertyID,
                    filename: req.files[i].filename,
                    fileId: req.files[i].id,
                    isPrimary: i == 0 ? true : false,
                });
                newImage.save()
            }
            res.status(200).json({
                success: true,
                files: req.files
            });
        });

    imageRouter.route('/fetch_property_primary_image')
        .get((req, res, next) => {
            console.log(req.body.propertyID);
            Image.find({ propertyID: req.body.propertyID })
                .then((image) => {
                    gfs.find({ filename: image[0].filename }).toArray((err, files) => {
                        if (!files[0] || files.length === 0) {
                            return res.status(200).json({
                                success: false,
                                message: 'No files available',
                            });
                        } else {
                            if (files[0].contentType === 'image/jpeg' || files[0].contentType === 'image/png' || files[0].contentType === 'image/svg+xml') {
                                gfs.openDownloadStreamByName(image[0].filename).pipe(res);
                            }
                            res.status(200).json({
                                success: true,
                                files,
                            });
                        }
                    });
                })
                .catch(err => res.status(500).json(err));
        });

    imageRouter.route('/fetch_property_image')
        .get((req, res, next) => {
            console.log("called");
            console.log(req.body.propertyID);
            Image.find({ propertyID: req.body.propertyID })
                .then((image) => {
                    if (image) {
                        res.status(200).json({
                            success: true,
                            image,
                        });
                    } else {
                        res.status(200).json({
                            success: false,
                            message: `Property doesn't exist or has no images`,
                        });
                    }
                    // gfs.find({filename : image[0].filename}).toArray((err, files) => {
                    //     console.log(files);
                    //     if (!files[0] || files.length === 0) {
                    //         return res.status(200).json({
                    //             success: false,
                    //             message: 'No files available',
                    //         });
                    //     } else {
                    //         res.status(200).json({
                    //             success: true,
                    //             files,
                    //         });
                    //     }
                    // });
                })
                .catch(err => res.status(500).json(err));
        });
    return imageRouter;
};


