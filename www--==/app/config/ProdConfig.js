'use strict';

define( function( requirejs )
{
	
	var GeneralConfig = requirejs( 'config/Config' );
	
	var config = {};
	
	config.url = "prod.site.com";
	config.environment = GeneralConfig.environments.PRODUCTION;
	
	return config;
	
} );