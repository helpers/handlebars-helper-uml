/*global module:false*/
module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    readme: {
      options: {
        boilerplate: 'node-util'
      }
    }
  });

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-readme');

  // Default task.
  grunt.registerTask('default', ['readme']);

};
