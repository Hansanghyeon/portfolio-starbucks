/**
 * http://www.codrops.com
 *
 * Licensed under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
 * 
 * Copyright 2013, Codrops
 * http://www.codrops.com
 */

	var box = merrywrap.querySelector( '.giftbox' )

	function init() {
		box.addEventListener( 'click', letitsnow );
	}

	function letitsnow() {
        
        
		// https://github.com/daveWid/canvas-snow
		var canvas = document.getElementById("snowfall");
		canvas.width = window.innerWidth;
		canvas.height = document.body.clientHeight;
		// Now the emitter
		var emitter = Object.create(rectangleEmitter);
		emitter.setCanvas(canvas);
		emitter.setBlastZone(0, -10, canvas.width, 1);
		emitter.particle = snow;
		emitter.runAhead(0);
		emitter.start(90);
	}

	init();