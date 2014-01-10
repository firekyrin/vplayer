/* this script is dependent on jquery library */

$(document).ready(function(){

	var video1 = document.getElementById("video1");

	video1.addEventListener("loadstart", function(){
		console.log((new Date()).getTime(), "loadstart");
	});

	video1.addEventListener("progress", function(){
		console.log((new Date()).getTime(), "progress");
	});

	timeFormat = {
                showHour: false,
                showMin: true,
                showSec: true,
                padHour: false,
                padMin: true,
                padSec: true,
                sepHour: ":",
                sepMin: ":",
                sepSec: ""
        };
	
        function ConvertTime(s) { // function used on jPlayer.prototype._convertTime to enable per instance options.
                        s = (s && typeof s === 'number') ? s : 0;

                        var myTime = new Date(s * 1000),
                                hour = myTime.getUTCHours(),
                                min = timeFormat.showHour ? myTime.getUTCMinutes() : myTime.getUTCMinutes() + hour * 60,
                                sec = timeFormat.showMin ? myTime.getUTCSeconds() : myTime.getUTCSeconds() + min * 60,
                                strHour = (timeFormat.padHour && hour < 10) ? "0" + hour : hour,
                                strMin = (timeFormat.padMin && min < 10) ? "0" + min : min,
                                strSec = (timeFormat.padSec && sec < 10) ? "0" + sec : sec,
                                strTime = "";

                        strTime += timeFormat.showHour ? strHour + timeFormat.sepHour : "";
                        strTime += timeFormat.showMin ? strMin + timeFormat.sepMin : "";
                        strTime += timeFormat.showSec ? strSec + timeFormat.sepSec : "";

                        return strTime;
        }


	$(".vp-seek-bar").css("width", "100%");

	function setBar(){
		var playbarPercent =  100 * video1.currentTime / video1.duration;
		$(".vp-play-bar").css("width", "" + playbarPercent +"%");
		$(".vp-current-time").text(ConvertTime(video1.currentTime));
		$(".vp-duration").text(ConvertTime(video1.duration));
	}
	setBar();
	setInterval(setBar, 1);
	$(".vp-seek-bar").click(function(e){
		var seekbar_width = $(".vp-seek-bar").width();
		var x = e.pageX - $(".vp-seek-bar").offset().left;
		var p = 100 * x / seekbar_width;
		$(".vp-play-bar").css("width", "" + p +"%");
		video1.currentTime = video1.duration * p / 100;
		$(".vp-current-time").text(ConvertTime(video1.currentTime));
		$(".vp-duration").text(ConvertTime(video1.duration));
	});

});
