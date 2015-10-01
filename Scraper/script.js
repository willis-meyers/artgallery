$(document).ready(function(){

	$.get("https://api.import.io/store/data/20073f65-5520-431f-8ba9-a798e4d4c202/_query?input/webpage/url=http%3A%2F%2Foaklandartmurmur.org%2Fexhibitions%2F&_user=e12292e8-0b26-4761-8748-3516c5636791&_apikey=e12292e80b26476187483516c5636791e741d7925906da53c11bda587e6bf4dfd4cde8255e62266a19e44e717ab91bdb1ada7c358185ebaa049ab060e19dca9ba51b8d20de4f82444440e59d083609e4", 
		function( data ) {
		var returnedEvents = data;
		results = returnedEvents.results;
		console.log(results);
			$( "div.event-1" ).text( "Event: "+results[0].featureevent_value);
			$( "div.date-1" ).text( "Date: "+results[0].eventdates_value);
			$( "div.location-1" ).text( "Location: "+results[0].eventgallery_value);
			$( "img.image-1" ).attr("src", results[0].featured_image);

			$( "div.event-2" ).text( "Event: "+results[1].featureevent_value);
			$( "div.date-2" ).text( "Date: "+results[1].eventdates_value);
			$( "div.location-2" ).text( "Location: "+results[1].eventgallery_value);
			$( "img.image-2" ).attr("src", results[1].featured_image);


			$( "div.event-3" ).text( "Event: "+results[2].featureevent_value);
			$( "div.date-3" ).text( "Date: "+results[2].eventdates_value);
			$( "div.location-3" ).text( "Location: "+results[2].eventgallery_value);
			$( "img.image-3" ).attr("src", results[2].featured_image);
	});

});

