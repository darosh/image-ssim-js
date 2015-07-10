module.exports = function (gulp, plugins) {
    return function () {
        return gulp.src('index.ts')
            .pipe(plugins.tslint())
            .pipe(plugins.tslint.report('verbose'));
    };
};
