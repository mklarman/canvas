var c = document.getElementById("canvas");
var ctx = c.getContext("2d");
ctx.beginPath();
ctx.arc(550, 550, 440, 0, 2 * Math.PI);
ctx.stroke();

ctx.strokeStyle = "#FFC8B2";
ctx.lineWidth = "2";
ctx.beginPath();
ctx.moveTo(550, 550);
ctx.lineTo(275, 210);
ctx.closePath();
ctx.stroke();

ctx.moveTo(550, 550)
ctx.lineTo(375, 150)
ctx.closePath();
ctx.stroke();

ctx.moveTo(550, 550)
ctx.lineTo(470, 115)
ctx.closePath();
ctx.stroke();

ctx.moveTo(550, 550)
ctx.lineTo(560, 110)
ctx.closePath();
ctx.stroke();

