module.exports = function(grunt) {
  grunt.initConfig({
    nodewebkit: {
      options: {
        app_name: "Radio Nova",
        version: '0.11.6',
        build_dir: './build',
        mac_icns: './icon/icon.icns',
        platforms: ['osx32', 'win32']
      },
      src: [
        './package.json',
        './icon',
        './index.html'
      ]
    },

    copy: {
      main: {
        files: [
        {
          src: 'libraries/win32/ffmpegsumo.dll',
          dest: 'build/Radio Nova/win32/ffmpegsumo.dll'
        },
        {
          src: 'libraries/osx32/ffmpegsumo.so',
          dest: 'build/Radio Nova/osx32/Radio Nova.app/Contents/Frameworks/node-webkit Framework.framework/Libraries/ffmpegsumo.so'
        }
        ]
      }
    },

    clean: {
        build: ['build/releases'],
        cache: ['build/cache']
    }
  });

  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-node-webkit-builder');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.registerTask('default', ['clean:build', 'nodewebkit', 'copy']);

};
