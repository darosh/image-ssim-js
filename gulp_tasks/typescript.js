var merge = require('merge2');

module.exports = function (gulp, plugins) {
    return function () {
        var result = gulp.src('index.ts')
            .pipe(plugins.typescript({
                module: 'commonjs',
                target: 'ES5',
                noImplicitAny: true,
                declarationFiles: true
            }));

        return merge([
            result.js.pipe(gulp.dest('.')),
            result.dts.pipe(gulp.dest('.'))
        ]);
    };
};
