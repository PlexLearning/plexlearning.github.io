/*
    Student Name: firstname lastname
    File Name: JavaScript.js
    Date: 01/01/2020
*/

//Global variables
var answer = document.querySelector("#answer p");
var heading = document.querySelector("#answer h2");

document.getElementById("DatexID").innerHTML = "Replace the content, xxxxx, of this paragraph"; 
document.getElementById("DatexID").style.color = "Red"; 

var date = new Date();
var realMonth = date.getMonth() + 1;				
var aText = (realMonth + "/" + date.getDate() + "/" + date.getFullYear() );	
document.getElementById("DateyID").innerHTML = aText; 

// Get references to the fields
let fName = document.getElementById("fName");
let lName = document.getElementById("lName");
let fullName = document.getElementById("fullName");
let upDated = document.getElementById("upDated");

// Function to update full name
function updateForm() {
    fullName.value = `${fName.value} ${lName.value}`.trim();
	var date = new Date();
	var realMonth = date.getMonth() + 1;				
	var aText = (realMonth + "/" + date.getDate() + "/" + date.getFullYear() );	
	upDated.value = aText;
}

// Listen for typing in both fields
// fName.addEventListener("input", updateFullName);
// lName.addEventListener("input", updateFullName);

	
					
//			document.writeln(aText); 

			document.getElementById("DateID").innerHTML = aText;					

//Hamburger menu function
function menu() {
    var navlinks = document.getElementById("nav-links");
    var menuicon = document.getElementById("icon");
    if (navlinks.style.display === "block") {
        navlinks.style.display = "none";
        menuicon.style.color = "#2a1f14";
    } else {
        navlinks.style.display = "block";
        menuicon.style.color = "#f6eee4";
    }
}

//Function to display the first answer
function ans1() {
    heading.style.display = "block";
    answer.textContent = "Step back and observe the situation for a few minutes. Wait to see if a parent arrives. If the animal is in immediate danger of a predator or is in the road, remove the baby and bring to a rescue center.";
}

//Function to display the second answer
function ans2() {
    heading.style.display = "block";
    answer.textContent = "You cannot tell if an animal has rabies simply by seeing it. A test must be performed to determine if an animal has rabies. Do not approach wildlife that you suspect might be rabid. Contact us to have the animal removed.";
}

//Function to display the third answer
function ans3() {
    heading.style.display = "block";
    answer.textContent = "No. This is a myth. The parents will retrieve the baby bird and place it back in its nest. If the parents do not return, contact us.";
}

//Function to display the fourth answer
function ans4() {
    heading.style.display = "block";
    answer.textContent = "We need volunteers to help feed animals, care for animals, and clean animal pens. We also accept donations. ";
}