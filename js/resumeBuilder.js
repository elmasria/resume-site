/*
This is empty on purpose! Your code to build the resume will go here.
 */

var name = "Ahmad EL Masri";
var role = "Solution Developer";

var bio = {
	"name" : name,
	"role" : role,
	"contacts" : {
		"mobile" : "00961-3-468299",
		"email" : "ahmadelmasri@outlook.com",
		"github" : "elmasria",
		"twitter" : "amasri",
		"location" : "Beirut, Lebanon"
	},
	"welcomeMessage" : "Welcome to my CV",
	"skills" : ["programming", "development"],
	"ProfilePic" : "/images/fry.jpg"

};

var projects = [
	{
		"projectName": "Electromagnetic Radiation for Weed Control",
		"projectDescription":"Final Year Project, Objective: Design and fabricate a device, which help agriculture to control the weed using the electromagnetic waves",
		"projectImage":"/images/197x148.gif",
		"projectDate": 2014
	},{
		"projectName": "IR House Controller",
		"projectDescription":"15th Engineering Day Project, Design and producing a system by which a human can control his home appliances remotely ",
		"projectImage":"/images/197x148.gif",
		"projectDate": 2013
	}
];

var education = {
	"schools" : [
		{
			"schoolName" : "Patriarchal",
			"schoolAddress" : "Beirut"
		},
		{
			"schoolName" : "Saint Eli Bettina",
			"schoolAddress" : "Beirut"
		}
	],
	"Universities" : [
		{
			"universityName" : "Patriarchal",
			"universityAddress" : "Beirut"
		},
		{
			"universityName" : "Saint Eli Bettina",
			"universityAddress" : "Beirut"
		}
	]
};

var work = {
	"works" : [
		{
			"company" : "Inatco",
			"position" : "Web Developer",
			"period" : ["2013" , "2014"],
			"city" : "Downtown, Beirut",
			"description":"Write the programming code, either from scratch or by adapting existing website software and graphics packages to meet business requirements, test the website and identify any technical problems"
		},
		{
			"company" : "ISS",
			"position" : "Solution Developer",
			"period" : ["2015" , "present"],
			"city" : "Paris",
			"description":"Solutions Development, .Net solutions. products and technologies, Development and research, Workflow systems (Based on SharePoint and Nintex), and Contribute in the preparation of the Functional requirement document for medium to large sized projects in cooperation with the project team."
		}
	]
};

var headerName = HTMLheaderName.replace('%data%',bio.name);
var headerRole = HTMLheaderRole.replace('%data%',bio.role);
var headerbioPic = HTMLbioPic.replace('%data%', bio.ProfilePic);
var headerwelcomeMsg = HTMLwelcomeMsg.replace('%data%',bio.welcomeMessage);
$("#header").prepend(headerName + headerRole);
$("#header").append(headerbioPic);
$("#header").append(headerwelcomeMsg);
for(item in bio.contacts){
	var contactcontactGeneric = HTMLcontactGeneric.replace("%contact%",item);
	contactcontactGeneric = contactcontactGeneric.replace("%data%",bio.contacts[item]);
	$("#topContacts").append(contactcontactGeneric);
}
$("#header").append(HTMLskillsStart);
for(item in bio.skills){
	$("#skills").append(HTMLskills.replace("%data%",bio.skills[item]));
}
for(item in work.works){
	$("#workExperience").append(HTMLworkStart);
	$(".work-entry:last").append(
		HTMLworkEmployer.replace("%data%",work.works[item].company) +
		HTMLworkTitle.replace("%data%",work.works[item].position) +
		HTMLworkDates.replace("%data%",work.works[item].period) +
		HTMLworkLocation.replace("%data%",work.works[item].city) +
		HTMLworkDescription.replace("%data%",work.works[item].description)
	);
}
$(document).click(function(loc){
	console.log("x location: " + loc.pageX + "y location: " + loc.pageY);
});
var displayProjects = function() {

};

displayProjects.display = function() {
	for(index in projects){
		$("#projects").append(HTMLprojectStart);
		$(".project-entry:last").append(HTMLprojectTitle.replace("%data%", projects[index].projectName)+
		HTMLprojectDates.replace("%data%", projects[index].projectDate)+
		HTMLprojectDescription.replace("%data%", projects[index].projectDescription)+
		HTMLprojectImage.replace("%data%", projects[index].projectImage)
		);
	}
}

function inName(name){
	name = name.trim().split(" ");
	name[1] = name[1].toUpperCase();
	name[0] = name[0].slice(0,1).toUpperCase() + name[0].slice(1).toLowerCase();
	return name[0] + " " + name[1];
}

$("#main").append(internationalizeButton);
displayProjects.display();
$("#mapDiv").append(googleMap);