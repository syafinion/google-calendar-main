//insert API key
var key = "AIzaSyBnsId8y-m8HUAwa2lwsmaLC2J-A15x1NE";
//insert calendar ID
var calendarid = "syafiqmajid286@gmail.com";

//insert API key
//var key = "AIzaSyAbGpD_qYn1WO6KLHzllI2QXiNAP3ZOeLY";
//insert calendar ID
//var calendarid = "c_i4lk8gh3k2ksl2p7bj51f3fv0k@group.calendar.google.com";



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

                var SdateOnly = moment(item[i].start.dateTime).format(
                    "Do MMMM YYYY"
                );

                var EdateOnly = moment(item[i].end.dateTime).format(
                    "Do MMMM YYYY"
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


                data += "<div class='card mb-4'>";
                data += "<div class='img-container'>";
                if(imageUrl!=""){
                	data += "<img class='image card-img-top' src='"+imageUrl+"'>";
                }
                data += "<div class='overlay'>";
                data += "<button class='btn btn-outline-secondary btn-sm'><i class='fas fa-cart-plus mr-2'></i>Add To Calendar</button>";
                data += "</div>";
                data += "</div>";

                data += "<div class='card-body'>";
                data += "<h5 class='card-title'>" + item[i].summary + "</h5>";
                data += "<h6 class='card-subtitle mb-2 text-muted'>" + SdateOnly + " , " + startTime + " - " + endTime + "</h6>";
                data += "<p class='card-text'><i class='fa-solid fa-location-dot'></i> " + item[i].location + "</p><h6><a href='" + locationLink + "'> (Map)</a></h6>";
                data += "</div>";
                data += "</div>";
				
				
			}
		}
		$("#mycalendar").html(data);
		// console.log(item);
	}
});