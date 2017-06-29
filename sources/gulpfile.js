// use strict code
"use strict";

// global node modules
var gulp = require("gulp");
var nodemon = require('gulp-nodemon');
var path = require('path');

// nodemon
gulp.task('nodemon', function(done) {
	var called = false;
	return nodemon({
			execMap: {
				js: 'electron'
			},
			ext: "js json css html hbs",
			ignore: [
				'gulpfile.js',
				'node_modules/'
			],
			script: 'main.js'
		})
		.on('start', function() {
			if (!called) {
				called = true;
				done();
			}
		})
		.on('restart', function() {
			setTimeout(function() {
				reload({
					stream: false
				});
			}, 1000);
		});
});

gulp.task("watch", gulp.series("nodemon"));
