var gulp = require( 'gulp' );
var connect = require( 'gulp-connect' );
var sass = require( 'gulp-sass' );
var minifyCss = require( 'gulp-minify-css' );

gulp.task( 'reload', function()
{
	connect.reload();
});

gulp.task(  'sass', function()
{
    return gulp.src( 'app/scss/app.scss' )
        .pipe( sass() )
        .pipe( minifyCss() )
        .pipe( gulp.dest( 'app/css' ) )
        .pipe( connect.reload() );
} );

gulp.task( 'watch-app', function()
{
    gulp.watch( [ 'index.html', 'app/**/*.js' ], [ 'reload' ] );
    gulp.watch( [ 'app/scss/*' ], [ 'sass' ] );
});

gulp.task( 'server', function()
{
   connect.server(
   {
       port : 9001
   });
});

gulp.task( 'default', [ 'server', 'sass', 'watch-app' ] );
