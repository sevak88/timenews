var gulp        = require("gulp"),
    sass        = require("gulp-sass"),
    concat      = require("gulp-concat"),
    uglify      = require("gulp-uglifyjs"),
    imagemin    = require("gulp-imagemin"),
    htmlmin     = require('gulp-htmlmin');

gulp.task("sass", function () {
    return gulp.src(["./app/app.scss"])
        .pipe(sass().on('error', function () {
            console.log("sass compile error!!!")
        }))
        .pipe(gulp.dest("./dist/css"))
});

gulp.task("scripts", function () {
    return gulp.src([
                "./app/uikit/dist/js/uikit.js",
                "./app/uikit/dist/js/uikit-icons.js",
                "./app/app.js"
                ])
        .pipe(concat("app.min.js"))
        .pipe(uglify())
        .pipe(gulp.dest("./dist/js"))
});

gulp.task("html", function () {
    return gulp.src(["./app/*.html"])
        .pipe(htmlmin({collapseWhitespace: true}))
        .pipe(gulp.dest("./dist"))
});

gulp.task("images", function () {
    return gulp.src(["./app/images/**/*"])
        .pipe(imagemin([
            imagemin.gifsicle({interlaced: true}),
            imagemin.jpegtran({progressive: true}),
            imagemin.optipng({optimizationLevel: 5}),
            imagemin.svgo({
                plugins: [
                    {removeViewBox: true},
                    {cleanupIDs: false}
                ]
            })

        ]))
        .pipe(gulp.dest("./dist/images"))
})

gulp.task("build", ["scripts", "sass", "images", "html"], function () {
    var buildFlags = gulp.src(["./app/flag-icon-css/flags/**/*.svg"])
        .pipe(imagemin([
            imagemin.svgo({
                plugins: [
                    {removeViewBox: true},
                    {cleanupIDs: false}
                ]
            })
        ]))
        .pipe(gulp.dest("./dist/flags"));
});

gulp.task("watch", function () {
   gulp.watch(["./app/app.scss"], ["sass"]);
   gulp.watch(["./app/app.js"], ["scripts"]);
   gulp.watch(["./app/*.html"], ["html"]);
});