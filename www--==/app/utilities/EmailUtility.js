'use strict';

define( function( requirejs )
{

	var utility = {};

	utility.doesEmailMatch = function( email1, email2 )
	{
		return email1 === email2;
	};

	utility.isValidEmail = function( email )
	{
		var regex = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
		return regex.test( email );
	};

	return utility;

} );