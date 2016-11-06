var path = require('path');
module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    reveal: {
    	styleGuide: {
	    	options: {
	    		// theme: 'beige'
	    	}
    	}
    },
    watch: {
    	files: ['**/*.jade'],
    	tasks: ['reveal:styleGuide', 'express:dev']
    },
	express: {
		dev: {
	      options: {
	        script: './express.js'
	      }
	    }
    },
    concurrent: {
    	startup: ['express:my_server', 'watch']
    }
  });


  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-reveal-jade');
  grunt.loadNpmTasks('grunt-express-server');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-concurrent');

  grunt.registerTask('default', ['reveal:styleGuide', 'express:dev', 'watch']);

};