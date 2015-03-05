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
	"welcomeMessage": "HELLO THERE!",
	"subWelcomeMsg": " I'm Mya and Welcome to My Personal Portfolio",
	"skills": [
		"java", "javascript", "jquery", "html", "css"
	],
	"biopic": "images/fry.png"
}

/* Build a biolgy function to display bio information contains:
	Name, role, contacts and skills
*/
bio.display = function()
{
	var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
	var formattedName = HTMLheaderName.replace("%data%", bio.name);
	$('.customContact').prepend(formattedName,formattedRole);

	var formattedWelcomeMsg = HTMLWelcomeMsg.replace("%data%", bio.welcomeMessage);
	var formattedSubWelcomeMsg = HTMLSubWelcomeMsg.replace("%data%", bio.subWelcomeMsg);
	var formattedBio = HTMLbioPic.replace("%data%", bio.biopic);
	var changeColor = formattedSubWelcomeMsg.replace ("Mya", '<span style="color: #999999; font-size: 30px">MYA</span>');
	$('#header').append(formattedWelcomeMsg,changeColor, formattedBio);

	var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
	var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
	var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
	var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
	var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
	$('#topContacts').append(formattedMobile, formattedEmail,formattedTwitter, formattedGithub,formattedLocation);
	$('#footerContacts').append(formattedMobile, formattedEmail,formattedGithub,formattedLocation);

	//display skills if skills is NOT empty
	if (bio.skills.length > 0){
		$('#header:last').append(HTMLskillsStart);
		for (skill in bio.skills) {
			var formattedSkill = HTMLskills.replace("%data%", bio.skills[skill]);
			$('#header:last').append(formattedSkill);
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
		$('.education-entry:last a').attr("href", education.schools[school].url);
	}


	$("#education").append(HTMLonlineClasses);
	$('#education').append(HTMLschoolStart);
	//loop through online classes
	for (online in education.onlineCourses){

        var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[online].title);
        var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[online].school);
        var TitleandSchool = formattedOnlineTitle + formattedOnlineSchool;
        var formattedOnlineDate = HTMLonlineDates.replace("%data%", education.onlineCourses[online].date);
		var formattedOnlineURL = HTMLonlineURL.replace("%data%", education.onlineCourses[online].url);
		$('.education-entry:last').append(TitleandSchool,formattedOnlineDate,formattedOnlineURL);
		// update the href="#" to the front end web url
		$('.education-entry:last a:first').attr("href", "https://www.udacity.com/course/nd001");
		// update the href="#" to the Udacity home page.
		$('.education-entry:last a:last').attr("href", education.onlineCourses[online].url);
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
projects.displayProject = function() {
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
projects.displayProject();


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
	],
	// create function to display work
	"displayWork" :function() {
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
}


work.displayWork();

//implement googleMap
$("#mapDiv").append(googleMap);

$(document).click(function(loc) {
    var xlocation = loc.pageX;
    var ylocation = loc.pageY;
    logClicks(xlocation,ylocation);
});