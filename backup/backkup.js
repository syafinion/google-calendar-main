var key = "AIzaSyAbGpD_qYn1WO6KLHzllI2QXiNAP3ZOeLY";
var calendarid = "syafiq@worq.space";

var today = new Date();

$.ajax({
	type: "GET",
	url: encodeURI(
		"https://www.googleapis.com/calendar/v3/calendars/" +
			calendarid +
			"/events?fields=items&key=" +
			key
	),
	dataType: "json",
	success: function(response) {
		var item = response.items;
		var data = "";
		for (var i = 0; i < item.length; i++) {

			var dataDate =  moment(item[i].start.dateTime).format("YYYY-MM-DD");
			dataDate = new Date(dataDate);
			console.log(dataDate);

			if(dataDate >= today){

				var dater = moment(item[i].start.dateTime).format(
					"dddd, MMMM Do YYYY, h:mm a"
				);


				data += "<div class='card'>"
				data += "<div class='circle'> <h2>Events</h2> </div>"
				data +=	"<div class='content'>"
				data += "<p>" + dater + "</p>";
				data += "<p>" + item[i].summary + "</p>";
				data += "<p>" + item[i].description + "</p>";
				data +=
					"<a class='cal_link' target='_blank' href='" +
					item[i].htmlLink +
					"'>Learn More</a>";
				data += "</div>";
				data += "</div>";

			}
		}
		$("#mycalendar").html(data);
		console.log(item);
	}
});