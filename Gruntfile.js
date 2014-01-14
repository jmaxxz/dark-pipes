module.exports = function(grunt) {
var files = ['Gruntfile.js','app.js','controllers/**/*.js','migrations/**/*.js','data_access/**/*.js','spec/**/*.js'];
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    notify:{
      success:{
        options:{
          title:'Good job captain',
          message:'everything is shiny'
        }
      }
    },
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
            keepRunner: true,
            specs: 'spec/*Spec.js',
            helpers: 'spec/*Helper.js'
          }
        }
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
    watch: {
      files: files,
      tasks: ['jshint', 'jasmine', 'notify:success']
    }
  });

  grunt.loadNpmTasks('grunt-notify');
  grunt.loadNpmTasks('grunt-contrib-jasmine');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.registerTask('default', ['jshint', 'jasmine', 'express:dev', 'notify:success']);
};