// Generated on 2014-07-29 using generator-angular 0.9.5
'use strict';

// # Globbing
// for performance reasons we're only matching one level down:
// 'test/spec/{,*/}*.js'
// use this if you want to recursively match all subfolders:
// 'test/spec/**/*.js'

var proxySnippet = require('grunt-connect-proxy/lib/utils').proxyRequest,
    SPECIAL_CHAR = '\%',
    modRewrite = require('connect-modrewrite'),
    mountFolder = function (connect, dir) {
        return connect.static(require('path').resolve(dir));
    };

var pushStateHook = function (url) {
  var path = require('path');
  var request = require('request'); // Need to be added into package.json
  return function (req, res, next) {
    var ext = path.extname(req.url);
    if ((ext == "" || ext === ".html") && req.url != "/") {
      req.pipe(request(url)).pipe(res);
    } else {
      next();
    }
  };
};

module.exports = function(grunt) {
	// Load grunt tasks automatically
	require('load-grunt-tasks')(grunt);

	// Time how long tasks take. Can help when optimizing build times
	require('time-grunt')(grunt);

	// Configurable paths for the application
	var appConfig = {
		app: require('./bower.json').appPath || 'app',
		dist: 'dist',
		assetsBackendPath: '../backend'
	};

	// Define the configuration for all the tasks
	grunt.initConfig({

		// Project settings
		yeoman: appConfig,

		// Watches files for changes and runs tasks based on the changed files
		watch: {
			bower: {
				files: ['bower.json'],
				tasks: ['wiredep']
			},
			js: {
				files: ['<%= yeoman.app %>/scripts/{,*/}*.js'],
				tasks: ['newer:jshint:all'],
				options: {
					livereload: '<%= connect.options.livereload %>'
				}
			},
			jsTest: {
				files: ['test/spec/{,*/}*.js'],
				tasks: ['newer:jshint:test', 'karma']
			},
			compass: {
				files: ['<%= yeoman.app %>/styles/{,*/}*.{scss,sass}'],
				tasks: ['compass:server', 'autoprefixer']
			},
			gruntfile: {
				files: ['Gruntfile.js']
			},
			livereload: {
				options: {
					livereload: '<%= connect.options.livereload %>'
				},
				files: [
					'<%= yeoman.app %>/{,*/}*.html',
					'.tmp/styles/{,*/}*.css',
					'<%= yeoman.app %>/images/{,*/}*.{png,jpg,jpeg,gif,webp,svg}'
				]
			}
		},

		// The actual grunt server settings
		connect: {
			options: {
				port: 9001,
				// Change this to '0.0.0.0' to access the server from outside.
				hostname: '0.0.0.0',
				livereload: 35741
			},
      proxies: [{
        context: '/api',
        host: 'localhost',
        port: 3000,
        https: false,
        changeOrigin: false,
        rewrite: {
          '^/api': '/api'
        }
      }],
			livereload: {
				options: {
					open: true,
					middleware: function(connect) {
						return [
							connect.static('.tmp'),
							connect().use(
								'/bower_components',
								connect.static('./bower_components')
							),
							connect.static(appConfig.app)
						];
					}
				}
			},
			test: {
				options: {
					port: 9003,
					middleware: function(connect) {
						return [
							connect.static('.tmp'),
							connect.static('test'),
							connect().use(
								'/bower_components',
								connect.static('./bower_components')
							),
							connect.static(appConfig.app)
						];
					}
				}
			},
			dist: {
				options: {
					open: true,
					base: '<%= yeoman.dist %>'
				}
			}
		},

		// Make sure code styles are up to par and there are no obvious mistakes
		jshint: {
			options: {
				jshintrc: '.jshintrc',
				reporter: require('jshint-stylish')
			},
			all: {
				src: [
					'Gruntfile.js',
					'<%= yeoman.app %>/scripts/{,*/}*.js'
				]
			},
			test: {
				options: {
					jshintrc: 'test/.jshintrc'
				},
				src: ['test/spec/{,*/}*.js']
			}
		},

		// Empties folders to start fresh
		clean: {
			dist: {
				files: [{
					dot: true,
					src: [
						'.tmp',
						'<%= yeoman.dist %>/{,*/}*',
						'!<%= yeoman.dist %>/.git*'
					]
				}]
			},
			server: '.tmp'
		},

		// Add vendor prefixed styles
		autoprefixer: {
			options: {
				browsers: ['last 1 version']
			},
			dist: {
				files: [{
					expand: true,
					cwd: '.tmp/styles/',
					src: '{,*/}*.css',
					dest: '.tmp/styles/'
				}]
			}
		},

		// Automatically inject Bower components into the app
		wiredep: {
			options: {
				cwd: '<%= yeoman.app %>'
			},
			app: {
				src: ['<%= yeoman.app %>/index.html'],
				ignorePath: /\.\.\//
			},
			sass: {
				src: ['<%= yeoman.app %>/styles/{,*/}*.{scss,sass}'],
				ignorePath: /(\.\.\/){1,2}bower_components\//
			}
		},

		// Compiles Sass to CSS and generates necessary files if requested
		compass: {
			options: {
				sassDir: '<%= yeoman.app %>/styles',
				cssDir: '.tmp/styles',
				generatedImagesDir: '.tmp/images/generated',
				imagesDir: '<%= yeoman.app %>/images',
				javascriptsDir: '<%= yeoman.app %>/scripts',
				fontsDir: '<%= yeoman.app %>/styles/fonts',
				importPath: './bower_components',
				httpImagesPath: '/images',
				httpGeneratedImagesPath: '/images/generated',
				httpFontsPath: '/styles/fonts',
				relativeAssets: false,
				assetCacheBuster: false,
				raw: 'Sass::Script::Number.precision = 10\n'
			},
			dist: {
				options: {
					generatedImagesDir: '<%= yeoman.dist %>/images/generated'
				}
			},
			server: {
				options: {
					debugInfo: true
				}
			}
		},

		// Renames files for browser caching purposes
		filerev: {
			dist: {
				src: [
					'<%= yeoman.dist %>/scripts/{,*/}*.js',
					'<%= yeoman.dist %>/styles/{,*/}*.css',
					// '<%= yeoman.dist %>/images/{,*/}*.{png,jpg,jpeg,gif,webp,svg}',
					'<%= yeoman.dist %>/styles/fonts/*'
				]
			}
		},

		// Reads HTML for usemin blocks to enable smart builds that automatically
		// concat, minify and revision files. Creates configurations in memory so
		// additional tasks can operate on them
		useminPrepare: {
			html: '<%= yeoman.app %>/index.html',
			options: {
				dest: '<%= yeoman.dist %>',
				flow: {
					html: {
						steps: {
							js: ['concat', 'uglifyjs'],
							css: ['cssmin']
						},
						post: {}
					}
				}
			}
		},

		// Performs rewrites based on filerev and the useminPrepare configuration
		usemin: {
			html: ['<%= yeoman.dist %>/{,*/}*.html'],
			css: ['<%= yeoman.dist %>/styles/{,*/}*.css'],
			options: {
				assetsDirs: ['<%= yeoman.dist %>', '<%= yeoman.dist %>/assets/images']
			}
		},

		// The following *-min tasks will produce minified files in the dist folder
		// By default, your `index.html`'s <!-- Usemin block --> will take care of
		// minification. These next options are pre-configured if you do not wish
		// to use the Usemin blocks.
		// cssmin: {
		//   dist: {
		//     files: {
		//       '<%= yeoman.dist %>/styles/main.css': [
		//         '.tmp/styles/{,*/}*.css'
		//       ]
		//     }
		//   }
		// },
		// uglify: {
		//   dist: {
		//     files: {
		//       '<%= yeoman.dist %>/scripts/scripts.js': [
		//         '<%= yeoman.dist %>/scripts/scripts.js'
		//       ]
		//     }
		//   }
		// },
		// concat: {
		//   dist: {}
		// },

		imagemin: {
			dist: {
				files: [{
					expand: true,
					cwd: '<%= yeoman.app %>/images',
					src: '{,*/}*.{png,jpg,jpeg,gif}',
					dest: '<%= yeoman.dist %>/images'
				}]
			}
		},

		svgmin: {
			dist: {
				files: [{
					expand: true,
					cwd: '<%= yeoman.app %>/images',
					src: '{,*/}*.svg',
					dest: '<%= yeoman.dist %>/images'
				}]
			}
		},

		htmlmin: {
			dist: {
				options: {
					collapseWhitespace: true,
					conservativeCollapse: true,
					collapseBooleanAttributes: true,
					removeCommentsFromCDATA: true,
					removeOptionalTags: true
				},
				files: [{
					expand: true,
					cwd: '<%= yeoman.dist %>',
					src: ['*.html', 'templates/{,*/}*.html'],
					dest: '<%= yeoman.dist %>'
				}]
			}
		},

		// ngmin tries to make the code safe for minification automatically by
		// using the Angular long form for dependency injection. It doesn't work on
		// things like resolve or inject so those have to be done manually.
		ngmin: {
			dist: {
				files: [{
					expand: true,
					cwd: '.tmp/concat/scripts',
					src: '*.js',
					dest: '.tmp/concat/scripts'
				}]
			}
		},

		// Replace Google CDN references
		cdnify: {
			dist: {
				html: ['<%= yeoman.dist %>/*.html']
			}
		},

		// Replace images->assets, font->asset
		replace: {
			assets: {
				src: ['<%= yeoman.dist %>/{,*/}*.{js,html}'],
				overwrite: true,
				replacements: [{
					from: '/images/',
					to: '/assets/'
				}, {
					from: '../assets/',
					to: '/assets/'
				}, {
					from: '/fonts/',
					to: '/assets/'
				}]
			},
      assetsCSS: {
        src: ['<%= yeoman.dist %>/{,*/}*.css'],
        overwrite: true,
        replacements: [{
          from: /\.?\.?\/bower_components\/bootstrap-sass-official\/assets\/fonts\/bootstrap\/([\w-]+\.(eot|woff|ttf|svg))(\?\#iefix|\#glyphicons_halflingsregular)?/g,
          to: function(matchedWord, index, fullText, regexMatches) {
            var result = ['<= asset_path', "'" + regexMatches[0] + "'", '\%' + '>'];
            if (regexMatches[2]) {
              result.push("+ '" + regexMatches[2] + "'");
            }
            return '"' + result.join(' ') + '"';
          }
        },
        {
          from: /fonts\/icomoon\/fonts\/([\w-]+\.(eot|woff|ttf|svg))(\?\#iefix|\?#icomoon)?/g,
          to: function(matchedWord, index, fullText, regexMatches) {
            var result = ['<= asset_path', "'" + regexMatches[0] + "'", '\%' + '>'];
            if (regexMatches[2]) {
              result.push("+ '" + regexMatches[2] + "'");
            }
            return '"' + result.join(' ') + '"';
          }
        }
        ,
        {
          from: /fonts\/fontawesome\/([\w-]+\.(eot|woff|ttf|svg))(\?\#iefix&v=[\w.]+|\?v=[\w.]+\#fontawesomeregular|\?v=[\w.]+)?/g,
          to: function(matchedWord, index, fullText, regexMatches) {
            var result = ['<= asset_path', "'" + regexMatches[0] + "'", '\%' + '>'];
            if (regexMatches[2]) {
              result.push(regexMatches[2]);
            }
            return '"' + result.join('') + '"';
          }
        }, {
          from: /fonts\/glyphicons\.pro\/([\w-]+\.(eot|woff|ttf|svg))(\?\#iefix|\#glyphiconsregular)?/g,
          to: function(matchedWord, index, fullText, regexMatches) {
            var result = ['<= asset_path', "'" + regexMatches[0] + "'", '\%' + '>'];
            if (regexMatches[2]) {
              result.push("+ '" + regexMatches[2] + "'");
            }
            return '"' + result.join(' ') + '"';
          }
        }, {
          from: /fonts\/glyphicons\.halflings\.pro\/([\w-]+\.(eot|woff|ttf|svg))(\?\#iefix|\#glyphicons_halflingsregular)?/g,
          to: function(matchedWord, index, fullText, regexMatches) {
            var result = ['<= asset_path', "'" + regexMatches[0] + "'", '\%' + '>'];
            if (regexMatches[2]) {
              result.push("+ '" + regexMatches[2] + "'");
            }
            return '"' + result.join(' ') + '"';
          }
        }, {
          from: /fonts\/glyphicons.social.pro\/([\w-]+\.(eot|woff|ttf|svg))(\?\#iefix|\#glyphicons_socialregular)?/g,
          to: function(matchedWord, index, fullText, regexMatches) {
            var result = ['<= asset_path', "'" + regexMatches[0] + "'", '\%' + '>'];
            if (regexMatches[2]) {
              result.push("+ '" + regexMatches[2] + "'");
            }
            return '"' + result.join(' ') + '"';
          }
        }, {
          from: /fonts\/glyphicons.filetypes.pro\/([\w-]+\.(eot|woff|ttf|svg))(\?\#iefix|\#glyphicons_filetypesregular)?/g,
          to: function(matchedWord, index, fullText, regexMatches) {
            var result = ['<= asset_path', "'" + regexMatches[0] + "'", '\%' + '>'];
            if (regexMatches[2]) {
              result.push("+ '" + regexMatches[2] + "'");
            }
            return '"' + result.join(' ') + '"';
          }
        },
        // {
        //   from: /\/fonts\/([\w-]+\.(eot|woff|ttf|svg))(\?\#iefix|\#icomoon)?/g,
        //   to: function(matchedWord, index, fullText, regexMatches) {
        //     var result = ['<= asset_path', "'" + regexMatches[0] + "'", '\%' + '>'];
        //     if (regexMatches[2]) {
        //       result.push("+ '" + regexMatches[2] + "'");
        //     }
        //     return result.join(' ');
        //   }
        // },
        {
          from: /\.?\.?\/images\/([\w-\d\/]+\.(png|jpg|gif))/g,
          to: function(matchedWord, index, fullText, regexMatches) {
            return "<= asset_path '" + regexMatches[0] + "' " + '\%' + ">"
          }
        }]
      },
      fixAssetsCSS: {
        src: ['<%= yeoman.dist %>/{,*/}*.css'],
        overwrite: true,
        replacements: [{
          from: '<=',
          to: '<%='
        }]
      }
    },

		// Copies remaining files to places other tasks can use
		copy: {
			dist: {
				files: [{
					expand: true,
					dot: true,
					cwd: '<%= yeoman.app %>',
					dest: '<%= yeoman.dist %>',
					src: [
						'*.{ico,png,txt}',
						'.htaccess',
						'*.html',
						// 'templates/{,*/}*.html',
						'images/{,*/}*.{webp}',
						'fonts/*'
					]
				}, {
					expand: true,
					cwd: '.tmp/images',
					dest: '<%= yeoman.dist %>/images',
					src: ['generated/*']
				}, {
					expand: true,
          flatten: true,
					cwd: '.',
					src: 'bower_components/bootstrap-sass-official/assets/fonts/bootstrap/*',
					dest: '<%= yeoman.dist %>/fonts'
				}]
			},
			styles: {
				expand: true,
				cwd: '<%= yeoman.app %>/styles',
				dest: '.tmp/styles/',
				src: '{,*/}*.css'
			}

		},

		// Run some tasks in parallel to speed up the build process
		concurrent: {
			server: [
				'compass:server'
			],
			test: [
				'compass'
			],
			dist: [
				'compass:dist',
				// 'imagemin',
				// 'svgmin'
			]
		},

		// Test settings
		karma: {
			unit: {
				configFile: 'test/karma.conf.js',
				singleRun: true
			}
		},

		ngtemplates: {
			app: {
        cwd: 'app/templates',
        src: '**/*.html',
        dest: 'app/scripts/template.js',
        options: {
          prefix: '/',
          url: function(url) {
            return url.replace('app/', 'assets/');
          }
        }
      }
   //    ,
   //    copy: {
			// 	src: 'dist/scripts/template.js',
			// 	dest: ['scripts/template.js']
			// }
		}
    // copy images to assets/images
    // copy fonts to assets/fonts
    // copy & rename main.csss -> main.css.scss.erb to assets/stylesheets
    //

	});

	grunt.registerTask('serve', 'Compile then start a connect web server', function(target) {
		if (target === 'dist') {
			return grunt.task.run(['build', 'connect:dist:keepalive']);
		}

		grunt.task.run([
			'clean:server',
			'wiredep',
			'concurrent:server',
			'autoprefixer',
			'connect:livereload',
			'watch'
		]);
	});

	grunt.registerTask('server', 'DEPRECATED TASK. Use the "serve" task instead', function(target) {
		grunt.log.warn('The `server` task has been deprecated. Use `grunt serve` to start a server.');
		grunt.task.run(['serve:' + target]);
	});

	grunt.registerTask('test', [
		'clean:server',
		'concurrent:test',
		'autoprefixer',
		'connect:test',
		'karma'
	]);

	grunt.registerTask('build', [
		'clean:dist',
		'wiredep',
		'useminPrepare',
		'concurrent:dist',
		'autoprefixer',
    'ngtemplates',
		'concat',
		'ngmin',
		'copy:dist',
		// 'cdnify',
		'cssmin',
		'uglify',
		// 'filerev',
    'usemin',
		'htmlmin',
		'replace'
	]);

  // final build before send to backend
  grunt.registerTask('deploy', ['ngtemplates']);

	grunt.registerTask('default', [
		'newer:jshint',
		'test',
		'build'
	]);
};
