/*
	Student Name: Student
	File Name: index.js
	Date: 05/16/2026
*/

// Array of learner objects.  Array whiten an array.
// Use same syntax - Last element has no comma! 
var	learners = [
	new learner("20180101", "Class", "Demo", "WebDesign/index.html"),	
	new learner("20180101", "Blank", "Googlx", "https://www.google.com"),
];	
//	console.log(learners[1].firstName)


var date = new Date();
var realMonth = date.getMonth() + 1;
var newh1 = document.createElement("h3");
var aText = document.createTextNode("Today is: " + realMonth + "/" + date.getDate() + "/" + date.getFullYear() );	
newh1.appendChild(aText);	
var parentN = document.getElementById("table01").parentNode;
var firstN = document.getElementById("table01");	
parentN.insertBefore(newh1, firstN);
	
var learnersSize = learners.length;
for (i = 0; i < learnersSize; i++)
   {
	var newRow = document.createElement("tr");
	colList ();	
	if ((i+ 1) < learnersSize) {
		i++;
		colList ();
		}
	document.getElementById("table01").appendChild(newRow);
   }

// var date = new Date();
// document.writeln ("Today is: " + date.getMonth() + "/" + date.getDate() + "/" + date.getFullYear() );

var canvas = document.getElementById("canvas");  // Establish document variable called canvas  
var ctx = canvas.getContext("2d");               // Get 2d method in canvas --> 
var radius = canvas.height / 2;                  // set radious of clock to be one-half height.  
ctx.translate(radius, radius);                   // Set orggin position (x,y)  
radius = radius * 0.90;                          // Reduce the radius to 0.90 of its length to fit properly   
setInterval(drawClock, 1000);                    // call drawClock function every second (or 1000 milllisecond)  


// Object constructor
function learner (semester, firstName, lastName, userAddress )
{
    this.semester = semester;
	this.firstName = firstName;
	this.lastName = lastName;
	this.userAddress = userAddress;
//	this.views = views;
//	this.updateViews = function() {
//		return ++this.views;
//		};
}

function drawClock() {							 // drawClock function   
  drawFace(ctx, radius);						 // call drawFace function  
  drawNumbers(ctx, radius);						 // call drawNumber function  
  drawTime(ctx, radius);						 // call drawTime function   
}

function drawFace(ctx, radius) {				 // drawFace function 
  var grad;										 // create grad variable
  ctx.beginPath();								 // begins a path, or resets the current path
  ctx.arc(0, 0, radius, 0, 2*Math.PI);			 // one of many ways to create a path
  ctx.fillStyle = 'white';						 // set color of arc (area) created 
  ctx.fill();									 // fill the area with color 
// Add image to clock face  
  var img = document.getElementById("ClockLogo"); // set image variavle 
  ctx.drawImage(img, -20, -20, 40, 40); // [clipped (x, x, width, height)], image position, [width, height] 
// ---------------------
  grad = ctx.createRadialGradient(0,0,radius*0.95, 0,0,radius*1.05);
  grad.addColorStop(0, '#333');
  grad.addColorStop(0.5, 'white');
  grad.addColorStop(1, '#333');
  ctx.strokeStyle = grad;
  ctx.lineWidth = radius*0.1;
  ctx.stroke();
  ctx.beginPath();
  ctx.arc(0, 0, radius*0.1, 0, 2*Math.PI);
  ctx.fillStyle = '#333';
  ctx.fill(); 
// Add text to clock face
  ctx.font = radius*0.012 + "em arial";
  ctx.fillStyle = '#0000FF'; 
  ctx.fillText("HTML CS110", 2, -25); 
  
  var tText = 'Spring';
  var date = new Date();
  var realMonth = date.getMonth() + 1; 
  if (realMonth < 6)  
	{tText = tText + ' ' + date.getFullYear();}  
  if (realMonth > 5 && realMonth < 9)
	{tText = 'Summer';
	tText = tText + ' ' + date.getFullYear();}
  if (realMonth > 8)
	{tText = 'Fall';
    tText = tText + ' ' + date.getFullYear();}

  ctx.fillText(tText, 2, 27); 
//  ctx.fillText("Spring 2020", 2, 27);    
 }

function drawNumbers(ctx, radius) {
  var ang;
  var num;
  ctx.fillStyle = '#0000FF';
  ctx.font = radius*0.01 + "em arial";
  ctx.textBaseline="middle";
  ctx.textAlign="center";
  for(num = 1; num < 13; num++){
    ang = num * Math.PI / 6;
    ctx.rotate(ang);
    ctx.translate(0, -radius*0.85);
    ctx.rotate(-ang);
    ctx.fillText(num.toString(), 0, 0);
    ctx.rotate(ang);
    ctx.translate(0, radius*0.85);
    ctx.rotate(-ang);
  }
}

function drawTime(ctx, radius){
    var now = new Date();
    var hour = now.getHours();
    var minute = now.getMinutes();
    var second = now.getSeconds();
    //hour
    hour=hour%12;
    hour=(hour*Math.PI/6)+
    (minute*Math.PI/(6*60))+
    (second*Math.PI/(360*60));
    drawHand(ctx, hour, radius*0.5, radius*0.07);
    //minute
    minute=(minute*Math.PI/30)+(second*Math.PI/(30*60));
    drawHand(ctx, minute, radius*0.8, radius*0.07);
    // second
    second=(second*Math.PI/30);
    drawHand(ctx, second, radius*0.9, radius*0.02);
}

function drawHand(ctx, pos, length, width) {
    ctx.strokeStyle = "#FF0000"; // set color of line 
    ctx.beginPath();
    ctx.lineWidth = width;
    ctx.lineCap = "round";
    ctx.moveTo(0,0);
    ctx.rotate(pos);
    ctx.lineTo(0, -length);
    ctx.stroke();
    ctx.rotate(-pos);
}

function colList ()
   {
//	if (learners[i].semester != "20180101")
	var newCol = document.createElement("td");
	var newAtag = document.createElement("a");
	var aText = document.createTextNode(learners[i].firstName + " " + learners[i].lastName);

	var newHref = document.createAttribute("href");
	newAtag.href = learners[i].userAddress;

//	newAtag.href = "https://www.google.com";	
//	newAtag.textContent = "Go to Example.com";	

//	var newHref = document.createAttribute("href");
//	newHref.value = learners[i].userAddress + "/index.html";
//	newAtag.setAttributeNode(newHref);	



//	if (learners[i].semester != "20180101") {
//		var newStyle = document.createAttribute("style");
//		newCol.setAttributeNode(newStyle);
//		newCol.className = "formerStudent";
//		newCol.style.backgroundColor = "red";		
//		}		
	newAtag.appendChild(aText);
	newCol.appendChild(newAtag);
	newRow.appendChild(newCol);
   }

