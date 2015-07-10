'use strict';

var assert = require('assert');
var load = require('./lib/load_images');
var SSIM = require('../index');

describe('SSIM module', function(){
    it('should compare different images', function(done) {
        load('./test/images/wheel.png', './test/images/wheel-pixelized.png', function(images){
            var ssim = SSIM.compare(images[0], images[1]);
            assert(ssim.ssim > 0);
            assert(ssim.ssim < 1);
            done();
        });
    });

    it('should compare same images', function(done) {
        load('./test/images/wheel-pixelized.png', './test/images/wheel-pixelized.png', function(images){
            var ssim = SSIM.compare(images[0], images[1]);
            assert(ssim.ssim === 1);
            done();
        });
    });
});
