//insert API key
var key = "";
//insert calendar ID
var calendarid = "@gmail.com";

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
				data += "<div class='col-lg-4'>";
              	data +=	"<div class='card card-margin'>";
			 	data += "<div class='card-header no-border'>";
				data += "<h5 class='card-title'>WORQ EVENTS</h5>";
                data += "</div>";

                if(imageUrl!=""){
                	data += "<div class='img-fluid'>";
                	data += "<img src='"+imageUrl+"' width='300'>";
                	data += "</div>";
                }
                
				data += "<div class='card-body pt-0'>";
                data += "<div class='widget-49'>";
                data += "<div class='widget-49-title-wrapper'>";
                data += "<div class='widget-49-date-primary'>";
                data += "<span class='widget-49-date-day'>" + startDay + "</span>";
				data += "<span class='widget-49-date-month'>" + startMonth + "</span>";
                data += "</div>";
				data += "<div class='widget-49-meeting-info'>";
                data += "<span class='widget-49-pro-title'>" + item[i].summary + "</span>";
                data += "<span class='widget-49-meeting-time'>" + startTime + " to " + endTime + "</span>";
                data += "</div>";
                data += "</div>";
                data += "<ol class='widget-49-meeting-points'>";
                data +=              "<li class='widget-49-meeting-item'>" + item[i].description + "</span></li>";
                data +=          "</ol>";
				data += "<ol class='widget-49-meeting-points'>";
                data +=              "<li class='widget-49-meeting-item'>" + item[i].location + "</span></li>";
                data +=          "</ol>";
                data +=          "<div class='widget-49-meeting-action'>";
                data +=              "<a href='" + item[i].htmlLink + "' class='btn btn-sm btn-flash-border-primary'> Learn More </a>";
                data +=          "</div>";

				data += 		"</div>";
                data +=      "</div>";
                data +=  "</div>";
				data += "</div>";

			}
		}
		$("#mycalendar").html(data);
		// console.log(item);
	}
});