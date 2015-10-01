$(document).ready(function(){

	$.get("https://api.import.io/store/data/20073f65-5520-431f-8ba9-a798e4d4c202/_query?input/webpage/url=http%3A%2F%2Foaklandartmurmur.org%2Fexhibitions%2F&_user=e12292e8-0b26-4761-8748-3516c5636791&_apikey=e12292e80b26476187483516c5636791e741d7925906da53c11bda587e6bf4dfd4cde8255e62266a19e44e717ab91bdb1ada7c358185ebaa049ab060e19dca9ba51b8d20de4f82444440e59d083609e4", 
		function( data ) {
		var returnedEvents = data;
		results = returnedEvents.results;
		console.log(results);

		for (var i = 0; i <results.length; i++) {
          (function() {
          	var image = results[i].featured_image;
          	var event_name = results[i].featureevent_value;
          	var location = results[i].eventgallery_value;

          	console.log(image);
          	console.log(event_name);
          	console.log(location);

          	createEventDiv(image, event_name, location);
          	})(i);
         };
	});

});

function createEventDiv(image, event_name, location) {

outerDiv = document.createElement("div");
outerDiv.className = "event_instance";
console.log(outerDiv);

innerImgDiv = document.createElement("div");
innerEventNameDiv = document.createElement("div");
innerLocationDiv = document.createElement("div");
outerDiv.appendChild(innerEventNameDiv);
outerDiv.appendChild(innerLocationDiv);
outerDiv.appendChild(innerImgDiv);
imgEl = document.createElement("img");
imgEl.src = image;
innerImgDiv.appendChild(imgEl);
innerEventNameDiv.innerText = event_name;
innerLocationDiv.innerText = location;
console.log(outerDiv);

resultsDiv = document.getElementsByClassName("results");
resultsDiv[0].appendChild(outerDiv);
}
