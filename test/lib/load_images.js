'use strict';

var fs = require('fs');
var PNG = require('pngjs').PNG;

module.exports = function (file1, file2, done) {
    var images = [];

    function loaded(img) {
        images.push(img);

        if (images.length === 2) {
            done(images)
        }
    }

    function load(filePath, done) {
        fs.createReadStream(filePath)
            .pipe(new PNG())
            .on('parsed', function () {
                done({
                    data: this.data,
                    width: this.width,
                    height: this.height,
                    channels: 4
                });
            });
    }

    load(file1, loaded);
    load(file2, loaded);
};