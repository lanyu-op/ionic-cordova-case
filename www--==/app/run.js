'use strict';

require.config( {
	'baseUrl' : 'app',
	'paths' :
	{
		'angular' : '../lib/angular/angular.min',
		'angular-route' : '../lib/angular-route/angular-route.min',
		'angular-animate' : '../lib/angular-animate/angular-animate.min',
		'angular-ui-router' : '../lib/angular-ui-router/release/angular-ui-router.min',
		'angular-sanitize' : '../lib/angular-sanitize/angular-sanitize.min',
		'when' : '../lib/when/when',
		'lodash' : '../lib/lodash/lodash.min',
		'angularAMD' : '../lib/angularAMD/angularAMD.min',
		'agCore' : '../lib/agCore',
		'socketio' : '../lib/socket.io-client/dist/socket.io.min',
		'ionic' : '../lib/ionic/release/js/ionic.min',
		'ionic-angular' : '../lib/ionic/release/js/ionic-angular.min'
	},
	'shim' :
	{
		'angularAMD': [ 'angular' ],
		'angular-route': [ 'angular' ],
		'angular-animate' : [ 'angular' ],
		'angular-ui-router' : [ 'angular' ],
		'angular-sanitize' : [ 'angular' ],
		'ionic' : [ 'angular' ],
		'ionic-angular' :
		{
			'exports' : 'angular',
			'deps' : [ 'ionic' ]
		},
		"lodash" :
		{
			'exports' : '_'
		}
	},
	'deps' : [ 'lodash', 'Client' ]
} );
