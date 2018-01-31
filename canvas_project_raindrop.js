/*Author: Alicia Wang*/

var numSlider;
var rainLevel;

//update slider info
function update(val)
{
	rainLevel.innerHTML = parseInt(numSlider.value);
}

//get client mouse position on canvas
function getMousePos(c, e) {
    var rect = c.getBoundingClientRect();
    return {
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    };
}

//getting somewhat random x positions
function randomX(c, e)
{
	var pos = getMousePos(c, e);
    posx = pos.x;
	
	var x = Math.random()*200 + posx - 100; //randomize position a bit, center on mouse, follow mouse
	return x;
}

//getting somewhat random y positions
function randomY(c, e)
{
	var pos = getMousePos(c, e);
  posy = pos.y;
	
	var y = Math.random()*200 + posy - 100;
	return y;
}

//drawing rain
function drawRaindrop(g,c,e)
{
	g.fillStyle = "rgba(77,79,204,1)";
	g.beginPath();
	g.arc(randomX(c,e), randomY(c,e), 2, 0, 2*Math.PI);
	g.fill();
}