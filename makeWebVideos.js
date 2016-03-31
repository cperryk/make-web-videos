#!/usr/bin/env node
var program = require('commander');
var MediaConverter = require(__dirname+"/html5-media-converter-branch");
var glob = require('globby');
var fs = require('fs-extra');
var input_glob = process.argv[2] || ['**/*.mp4','**/*.ogg','**/*.webm'];

program
	.version('0.0.1')
	.option('-o, --out [dir]', 'Out directory')
	.option('-w, --width [width]', 'width')
	.option('-h, --height [height]', 'height')
	.parse(process.argv);

makeVids(program.args, program);

function makeVids(files, opts){
	console.log(opts);
	var out_dir = opts.out;
	var width = opts.width || 540;
	var height = opts.height || 304;
	// Filter out redundant paths
	if(!out_dir){
		throw new Error('You must specify an out directory with -o');
	}
	fs.ensureDirSync(out_dir);
	var stripped_paths = [];
	files = files.filter(function(file){
		var stripped = file.substr(0, file.lastIndexOf('.'));
		if(stripped_paths.indexOf(stripped)===-1){
			stripped_paths.push(stripped);
			return true;
		}
		else{
			return false;
		}
	});
	files.forEach(function(file){
		var ext = file.substr(file.lastIndexOf('.')+1, file.length);
		var formats = ['ogv','webm','mp4'];
		var first_round = (function(){
			var arr = formats.slice(0,formats.length);
			arr.splice(arr.indexOf(ext), 1);
			return arr;
		}());
		var mc = new MediaConverter({
			videoFormats: formats
		});
		mc.convert(file, width+'x'+height, out_dir);
	});
}
