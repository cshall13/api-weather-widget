
$(document).ready(()=>{

	$('#weather-form').submit(function(event){
		event.preventDefault();
		var zipCode = $('#zip-code').val();
		console.log(zipCode);
	});

	var canvas = $('#weather-canvas');
	var context = canvas[0].getContext('2d')

	var assumedTemperature = 65;

	var currentPercent = 0;

	function animateCircle(currentArc){
		// draw the inner circle
		context.fillStyle = "#ccc";
		context.beginPath();
		context.arc(155,75,70,Math.PI*0,Math.PI*2);
		context.closePath();
		context.fill();

		// Draw the outter line
		// 5px wide
		context.lineWidth = 5;
		context.strokeColor ='#ffff00';
		context.beginPath();
		context.arc(155,75,75,Math.PI*1.5,(Math.PI*2*currentArc) + Math.PI*1.5);
		context.stroke();
		// update the current percentage
		currentPercent++
		if(currentPercent < assumedTemperature){
			requestAnimationFrame(function(){
				animateCircle(currentPercent/100);
			});
		}
	}

	animateCircle();

});
