/*Author: Alicia Wang*/

var c;

function init()
{
  c = document.getElementById("drawPanel");
	var g = c.getContext("2d");

	numSlider = document.getElementById("num");
	rainLevel = document.getElementById("level");
	
	//draw rain
	c.addEventListener("click", function(e)
	{
		for(var i = 0; i < numSlider.value; i++)
		{	
			drawRaindrop(g,c,e);
		}
	});
	
	/*BACKGROUND STUFF*/
	
	//draw ground
	g.fillStyle = "rgba(77,79,204,1)";
	g.fillRect(0,400,800,100);
	//draw handle
	g.lineWidth=6;
	g.strokeStyle = "#757582";
	g.beginPath();
	g.moveTo(395,330);
	g.lineTo(395,220);
	g.stroke();
	//draw arms
	g.lineWidth=5;
	g.strokeStyle = "#825c5b";
	g.beginPath();
	g.moveTo(345,320);
	g.lineTo(320,350);
	g.stroke();
	g.moveTo(355,320);
	g.lineTo(395,320);
	g.stroke();
	//draw head
	g.fillStyle = "rgba(130,92,91,0.9)";
	g.beginPath();
	g.arc(350,280,20,0,Math.PI*2);
	g.fill();
	//draw hat
	g.fillStyle = "rgba(244,225,12,0.8)";
	g.beginPath();
	g.arc(350,280,25,0*Math.PI,1.1*Math.PI,true);
	g.fill();
	//draw dress (triangle)
	g.fillStyle = "rgba(244,225,12,0.8)";
	g.beginPath();
	g.moveTo(350,300);
	g.lineTo(325,375);
	g.lineTo(375,375);
	g.fill();
	//draw legs
	g.fillStyle = "rgba(130,92,91,0.9)";
	g.fillRect(338,375,6,25);
	g.fillRect(355,375,6,25);
	//draw umbrella
	g.fillStyle = "rgba(244,225,12,0.8)";
	g.beginPath();
	g.arc(395,250,75,0*Math.PI,1*Math.PI,true);
	g.fill();
	
	
}