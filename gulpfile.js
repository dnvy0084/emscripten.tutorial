
var gulp = require( 'gulp' );
var exec = require( 'child_process' ).exec;




/**
 * 01. ccall and cwrap example build
 */

var build_01 = {

	src: "./01.ccall_cwrap/src/ccall_cwrap.cpp",
	dest: "./01.ccall_cwrap/js/bin/lib.js",
	exportedFunctions: [
		"sumWithConst",
		"sumAandB",
		"print"
	]
}

gulp.task( 'build-01', function(){
	
	exec( getCommand( build_01 ), (err, stdout, stderr) =>{

		if(err){
			console.error( 'exec error: ${err}' );
			return;
		}

		console.log( 'stdout: ${stdout}' );
	}); 
})





/**
 * utils
 */

function getCommand( path ){

	return [ "emcc", path.src, "-o", path.dest, "-O1", "--closure 1", "-s",

		"EXPORTED_FUNCTIONS='" + JSON.stringify( path.exportedFunctions.map( s => "_" + s ) ) + "'" ].join( " " );
}

function printf( out ){

	var args = arguments, n = 1;

	return out.replace( /\%s+/g, function(){ return args[n++] })
}