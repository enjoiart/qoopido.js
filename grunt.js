/*global module:false*/
module.exports = function (grunt) {

	// Project configuration.
	grunt.initConfig({
		pkg:'<json:package.json>',
		meta:{
			general:'/*!\n' +
				'* This file is part of <%= pkg.title || pkg.name %>\n' +
				'*\n' +
				'* Source:  <%= pkg.title || pkg.name %>\n' +
				'* Version: <%= pkg.version %>\n' +
				'* Date:    <%= grunt.template.today("yyyy-mm-dd") %>\n' +
				'* Author:  <%= pkg.author.name %> <<%= pkg.author.email %>>\n' +
				'* Website: <%= pkg.homepage %>\n' +
				'*\n' +
				'* Copyright (c) <%= grunt.template.today("yyyy") %> <%= pkg.author.name %>\n' +
				'*\n' +
				'* Licensed under <%= _.pluck(pkg.licenses, "type").join(" and ") %> license.\n' +
				'*  - <%= _.pluck(pkg.licenses, "url").join("\n*  - ") %>\n' +
				'*/',
			emerge:'/*!\n' +
				'* Qoopido jQuery Plugin "emerge"\n' +
				'*\n' +
				'* Source:  <%= pkg.title || pkg.name %>\n' +
				'* Version: <%= pkg.version %>\n' +
				'* Date:    <%= grunt.template.today("yyyy-mm-dd") %>\n' +
				'* Author:  <%= pkg.author.name %> <<%= pkg.author.email %>>\n' +
				'* Website: <%= pkg.homepage %>\n' +
				'*\n' +
				'* Copyright (c) <%= grunt.template.today("yyyy") %> <%= pkg.author.name %>\n' +
				'*\n' +
				'* Licensed under the <%= _.pluck(pkg.licenses, "type").join(" and ") %> license.\n' +
				'*  - <%= _.pluck(pkg.licenses, "url").join("\n*  - ") %>\n' +
				'*/',
			lazyimage:'/*!\n' +
				'* Qoopido jQuery Plugin "lazyimage"\n' +
				'*\n' +
				'* Source:  <%= pkg.title || pkg.name %>\n' +
				'* Version: <%= pkg.version %>\n' +
				'* Date:    <%= grunt.template.today("yyyy-mm-dd") %>\n' +
				'* Author:  <%= pkg.author.name %> <<%= pkg.author.email %>>\n' +
				'* Website: <%= pkg.homepage %>\n' +
				'*\n' +
				'* Copyright (c) <%= grunt.template.today("yyyy") %> <%= pkg.author.name %>\n' +
				'*\n' +
				'* Licensed under the <%= _.pluck(pkg.licenses, "type").join(" and ") %> license.\n' +
				'*  - <%= _.pluck(pkg.licenses, "url").join("\n*  - ") %>\n' +
				'*/',
			shrinkimage:'/*!\n' +
				'* Qoopido jQuery Plugin "shrinkimage"\n' +
				'*\n' +
				'* Source:  <%= pkg.title || pkg.name %>\n' +
				'* Version: <%= pkg.version %>\n' +
				'* Date:    <%= grunt.template.today("yyyy-mm-dd") %>\n' +
				'* Author:  <%= pkg.author.name %> <<%= pkg.author.email %>>\n' +
				'* Website: <%= pkg.homepage %>\n' +
				'*\n' +
				'* Copyright (c) <%= grunt.template.today("yyyy") %> <%= pkg.author.name %>\n' +
				'*\n' +
				'* Licensed under the <%= _.pluck(pkg.licenses, "type").join(" and ") %> license.\n' +
				'*  - <%= _.pluck(pkg.licenses, "url").join("\n*  - ") %>\n' +
				'*\n' +
				'* Important note:\n' +
				'* Includes q.js by Kris Kowal which can be found under\n' +
				'* https://github.com/kriskowal/q\n' +
				'* and comes its own license\n' +
				'*/'
		},
		concat:{
			emerge:{
				src:[
					'<banner:meta.emerge>',
					'<file_strip_banner:src/base.js>',
					'<file_strip_banner:src/uuid.js>',
					'<file_strip_banner:src/jquery/plugins/emerge.js>'
				],
				dest:'packages/qoopido.emerge.js'
			},
			lazyimage:{
				src:[
					'<banner:meta.lazyimage>',
					'<file_strip_banner:src/base.js>',
					'<file_strip_banner:src/uuid.js>',
					'<file_strip_banner:src/jquery/plugins/emerge.js>',
					'<file_strip_banner:src/jquery/plugins/lazyimage.js>'
				],
				dest:'packages/qoopido.lazyimage.js'
			},
			shrinkimage:{
				src:[
					'<banner:meta.shrinkimage>',
					'<file_strip_banner:assets/q/q.min.js>',
					'<file_strip_banner:src/base.js>',
					'<file_strip_banner:src/uuid.js>',
					'<file_strip_banner:src/support.js>',
					'<file_strip_banner:src/support/capability/datauri.js>',
					'<file_strip_banner:src/support/element/canvas.js>',
					'<file_strip_banner:src/support/element/canvas/todataurl.js>',
					'<file_strip_banner:src/support/element/canvas/todataurl/png.js>',
					'<file_strip_banner:src/jquery/plugins/shrinkimage.js>'
				],
				dest:'packages/qoopido.shrinkimage.js'
			}
		},
		min:{
			emerge:{
				src:['<config:concat.emerge.dest>'],
				dest:'packages/qoopido.emerge.min.js'
			},
			lazyimage:{
				src:['<config:concat.lazyimage.dest>'],
				dest:'packages/qoopido.lazyimage.min.js'
			},
			shrinkimage:{
				src:['<config:concat.shrinkimage.dest>'],
				dest:'packages/qoopido.shrinkimage.min.js'
			}
		},
		qmin: {
			all:{
				src:    ['src/**/*.js'],
				root:   'src/',
				dest:   'min/'
			}
		},
		lint:{
			files:[
				'grunt.js',
				'src/**/*.js'
			]
		},
		compress:{
			shrinkimage:{
				options:{
					mode:'zip',
					basePath:'',
					level:1,
					flatten:true
				},
				files:{
					'packages/qoopido.shrinkimage.zip': ['packages/qoopido.shrinkimage*.js', 'assets/shrinkimage/*', 'assets/shrinkimage/.htaccess']
				}
			}
		},
		clean: {
			all: ['min/**/*', 'packages/**/*']
		},
		watch:{
			files:'<config:lint.files>',
			tasks:'lint'
		},
		jshint:{
			options:{
				curly:true,
				eqeqeq:true,
				immed:true,
				latedef:true,
				newcap:true,
				noarg:true,
				sub:true,
				undef:true,
				boss:true,
				eqnull:true,
				browser:true,
				proto:true,
				expr:true
			},
			globals:{
				jQuery: true,
				define: true
			}
		}
	});

	// Default task.
	grunt.registerTask('default', 'lint clean qmin concat min compress');

	grunt.loadNpmTasks('grunt-contrib');
	grunt.loadNpmTasks('grunt-bump');
	grunt.loadNpmTasks('grunt-qmin');
};