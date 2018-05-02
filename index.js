
var myWheel = new Winwheel({
	'canvasId'    : 'canvas',
    'numSegments' : 37,
    'lineWidth'   : 2,
    'innerRadius' : 300,
    'segments'    :
        [
            {'strokeStyle' : 'white','textStrokeStyle' : 'white','fillStyle' : 'green', 'text' : '0'},
            {'strokeStyle' : 'white','textStrokeStyle' : 'white','fillStyle' : 'black', 'text' : '28'},
            {'strokeStyle' : 'white','textStrokeStyle' : 'white','fillStyle' : 'red', 'text' : '9'},
            {'strokeStyle' : 'white','textStrokeStyle' : 'white','fillStyle' : 'black', 'text' : '26'},
            {'strokeStyle' : 'white','textStrokeStyle' : 'white','fillStyle' : 'red', 'text' : '30'},
            {'strokeStyle' : 'white','textStrokeStyle' : 'white','fillStyle' : 'black', 'text' : '11'},
            {'strokeStyle' : 'white','textStrokeStyle' : 'white','fillStyle' : 'red', 'text' : '7'},
            {'strokeStyle' : 'white','textStrokeStyle' : 'white','fillStyle' : 'black', 'text' : '20'},
            {'strokeStyle' : 'white','textStrokeStyle' : 'white','fillStyle' : 'red', 'text' : '32'},
            {'strokeStyle' : 'white','textStrokeStyle' : 'white','fillStyle' : 'black', 'text' : '17'},
            {'strokeStyle' : 'white','textStrokeStyle' : 'white','fillStyle' : 'red', 'text' : '5'},
            {'strokeStyle' : 'white','textStrokeStyle' : 'white','fillStyle' : 'black', 'text' : '22'},
            {'strokeStyle' : 'white','textStrokeStyle' : 'white','fillStyle' : 'red', 'text' : '34'},
            {'strokeStyle' : 'white','textStrokeStyle' : 'white','fillStyle' : 'black', 'text' : '15'},
            {'strokeStyle' : 'white','textStrokeStyle' : 'white','fillStyle' : 'red', 'text' : '3'},
            {'strokeStyle' : 'white','textStrokeStyle' : 'white','fillStyle' : 'black', 'text' : '24'},
            {'strokeStyle' : 'white','textStrokeStyle' : 'white','fillStyle' : 'red', 'text' : '36'},
            {'strokeStyle' : 'white','textStrokeStyle' : 'white','fillStyle' : 'black', 'text' : '13'},
            {'strokeStyle' : 'white','textStrokeStyle' : 'white','fillStyle' : 'red', 'text' : '1'},
            {'strokeStyle' : 'white','textStrokeStyle' : 'white','fillStyle' : 'green', 'text' : '00'},
            {'strokeStyle' : 'white','textStrokeStyle' : 'white','fillStyle' : 'red', 'text' : '27'},
            {'strokeStyle' : 'white','textStrokeStyle' : 'white','fillStyle' : 'black', 'text' : '10'},
            {'strokeStyle' : 'white','textStrokeStyle' : 'white','fillStyle' : 'red', 'text' : '25'},
            {'strokeStyle' : 'white','textStrokeStyle' : 'white','fillStyle' : 'black', 'text' : '29'},
            {'strokeStyle' : 'white','textStrokeStyle' : 'white','fillStyle' : 'red', 'text' : '12'},
            {'strokeStyle' : 'white','textStrokeStyle' : 'white','fillStyle' : 'black', 'text' : '8'},
            {'strokeStyle' : 'white','textStrokeStyle' : 'white','fillStyle' : 'red', 'text' : '19'},
            {'strokeStyle' : 'white','textStrokeStyle' : 'white','fillStyle' : 'black', 'text' : '31'},
            {'strokeStyle' : 'white','textStrokeStyle' : 'white','fillStyle' : 'red', 'text' : '18'},
            {'strokeStyle' : 'white','textStrokeStyle' : 'white','fillStyle' : 'black', 'text' : '6'},
            {'strokeStyle' : 'white','textStrokeStyle' : 'white','fillStyle' : 'red', 'text' : '21'},
            {'strokeStyle' : 'white','textStrokeStyle' : 'white','fillStyle' : 'black', 'text' : '33'},
            {'strokeStyle' : 'white','textStrokeStyle' : 'white','fillStyle' : 'red', 'text' : '16'},
            {'strokeStyle' : 'white','textStrokeStyle' : 'white','fillStyle' : 'black', 'text' : '4'},
            {'strokeStyle' : 'white','textStrokeStyle' : 'white','fillStyle' : 'red', 'text' : '23'},
            {'strokeStyle' : 'white','textStrokeStyle' : 'white','fillStyle' : 'black', 'text' : '35'},
            {'strokeStyle' : 'white','textStrokeStyle' : 'white','fillStyle' : 'red', 'text' : '14'},
            {'strokeStyle' : 'white','textStrokeStyle' : 'white','fillStyle' : 'black', 'text' : '2'}

        ],

        'animation' :
        {
        'type'     : 'spinToStop',
        'duration' : 5,
        'spins'    : 8,
 
            // Remember to do something after the animation has finished specify callback function.
        'callbackFinished' : 'alertPrize()',
 
            // During the animation need to call the drawTriangle() to re-draw the pointer each frame.
         'callbackAfter' : 'drawTriangle()'
        }



})

function alertPrize(){
    var winningSegment = myWheel.getIndicatedSegment();
    alert("You have won " + winningSegment.text + "!");
    drawTriangle()
}

function drawTriangle()
    {
        // Get the canvas context the wheel uses.
        var ctx = myWheel.ctx;
 
        ctx.strokeStyle = 'navy';     // Set line colour.
        ctx.fillStyle   = 'aqua';     // Set fill colour.
        ctx.lineWidth   = 2;
        ctx.beginPath();              // Begin path.
        ctx.moveTo(470, 2);           // Move to initial position.
        ctx.lineTo(530, 2);           // Draw lines to make the shape.
        ctx.lineTo(500, 37);
        ctx.lineTo(471, 2);
        ctx.stroke();                 // Complete the path by stroking (draw lines).
        ctx.fill();                   // Then fill.
    }



// var c = document.getElementById("canvas");
// var ctx = c.getContext("2d");
// ctx.beginPath();
// ctx.arc(550, 550, 440, 0, 2 * Math.PI);
// ctx.stroke();

// ctx.strokeStyle = "#FFC8B2";
// ctx.lineWidth = "2";
// ctx.beginPath();
// ctx.moveTo(550, 550);
// ctx.lineTo(275, 210);
// ctx.closePath();
// ctx.stroke();

// ctx.moveTo(550, 550)
// ctx.lineTo(375, 150)
// ctx.closePath();
// ctx.stroke();

// ctx.moveTo(550, 550)
// ctx.lineTo(470, 115)
// ctx.closePath();
// ctx.stroke();

// ctx.moveTo(550, 550)
// ctx.lineTo(560, 110)
// ctx.closePath();
// ctx.stroke();

