var myCity;

$("document").ready(function(){
	$("#submit-btn").click(function(){
		myCity = $('#city-type').val();
		
		if(myCity === "NYC"){
			$('body').css('background-image', 'url(images/nyc.jpg)');
		} else if(myCity === "Austin"){
			$('body').css('background-image', 'url(images/Austin.jpg)');
		} else if(myCity === "LA"){
			$('body').css('background-image', 'url(images/LA.jpg)');
		} else if(myCity === "SF"){
			$('body').css('background-image', 'url(images/SF.jpg)');
		} else if(myCity === "Sydney"){
			$('body').css('background-image', 'url(images/Sydney.jpg)');
		} else {
			alert("Choose a city from the dropdown.");
		}

		return false;
	});
});