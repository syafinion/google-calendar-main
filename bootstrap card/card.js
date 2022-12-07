//insert API key
var key = "AIzaSyBnsId8y-m8HUAwa2lwsmaLC2J-A15x1NE";
//insert calendar ID
var calendarid = "syafiqmajid286@gmail.com";

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

		console.log(item);

		for (var i = 0; i < item.length; i++) {

			if(item[i].attachments != undefined){
				var imageId = item[i].attachments[0].fileId;
				var imageUrl = "http://drive.google.com/uc?export=view&id="+imageId;
			}else{
				var imageId = "";
				var imageUrl = "";
			}

            if(item[i].location != undefined){
                var locationId = item[i].location;
                var locationLink = "https://maps.google.com/maps?hl=en&q="+locationId;
            }
            else {
                var locationId = "";
                var locationLink = "";
            }


            //https://maps.google.com/maps?hl=en&q=WORQ%20TTDI%2C%20Lot%203A-01A%2C%20Level%203A%2C%20Glo%20Damansara%20Shopping%20Mall%2C%20699%2C%20Jalan%20Damansara%2C%20Taman%20Tun%20Dr%20Ismail%2C%2060000%20Kuala%20Lumpur%2C%20Wilayah%20Persekutuan%20Kuala%20Lumpur%2C%20Malaysia

			var dataDate =  moment(item[i].start.dateTime).format("YYYY-MM-DD");
			dataDate = new Date(dataDate);
			// console.log(dataDate);

			if(dataDate >= today){

				var dater = moment(item[i].start.dateTime).format(
					"dddd, MMMM Do YYYY, h:mm a"
				);
				var enddater = moment(item[i].end.dateTime).format(
					"dddd, MMMM Do YYYY, h:mm a"
				);
                var day = moment(item[i].end.dateTime).format(
					"dddd"
				);
				var startDay = moment(item[i].start.dateTime).format(
					"Do"
				);

				var startMonth = moment(item[i].start.dateTime).format(
					"MMM"
				);


				var startTime = moment(item[i].start.dateTime).format(
					"h:mm a"
				);

				var endTime = moment(item[i].end.dateTime).format(
					"h:mm a"
				);
				data += "<div class='col-md-6 col-lg-4'>";
                data += "<div class='card'>";
                data += "<div class='card-header'>";
                data += "<h5 class='card=title'><span class='gradient'>WORQ</span> Events</h5>";
                data += "</div>";
                if(imageUrl!=""){
                	data += "<img class='card-img-top img-fluid' src='"+imageUrl+"'>";
                }
                data += "<div class='card-body'>";
                data += "<div class='widget-49'>";
                data += "<div class='widget-49-title-wrapper'>";
                data += "<div class='widget-49-date-primary'>";
                data += "<span class='widget-49-date-day'>" + startDay + "</span>";
				data += "<span class='widget-49-date-month'>" + startMonth + "</span>";
                data += "</div>";
				data += "<div class='widget-49-meeting-info'>";
                data += "<span class='widget-49-pro-title'>" + item[i].summary + "</span>";
                data += "<span class='widget-49-meeting-time'>" + day + ", " + startTime + " to " + endTime + "</span>";
                data += "</div>";
                data += "</div>";
                data += "</div>";
                data += "<ul class='list-group list-group-flush'>";
                data += "<li class='list-group-item'><p>" + item[i].description + "</p></li>";
                data += "<li class='list-group-item'><p><i class='fa-solid fa-location-dot'></i> " + item[i].location + "<a href='" + locationLink + "'> (Map)</a></p></li>";
                data += "<li class='list-group-item'><p>" + item[i].description + "</p></li>";
                data += "</ul>";
                data += "<a href='" + item[i].htmlLink + "' class='btn btn-sm btn-flash-border'> Learn More </a>";
                data += "</div>";
                data += "</div>";
                data += "</div>";		
			}
		}
		$("#mycalendar").html(data);
		// console.log(item);
	}
});