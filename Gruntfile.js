module.exports = function(grunt) {
var files = ['Gruntfile.js','app.js','controllers/**/*.js','migrations/**/*.js','data_access/**/*.js','spec/**/*.js'];
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    jshint: {
      files: files,
      options: {
        // options here to override JSHint defaults
        globals: {
          console: true,
          module: true,
        }
      }
    },
    jasmine: {
         pivotal: {
         src: [],
        options: {
            specs: 'spec/*Spec.js',
            helpers: 'spec/*Helper.js'
          }
        }
    },
    watch: {
      files: files,
      tasks: ['jshint', 'jasmine', 'express:dev']
    },
    express: {
      dev: {
        options: {
          script: 'app.js',
          node_env: 'development',
          background: true,
          spawn: false
        }
      }
    },
  });

  grunt.loadNpmTasks('grunt-contrib-jasmine');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-npm-install');
  grunt.loadNpmTasks('grunt-express-server');
  grunt.registerTask('default', ['jshint', 'jasmine', 'express:dev', 'watch']);

};