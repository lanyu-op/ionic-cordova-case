'use strict';

define( function( require )
{

	require( 'angularAMD' ).service( 'ClientService', function()
	{
		/** External **/
		//var socket = require( 'socketio' );
		//var when = require( 'when' );

		/** Core **/
		var Debug = require( 'agCore/Debug' );
		
		/** Client **/
		var Config = require( 'config/Config' );
		
		var service = {};
		
		service.isLoggedIn = function()
		{
			// @TODO: replace this
			return true;
		};
		
		return service;

	} );

} );