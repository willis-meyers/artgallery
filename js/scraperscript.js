$(document).ready(function(){

	$.get("https://api.import.io/store/connector/b9960a2d-ab98-4c7e-88ce-868c04aa0c5a/_query?input=webpage/url:http%3A%2F%2Foaklandartmurmur.org%2Fexhibitions%2F&&_apikey=0e440761c7de4ef78db3614c91e340856af82956e5fb5a325401714758d96a472c2b157eaa4684f0a924f82a044f90249f3620cbcfb877616b623865237b1a92571dca5e524b9448c0f3ba63ea392e23", 
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
