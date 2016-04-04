var bio = {
	"name" : "Ahmad EL Masri",
	"role" : "Solution Developer",
	"contacts" : {
		"mobile" : "00961-3-468299",
		"email" : "ahmadelmasri@outlook.com",
		"github" : "elmasria",
		"twitter" : "amasri",
		"location" : "Beirut, Lebanon"
	},
	"welcomeMessage" : "Welcome to my CV",
	"skills" : ["programming", "development", "training", "organizing", "team worker", "leading"],
	"biopic" : "/images/profil-pic.jpg",
	display: function(){
		var headerName = HTMLheaderName.replace("%data%",bio.name);
		var headerRole = HTMLheaderRole.replace("%data%",bio.role);
		var headerbioPic = HTMLbioPic.replace("%data%", bio.biopic);
		var headerwelcomeMsg = HTMLwelcomeMsg.replace("%data%",bio.welcomeMessage);
		$("#header").prepend(headerName + headerRole);
		$("#header").append(headerbioPic);
		$("#header").append(headerwelcomeMsg);
		$("#header").append(HTMLskillsStart);
		for(var item in bio.contacts){
			var contactcontactGeneric = HTMLcontactGeneric.replace("%contact%",item);
			contactcontactGeneric = contactcontactGeneric.replace("%data%",bio.contacts[item]);
			$("#topContacts").append(contactcontactGeneric);
			$("#footerContacts").append(contactcontactGeneric);
		}
		for(var itemCount = 0; itemCount < bio.skills.length; itemCount++){
			$("#skills").append(HTMLskills.replace("%data%",bio.skills[itemCount]));
		}
	}
};

var education = {
	"schools" : [{
		"name" : "Beirut Arab University",
		"location" : "Lebanon, Beirut",
		"degree":"2.88",
		"majors": ["Electronics and Communications Engineering"],
		"dates":"2008-2014",
		"url":"https://www.bau.edu.lb"
	},{
		"name" : "Joseph Fourier University",
		"location" : "France, Grenoble",
		"degree":"10.5",
		"majors": ["EEATS"],
		"dates":"2014-2015",
		"url":"https://www.ujf-grenoble.fr/?language=en"
	}],
	"onlineCourses" : [{
		"title" : "Front-end web development",
		"school" : "Udacity",
		"date":"2016-present",
		"url":"https://classroom.udacity.com/nanodegrees/nd001/syllabus"
	}],
	display:function(){
		for(var item in education.schools){
			$("#education").append(HTMLschoolStart);
			$(".education-entry:last").append(HTMLschoolName.replace("%data%", education.schools[item].name)+
				HTMLschoolDegree.replace("%data%", education.schools[item].degree)+
				HTMLschoolDates.replace("%data%", education.schools[item].dates)+
				HTMLschoolLocation.replace("%data%", education.schools[item].location)+
				HTMLschoolMajor.replace("%data%", education.schools[item].majors));
		}
		$("#education").append(HTMLonlineClasses);
		for(var itemCount = 0; itemCount< education.onlineCourses.length; itemCount++){
			$("#education").append(HTMLschoolStart);
			$(".education-entry:last").append(HTMLonlineTitle.replace("%data%", education.onlineCourses[itemCount].title)+
				HTMLonlineSchool.replace("%data%", education.onlineCourses[itemCount].school)+
				HTMLonlineDates.replace("%data%", education.onlineCourses[itemCount].date)+
				HTMLonlineURL.replace("%data%", education.onlineCourses[itemCount].url));
		}
	}
};

var work = {
	"jobs" : [
	{
		"employer" : "Inatco",
		"title" : "Web Developer",
		"location" : "Downtown, Beirut",
		"dates" : "2013-2014",
		"description":"Write the programming code, either from scratch or by adapting existing website software and graphics packages to meet business requirements, test the website and identify any technical problems"
	},
	{
		"employer" : "ISS",
		"title" : "Solution Developer",
		"location" : "Paris",
		"dates" : "2015-present",
		"description":"Solutions Development, .Net solutions. products and technologies, Development and research, Workflow systems (Based on SharePoint and Nintex), and Contribute in the preparation of the Functional requirement document for medium to large sized projects in cooperation with the project team."
	}
	],
	display: function(){
		for(var itemCount = 0; itemCount < work.jobs.length; itemCount++){
		$("#workExperience").append(HTMLworkStart);
		$(".work-entry:last").append(
			HTMLworkEmployer.replace("%data%",work.jobs[itemCount].employer) +
			HTMLworkTitle.replace("%data%",work.jobs[itemCount].title) +
			HTMLworkDates.replace("%data%",work.jobs[itemCount].dates) +
			HTMLworkLocation.replace("%data%",work.jobs[itemCount].location) +
			HTMLworkDescription.replace("%data%",work.jobs[itemCount].description)
			);
		}
	}
};

var projects = {
	projects: [{
		"title": "Electromagnetic Radiation for Weed Control",
		"dates": "2014",
		"description":"Final Year Project, Objective: Design and fabricate a device, which help agriculture to control the weed using the electromagnetic waves",
		"images":["/images/EMRFWC01.jpg"]
	},{
		"title": "IR House Controller",
		"dates": "2013",
		"description":"15th Engineering Day Project, Design and producing a system by which a human can control his home appliances remotely ",
		"images":["/images/IRHC01.jpg"]
	}],
	display:function(){
		for(var itemCount = 0; itemCount < projects.projects.length; itemCount++){
			$("#projects").append(HTMLprojectStart);
			$(".project-entry:last").append(HTMLprojectTitle.replace("%data%", projects.projects[itemCount].title)+
				HTMLprojectDates.replace("%data%", projects.projects[itemCount].dates)+
				HTMLprojectDescription.replace("%data%", projects.projects[itemCount].description)
			);
			for(var imgIndex = 0; imgIndex < projects.projects[itemCount].images.length; imgIndex++){
				$(".project-entry:last").append(HTMLprojectImage.replace("%data%", projects.projects[itemCount].images[imgIndex]));
			}
		}
	}
};

education.display();
projects.display();
bio.display();
work.display()
$("#mapDiv").append(googleMap);