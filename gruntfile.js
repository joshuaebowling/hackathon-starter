module.exports = function(grunt) {

  grunt.loadNpmTasks('grunt-jsdoc');
  grunt.loadNpmTasks('grunt-jsxhint');

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    jsdoc : {
      dist : {
        src: [
          'doc-README.md',
          './public/js/app/channels/*.js',
          './public/js/app/components/*.jsx',
          './public/js/app/components/numer/*.jsx',
          './public/js/app/components/numer/*.jsx',
          './public/js/app/components/meta/*.jsx',
          './public/js/app/constants/*.js',
          './public/js/app/stores/*.js',
          './public/js/app/utils/*.js'
        ],
        options: {
          destination: 'doc',
          configure: 'config/jsdoc.conf.json'
        }
      }
    },
    jshint: {
      all: [
        './gruntfile.js',
        'public/js/app/index.jsx',
        'public/js/app/stores/*',
        'public/js/app/channels/*',
        'public/js/app/constants/*',
        'public/js/app/utils/*'
      ],
      options: {
        esversion: 6,
        unused: true,
        globals: {
          require: true,
          module: true
        }
      }
    }
  });
};