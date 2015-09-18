'use strict';

define( function( require )
{

	/** External **/
	var _ = require( 'lodash' );

	var config = {};
	
	config.environments =
	{
		'LOCAL' : 0,
		'DEVELOPMENT' : 1,
		'PRODUCTION' : 2
	};

	config.servers = {};
	config.servers.url = "http://localhost:9000/";
	
	config.environment = config.environments.LOCAL;
	config.logging = {};
	
	config.mergeConfig = function( otherConfig )
	{
		// Assign properties from otherConfig to config
		_.assign( config, otherConfig );
	};

	return config;

} );