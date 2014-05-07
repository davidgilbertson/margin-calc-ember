'use strict';

module.exports = function (grunt) {
  grunt.initConfig({
    sass: {
      dist: {
        options: {
          sourceComments: 'map'
        },
        files: {
            'css/main.css': 'sass/main.scss'
        }
      }
    },
    watch: {
      files: ['sass/*.scss'],
      tasks: 'default' //TODO could this just be 'sass'?
    }
  });

  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.registerTask('default', ['sass']);

};