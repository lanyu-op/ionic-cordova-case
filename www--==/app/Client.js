'use strict';

define( function( require )
{

	// Utility
	require( 'lodash' );

	// Ionic
	require( 'ionic' );
	require( 'ionic-angular' );

	// Angular
	require( 'angular-route' );
	require( 'angular-animate' );
	require( 'angular-ui-router' );
	require( 'angular-sanitize' );

	// Services
	require( 'services/ClientService' );

	// Used here
	var angularAMD = require( 'angularAMD' );
	var Debug = require( 'agCore/Debug' );

	// Create client with all needed angular dependencies
	var Client = angular.module( 'Client', [ 'ngRoute', 'ionic' ] );

	var pathRequiringLogin = {};
	
	// Configurations
	var Config = require( 'config/Config' );
	var DevConfig = require( 'config/DevConfig' );
	var ProdConfig = require( 'config/ProdConfig' );
	
	// Grab url from the window
	var url = window.location.href;
	
	// Determine environment & setup config based on url
	if ( url.indexOf( DevConfig.url ) != -1 )
	{
		Config.mergeConfig( DevConfig );
	}
	else if ( url.indexOf( ProdConfig.url ) != -1 )
	{
		Config.mergeConfig( ProdConfig );
	}	

	// Handle routing
	Client.config( [ '$routeProvider', function( $routeProvider )
	{
		var setupRoute = function( url, name, doesRequireLogin, urlOverride )
		{
			if ( doesRequireLogin === undefined )
			{
				doesRequireLogin = true;
			}

			pathRequiringLogin[ name ] = doesRequireLogin;

			// Strip leading slash
			var autoUrl = url.substr( 1 );

			if ( urlOverride )
			{
				autoUrl = urlOverride;
			}

			// Populate variables
			var templatePath = 'app/' + autoUrl + '/' + name + '.html';
			var controllerName = name + 'Controller';
			var controllerPath = autoUrl + '/' + controllerName;

			// Generate config object
			var pathConfig =
			{
				templateUrl : templatePath,
				controllerUrl : controllerPath,
				controller : controllerName
			};

			// Execute route registration
			$routeProvider.when( url, angularAMD.route( pathConfig ) );

			Debug.info( "Adding route:", url, "with templatePath", templatePath, "controllerPath", controllerPath, "and controller", controllerName);
		};

		/** General User Routes **/
		setupRoute( '/home', 'home', false );						// Home screen route

		/** Alternatively, forward to home screen **/
		$routeProvider.otherwise( { redirectTo : '/home' } );

	} ] );

	Client.run( function( $rootScope, $location, $ionicPlatform, ClientService )
	{
		// Ionic platform ready, can hook in appropriately
		$ionicPlatform.ready( function()
		{
			if ( window.cordova && window.cordova.plugins.Keyboard )
			{
				cordova.plugins.Keyboard.hideKeyboardAccessoryBar( true );
			}

			if ( window.statusBar )
			{
				StatusBar.styleDefault();
			}
		} );

		// At application run, bind a locationChangeStart listener.
		// Listener will be responsible for determining if the user
		// is logged in for appropriate security routes.
		var onRouteChange = $rootScope.$on( '$locationChangeStart', function( event, next, current )
		{
			var nextRouteName = next.substr( next.indexOf( "#" ) + 2 );

			var isLoggedIn = ClientService.isLoggedIn();
			var doesPathRequireLogin = pathRequiringLogin[ nextRouteName ] === undefined || pathRequiringLogin[ nextRouteName ];

			if ( doesPathRequireLogin && isLoggedIn === false )
			{
				// Prevent this route from happening
				event.preventDefault();

				// Reroute to login
				$location.path( '/login' );

				// Force reprocessing
				onRouteChange();
			}
		} );
	} );

	return angularAMD.bootstrap( Client );

} );