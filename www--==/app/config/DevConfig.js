'use strict';

define( function( requirejs )
{
	
	var GeneralConfig = requirejs( 'config/Config' );
	
	var config = {};
	
	config.url = "dev.site.com";
	config.environment = GeneralConfig.environments.DEVELOPMENT;
	
	return config;
	
} );