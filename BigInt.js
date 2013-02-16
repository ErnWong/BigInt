( function( ctx ) {

	var base = 1000;

	function BigInt() {

	}

	if ( typeof define === "function" && define.amd ) {
		
	} else {
		ctx.BigInt = BigInt;
	}

} )( this );
