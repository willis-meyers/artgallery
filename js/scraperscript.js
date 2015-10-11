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
          	var link = results[i].featured_link;
          	var description = results[i].eventexcerpt_description;
            var event_date = results[i].eventdates_value;

          	createEventDiv(image, event_name, location, link, description, event_date);
          	})(i);
         };
	});

});

function createEventDiv(image, event_name, location, link, description, event_date) {

outerDiv = document.createElement("div");
outerDiv.className = "col-xs-6 col-md-3";
console.log(outerDiv);

innerImgDiv = document.createElement("div");
innerImgDiv.className = "thumbnail";
innerEventNameDiv = document.createElement("h3");
innerEventNameDiv.className = "caption";
innerDescriptionDiv = document.createElement("p");
innerDescriptionDiv.className = "event_description";

innerDateDiv = document.createElement("p");
innerDateDiv.className = "event_date";

moreLink = document.createElement("a");
moreLink.href = link;
moreLink.innerText = "more";

innerEventNameA = document.createElement("a");
innerEventNameDiv.appendChild(innerEventNameA);

innerLocationDiv = document.createElement("div");
innerLocationDiv.className = "location";
outerDiv.appendChild(innerImgDiv);
imgElA = document.createElement("a");
imgEl = document.createElement("img");
imgEl.className = "scraperimage";
imgEl.src = image;
innerImgDiv.appendChild(imgElA);
imgElA.href = link;
console.log(imgElA);
imgElA.appendChild(imgEl);
innerImgDiv.appendChild(innerEventNameDiv);
innerImgDiv.appendChild(innerLocationDiv);
innerImgDiv.appendChild(innerDateDiv);
// innerImgDiv.appendChild(innerDescriptionDiv);


innerEventNameA.href = link;
innerEventNameA.innerText = event_name;
innerLocationDiv.innerText = "Where: "+location;
innerDateDiv.innerText = "Date: "+event_date;
innerDescriptionDiv.innerText = description;
innerDescriptionDiv.appendChild(moreLink);
console.log(outerDiv);

resultsDiv = document.getElementsByClassName("results");
resultsDiv[0].appendChild(outerDiv);
}
