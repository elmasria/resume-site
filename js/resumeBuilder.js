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
		var headerName = HTMLheaderName.replace('%data%',bio.name);
		var headerRole = HTMLheaderRole.replace('%data%',bio.role);
		var headerbioPic = HTMLbioPic.replace('%data%', bio.biopic);
		var headerwelcomeMsg = HTMLwelcomeMsg.replace('%data%',bio.welcomeMessage);
		$("#header").prepend(headerName + headerRole);
		$("#header").append(headerbioPic);
		$("#header").append(headerwelcomeMsg);
		$("#header").append(HTMLskillsStart);
		for(item in bio.contacts){
			var contactcontactGeneric = HTMLcontactGeneric.replace("%contact%",item);
			contactcontactGeneric = contactcontactGeneric.replace("%data%",bio.contacts[item]);
			$("#topContacts").append(contactcontactGeneric);
			$("#footerContacts").append(contactcontactGeneric);
		}
		for(item in bio.skills){
			$("#skills").append(HTMLskills.replace("%data%",bio.skills[item]));
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
		for(item in education.schools){
			$("#education").append(HTMLschoolStart);
			$(".education-entry:last").append(HTMLschoolName.replace("%data%", education.schools[item].name)+
				HTMLschoolDegree.replace("%data%", education.schools[item].degree)+
				HTMLschoolDates.replace("%data%", education.schools[item].dates)+
				HTMLschoolLocation.replace("%data%", education.schools[item].location)+
				HTMLschoolMajor.replace("%data%", education.schools[item].majors));
		}
		$("#education").append(HTMLonlineClasses);
		for(item in education.onlineCourses){
			$("#education").append(HTMLschoolStart);
			$(".education-entry:last").append(HTMLonlineTitle.replace("%data%", education.onlineCourses[item].title)+
				HTMLonlineSchool.replace("%data%", education.onlineCourses[item].school)+
				HTMLonlineDates.replace("%data%", education.onlineCourses[item].date)+
				HTMLonlineURL.replace("%data%", education.onlineCourses[item].url));
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
		for(item in work.jobs){
		$("#workExperience").append(HTMLworkStart);
		$(".work-entry:last").append(
			HTMLworkEmployer.replace("%data%",work.jobs[item].employer) +
			HTMLworkTitle.replace("%data%",work.jobs[item].title) +
			HTMLworkDates.replace("%data%",work.jobs[item].dates) +
			HTMLworkLocation.replace("%data%",work.jobs[item].location) +
			HTMLworkDescription.replace("%data%",work.jobs[item].description)
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
		for(index in projects.projects){
			$("#projects").append(HTMLprojectStart);
			$(".project-entry:last").append(HTMLprojectTitle.replace("%data%", projects.projects[index].title)+
				HTMLprojectDates.replace("%data%", projects.projects[index].dates)+
				HTMLprojectDescription.replace("%data%", projects.projects[index].description)
			);
			for(imgIndex in projects.projects[index].images){
				$(".project-entry:last").append(HTMLprojectImage.replace("%data%", projects.projects[index].images[imgIndex]));
			}
		}
	}
};

education.display();
projects.display();
bio.display();
work.display()
$("#mapDiv").append(googleMap);