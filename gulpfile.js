var gulp        = require("gulp"),
    sass        = require("gulp-sass"),
    concat      = require("gulp-concat"),
    uglify      = require("gulp-uglifyjs");

gulp.task("sass", function () {
    return gulp.src(["./app/app.scss"])
        .pipe(sass().on('error', function () {
            console.log("sass compile error!!!")
        }))
        .pipe(gulp.dest("./dist/css"))
});

gulp.task("scripts", function () {
    return gulp.src(["./app/uikit/dist/js/uikit.js", "./app/uikit/dist/js/uikit-icons.js", "./app/uikit/dist/js/uikit-icons.js", "./app/app.js"])
        .pipe(concat("app.min.js"))
        .pipe(uglify())
        .pipe(gulp.dest("./dist/js"))
});

gulp.task("watch", function () {
   gulp.watch(["./app/app.scss"], ["sass"]);
   gulp.watch(["./app/app.js"], ["scripts"]);
});