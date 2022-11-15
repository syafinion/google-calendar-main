
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
				var enddater = moment(item[i].end.dateTime).format(
					"dddd, MMMM Do YYYY, h:mm a"
				);

				var startDay = moment(item[i].start.dateTime).format(
					"Do"
				);

				var startMonth = moment(item[i].start.dateTime).format(
					"MMM".toLocaleString('en-US', { month: 'short' })
				);

                var startFull = moment(item[i].start.dateTime).format(
					"Do MMM"
				);

				var startTime = moment(item[i].start.dateTime).format(
					"h:mm a"
				);

				var endTime = moment(item[i].end.dateTime).format(
					"h:mm a"
				);
                
                data += "<article class='card fl-left'>";
                data += "<section class='date'>";
                data += "<time datetime=" + startFull + ">";
                data += "<span>" + startDay + "</span><span>" + startMonth + "</span>";
        data += "</time>";
      data += "</section>";
      data += "<section class='card-cont'>";
      data += "<small>dj khaled</small>";
      data += "<h3>live in sydney</h3>";
      data += "<div class='even-date'>";
      data += "<i class='fa fa-calendar'></i>"
      data += "<time>";
      data += "<span>wednesday 28 december 2014</span>";
      data += "<span>08:55pm to 12:00 am</span>";
      data += "</time>";
      data += "</div>";
      data += "<div class='even-info'>"
      data += "<i class='fa fa-map-marker'></i>"
      data += "<p>";
      data += "nexen square for people australia, sydney";
      data += "</p>";
      data += "</div>";
      data += "<a href='#'>tickets</a>";
      data += "</section>";
      data += "</article>";
			}
		}
		$("#mycalendar").html(data);
		console.log(item);
	}
});