var bio = {
	"name" : "Mya Bui",
	"role" : " Web Developer",
	"contacts": {
		"mobile": "314-487-2331",
		"email": "myabui618@gmail.com",
		"github": "myaBui",
		"twitter": "N/A",
		"location": "St Louis, MO"
	},
	"welcomeMessage": "Welcome to my Resume!!!",
	"skills": [
		"java", "javascript", "jquery", "html", "css"
	],
	"biopic": "images/fry.jpg"
}

/* Build a biolgy function to display bio information contains:
	Name, role, contacts and skills
*/

bio.display = function()
{
	var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
	var formattedName = HTMLheaderName.replace("%data%", bio.name);
	$('#header').prepend(formattedName,formattedRole);

	var formattedWelcomeMsg = HTMLWelcomeMsg.replace("%data%", bio.welcomeMessage);
	var formattedBio = HTMLbioPic.replace("%data%", bio.biopic);
	$('#header').append(formattedWelcomeMsg, formattedBio);

	var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
	var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
	var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
	var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
	var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
	$('#topContacts').append(formattedMobile, formattedEmail,formattedTwitter, formattedGithub,formattedLocation);
	$('#footerContacts').append(formattedMobile, formattedEmail,formattedGithub,formattedLocation);
	
	//display skills if skills is NOT empty
	if (bio.skills.length > 0){
		$('#header').append(HTMLskillsStart);
		for (skill in bio.skills) {
			var formattedSkill = HTMLskills.replace("%data%", bio.skills[skill]);
			$('#skills').append(formattedSkill);
		}
	}
}

//call function to display bio
bio.display();

// create education object with schools array and online courses
var education = {
    "schools": [
    {
        "name": "University of Missouri Rolla",
        "location": "Rolla, MO",
		"degree": "Bachelor of Science",
		"majors": ["MIS"],
		"date": 2009,
		"url": "http://www.mst.edu/"
    }],
    "onlineCourses" :[
	{
            "title": "Front-End Web Developer",
            "school": "Udacity",
			"date": 2014,
			"url": "http://www.udacity.com"
    }]
}

// create function 
education.display = function() {
	$('#education').append(HTMLschoolStart);

	//loop through the schools array in education 
	for (school in education.schools) {
		var formattedName= HTMLschoolName.replace("%data%", education.schools[school].name);
		var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
		var nameAndDegree = formattedName + formattedDegree;
		var formattedDates = HTMLschoolDates.replace("%data%", education.schools[school].date);
		var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
		var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[school].majors);
		var formattedUrl = HTMLschoolURL.replace("%data%", education.schools[school].url);

		$('.education-entry:last').append(nameAndDegree,formattedDates,formattedLocation,formattedMajor,formattedUrl);
	}
	//

	//$("#education").append(HTMLonlineClasses);
	//loop through online classes
	for (online in education.onlineCourses){
        $("#education").append(HTMLonlineClasses);
		$('#education').append(HTMLschoolStart);

        var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[online].title);
        var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[online].school);
        var TitleandSchool = formattedOnlineTitle + formattedOnlineSchool;
        var formattedOnlineDate = HTMLonlineDates.replace("%data%", education.onlineCourses[online].date);
        var formattedOnlineURL = HTMLonlineURL.replace("%data%", education.onlineCourses[online].url);
        $(".education-entry:last").append(TitleandSchool, formattedOnlineDate, formattedOnlineURL);
		$(".education-entry a:last-child").attr("href", education.onlineCourses[online].url);

		/*
		var tmpEle = $(formattedOnlineURL);
		tmpEle.attr('href', formattedOnlineURL);
		$(".education-entry:last").append(tmpEle);
*/
    }

}

//call education function
education.display();

// create projects object
var projects = {
	"projects": [
		{
			"title": "Project 1",
			"dates": "2014",
			"description": "Built a website to match with the mock up website from Udacity using HTML and CSS. Used Bootstrap framework for the project. ",
			"images": [
				"images/mockup.png", 
				"images/Project1.png"
			]
		}
	]
}

//create document ready function to display project
function displayProject(){
	for (project in projects.projects) {
		$('#projects').append(HTMLprojectStart);
			
		var formattedTitle =  HTMLprojectTitle.replace("%data%", projects.projects[project].title);
		var tmpEle = $(formattedTitle);
		tmpEle.attr('href', projects.projects[project].title);
		$(".project-entry:last").append(tmpEle);
			
		var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
		$('.project-entry:last').append(formattedDates);
			
		var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
		$('.project-entry:last').append(formattedDescription);
			
		if (projects.projects[project].images.length > 0) {
			for (image in projects.projects[project].images) {
				var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
				$('.project-entry:last').append(formattedImage);
			}
		}
	}
}

//call displayProject function to display project
displayProject();


// create work object
var work = {
	"jobs" :[
		{
		"employer": "AT&T",
		"title": "Analyst Developer",
		"dates": "February 2006 - Present",
		"location": "Missouri",
		"description": "Designs new functionality for new or existing applications. Troubleshoots issues, implements changes, maintains, and supports production applications. Works well as individual and with team members."
		},
		{
		"employer": "Bistro Restaurant",
		"title": "Waitress",
		"dates": "February 2000 - 2005",
		"description": "Worked as a waitress at a small restaurant. Took order from customers for food or beverages. Checked with customers to ensure that they are enjoying their meals and take action to correct any problems. Collected payment and cleaned the table."
		}
	]
}

// create function to display work
function displayWork() {
	for (job in work.jobs) {
		$('#workExperience').append(HTMLworkStart);
		
		var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
		var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
		
		var formattedEmployerTitle = formattedEmployer + formattedTitle;
		$('.work-entry:last').append(formattedEmployerTitle);
	
		var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
		$('.work-entry:last').append(formattedDates);
		
		var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
		$('.work-entry:last').append(formattedDescription);
	}
}
displayWork();

//implement googleMap
$("#mapDiv").append(googleMap);

$(document).click(function(loc) {
    var xlocation = loc.pageX;
    var ylocation = loc.pageY;
    logClicks(xlocation,ylocation);
});

/*

inName (fiRst last);
function inName(name) {
	name = name.trim().split(" ");
	name[1]= name[1].toUpperCase();
	name[0] = name[0].slice(0,1).toUpperCase() +
			  name[0].slice[1).toLowerCase();
			 
	return name[0] + " " + name[1];	
}

$('#main').append(internationalizeButton);

*/