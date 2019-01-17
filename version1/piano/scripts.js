
var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

var keyPressed = document.getElementById("keyPressed");

reset();

function reset() {
	// white keys
	ctx.fillStyle = "#FFFFFF";
	ctx.fillRect(0,0,50,300);
	ctx.fillRect(0,0,1000,300);

	// black keys
	resetBlackKeys();
}

function resetBlackKeys() {
	ctx.fillStyle = "#000000";
	// key borders
	for (var x_pos = 49; x_pos < 700; x_pos += 50) {
		ctx.fillRect(x_pos,0,2,300);
	}

	for (var x_pos = 35; x_pos < 700; x_pos += 50) {
		if (x_pos != 135 && x_pos != 335 && x_pos != 485 && x_pos != 685) {
			ctx.fillStyle = "#000000";
			ctx.fillRect(x_pos,0,30,200);
		}
	}
}

function getMousePos (canvas, event) {
	var rect = canvas.getBoundingClientRect();
    return {
      x: event.clientX - rect.left,
      y: event.clientY - rect.top
    };
}

canvas.addEventListener('mousedown', function(event) {
	mouse_pos = getMousePos(canvas, event);

	var blackKey = false;
	// check if black key first
	if (mouse_pos.x >= 35 && mouse_pos.x <= 65
		&& mouse_pos.y >= 0 && mouse_pos.y <= 200) {
		// C3s
		blackKey = true;
		keyPressed.innerHTML = "C3# / D3&#x266d";
		var audio = new Audio('audio/C3s.wav');
		audio.play();
		ctx.fillStyle = "#545454";
		ctx.fillRect(36,0,28,199);	
	} else if (mouse_pos.x >= 85 && mouse_pos.x <= 115
		&& mouse_pos.y >= 0 && mouse_pos.y <= 200) {
		// D3s
		blackKey = true;
		keyPressed.innerHTML = "D3# / E3&#x266d";
		var audio = new Audio('audio/D3s.wav');
		audio.play();
		ctx.fillStyle = "#545454";
		ctx.fillRect(86,0,28,199);	
	} else if (mouse_pos.x >= 185 && mouse_pos.x <= 215
		&& mouse_pos.y >= 0 && mouse_pos.y <= 200) {
		// F3s
		blackKey = true;
		keyPressed.innerHTML = "F3# / G3&#x266d";
		var audio = new Audio('audio/F3s.wav');
		audio.play();
		ctx.fillStyle = "#545454";
		ctx.fillRect(186,0,28,199);	
	} else if (mouse_pos.x >= 235 && mouse_pos.x <= 265
		&& mouse_pos.y >= 0 && mouse_pos.y <= 200) {
		// G3s
		blackKey = true;
		keyPressed.innerHTML = "G3# / A3&#x266d";
		var audio = new Audio('audio/G3s.wav');
		audio.play();
		ctx.fillStyle = "#545454";
		ctx.fillRect(236,0,28,199);	
	} else if (mouse_pos.x >= 285 && mouse_pos.x <= 315
		&& mouse_pos.y >= 0 && mouse_pos.y <= 200) {
		// A3s
		blackKey = true;
		keyPressed.innerHTML = "A3# / B3&#x266d";
		var audio = new Audio('audio/A3s.wav');
		audio.play();
		ctx.fillStyle = "#545454";
		ctx.fillRect(286,0,28,199);	
	} else if (mouse_pos.x >= 385 && mouse_pos.x <= 415
		&& mouse_pos.y >= 0 && mouse_pos.y <= 200) {
		// C4s
		blackKey = true;
		keyPressed.innerHTML = "C4# / D4&#x266d";
		var audio = new Audio('audio/C4s.wav');
		audio.play();
		ctx.fillStyle = "#545454";
		ctx.fillRect(386,0,28,199);	
	} else if (mouse_pos.x >= 435 && mouse_pos.x <= 465
		&& mouse_pos.y >= 0 && mouse_pos.y <= 200) {
		// D4s
		blackKey = true;
		keyPressed.innerHTML = "D4# / E4&#x266d";
		var audio = new Audio('audio/D4s.wav');
		audio.play();
		ctx.fillStyle = "#545454";
		ctx.fillRect(436,0,28,199);	
	} else if (mouse_pos.x >= 535 && mouse_pos.x <= 565
		&& mouse_pos.y >= 0 && mouse_pos.y <= 200) {
		// F4s
		blackKey = true;
		keyPressed.innerHTML = "F4# / G4&#x266d";
		var audio = new Audio('audio/F4s.wav');
		audio.play();
		ctx.fillStyle = "#545454";
		ctx.fillRect(536,0,28,199);	
	} else if (mouse_pos.x >= 585 && mouse_pos.x <= 615
		&& mouse_pos.y >= 0 && mouse_pos.y <= 200) {
		// G4s
		blackKey = true;
		keyPressed.innerHTML = "G4# / A4&#x266d";
		var audio = new Audio('audio/G4s.wav');
		audio.play();
		ctx.fillStyle = "#545454";
		ctx.fillRect(586,0,28,199);	
	} else if (mouse_pos.x >= 635 && mouse_pos.x <= 665
		&& mouse_pos.y >= 0 && mouse_pos.y <= 200) {
		// A4s
		blackKey = true;
		keyPressed.innerHTML = "A4# / B4&#x266d";
		var audio = new Audio('audio/A4s.wav');
		audio.play();
		ctx.fillStyle = "#545454";
		ctx.fillRect(636,0,28,199);	
	}

	// if not a black key, check white keys
	if (!blackKey) {
		if (mouse_pos.x >= 0 && mouse_pos.x <= 49) {
		// C3
		keyPressed.innerHTML = "C3";
		var audio = new Audio('audio/C3.wav');
		audio.play();
		ctx.fillStyle = "#CBCBCB";
		ctx.fillRect(0,0,50,300);	
	} else if (mouse_pos.x >= 50 && mouse_pos.x <= 99) {
		// D3
		keyPressed.innerHTML = "D3";
		var audio = new Audio('audio/D3.wav');
		audio.play();
		ctx.fillStyle = "#CBCBCB";
		ctx.fillRect(50,0,50,300);
	} else if (mouse_pos.x >= 100 && mouse_pos.x <= 149) {
		// E3
		keyPressed.innerHTML = "E3";
		var audio = new Audio('audio/E3.wav');
		audio.play();
		ctx.fillStyle = "#CBCBCB";
		ctx.fillRect(100,0,50,300);
	} else if (mouse_pos.x >= 150 && mouse_pos.x <= 199) {
		// F3
		keyPressed.innerHTML = "F3";
		var audio = new Audio('audio/F3.wav');
		audio.play();
		ctx.fillStyle = "#CBCBCB";
		ctx.fillRect(150,0,50,300);
	} else if (mouse_pos.x >= 200 && mouse_pos.x <= 249) {
		// G3
		keyPressed.innerHTML = "G3";
		var audio = new Audio('audio/G3.wav');
		audio.play();
		ctx.fillStyle = "#CBCBCB";
		ctx.fillRect(200,0,50,300);
	} else if (mouse_pos.x >= 250 && mouse_pos.x <= 299) {
		// A3
		keyPressed.innerHTML = "A3";
		var audio = new Audio('audio/A3.wav');
		audio.play();
		ctx.fillStyle = "#CBCBCB";
		ctx.fillRect(250,0,50,300);
	} else if (mouse_pos.x >= 300 && mouse_pos.x <= 349) {
		// B3
		keyPressed.innerHTML = "B3";
		var audio = new Audio('audio/B3.wav');
		audio.play();
		ctx.fillStyle = "#CBCBCB";
		ctx.fillRect(300,0,50,300);
	} else if (mouse_pos.x >= 350 && mouse_pos.x <= 399) {
		// C4
		keyPressed.innerHTML = "C4";
		var audio = new Audio('audio/C4.wav');
		audio.play();
		ctx.fillStyle = "#CBCBCB";
		ctx.fillRect(350,0,50,300);
	}  else if (mouse_pos.x >= 400 && mouse_pos.x <= 449) {
		// D4
		keyPressed.innerHTML = "D4";
		var audio = new Audio('audio/D4.wav');
		audio.play();
		ctx.fillStyle = "#CBCBCB";
		ctx.fillRect(400,0,50,300);
	} else if (mouse_pos.x >= 450 && mouse_pos.x <= 499) {
		// E4
		keyPressed.innerHTML = "E4";
		var audio = new Audio('audio/E4.wav');
		audio.play();
		ctx.fillStyle = "#CBCBCB";
		ctx.fillRect(450,0,50,300);
	} else if (mouse_pos.x >= 500 && mouse_pos.x <= 549) {
		// F4
		keyPressed.innerHTML = "F4";
		var audio = new Audio('audio/F4.wav');
		audio.play();
		ctx.fillStyle = "#CBCBCB";
		ctx.fillRect(500,0,50,300);
	} else if (mouse_pos.x >= 550 && mouse_pos.x <= 599) {
		// G4
		keyPressed.innerHTML = "G4";
		var audio = new Audio('audio/G4.wav');
		audio.play();
		ctx.fillStyle = "#CBCBCB";
		ctx.fillRect(550,0,50,300);
	} else if (mouse_pos.x >= 600 && mouse_pos.x <= 649) {
		// A4
		keyPressed.innerHTML = "A4";
		var audio = new Audio('audio/A4.wav');
		audio.play();
		ctx.fillStyle = "#CBCBCB";
		ctx.fillRect(600,0,50,300);
	} else if (mouse_pos.x >= 650 && mouse_pos.x <= 699) {
		// B4
		keyPressed.innerHTML = "B4";
		var audio = new Audio('audio/B4.wav');
		audio.play();
		ctx.fillStyle = "#CBCBCB";
		ctx.fillRect(650,0,50,300);
	} else if (mouse_pos.x >= 700 && mouse_pos.x <= 749) {
		// C5
		keyPressed.innerHTML = "C5";
		var audio = new Audio('audio/C5.wav');
		audio.play();
		ctx.fillStyle = "#CBCBCB";
		ctx.fillRect(700,0,50,300);
	}

		resetBlackKeys();
	}
	
});

canvas.addEventListener('mouseup', function(event) {
	reset();
});

