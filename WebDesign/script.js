/*
	Student Name: Gabriella Sgro
	File Name: script.js
	Date: 4/26/22
*/

//Digital Clock
setInterval(showTime, 1000);
function showTime() {
    let ReadTime = new Date();
    let hour = ReadTime.getHours();
    let min = ReadTime.getMinutes();
    let sec = ReadTime.getSeconds();
    am_pm = "AM";
  
    if (hour > 12) {
        hour -= 12;
        am_pm = " PM";
    }
    if (hour == 0) {
        hr = 12;
        am_pm = " AM";
    }
  
    hour = hour < 10 ? "0" + hour : hour;
    min = min < 10 ? "0" + min : min;
    sec = sec < 10 ? "0" + sec : sec;
  

	const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];  // List of months
    let month = months[ReadTime.getMonth()];  // use ReadTime to select month from list

	const days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];  // List of days
    let day = days[ReadTime.getDay()];  // use ReadTime to select day from list
	
    let currentTime = "Today is " + day + " " + month + " " + ReadTime.getDate() + ", " + ReadTime.getFullYear() + " " + hour + ":" + min + ":" + sec + am_pm;  // Format date info 


   document.getElementById("clock").innerHTML = currentTime;
}
showTime();

//Hide or Display Decorative Gifs button
function hideGifs() {
	var gifs = document.getElementById("page-decor");
	var gifsbtn = document.getElementById("gifs-btn");
	
	if (gifs.style.display === "grid") {
		gifs.style.display = "none";
		gifsbtn.innerHTML = "Display Gifs";
	} else {
		gifs.style.display = "grid";
		gifsbtn.innerHTML = "Hide Gifs";
	}
}