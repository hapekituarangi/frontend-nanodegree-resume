var name = "Hape Ki Tuarangi";
var formattedName = HTMLheaderName.replace("%data%", name)


var role = "Web Developer";
var formattedRole = HTMLheaderRole.replace("%data%", role)


var skills = ["Good person", "Te Reo Maori", "Handy-Man", "Web Developer"];
var formattedSkills = HTMLskills.replace("%data%", skills);


var bio = {
  "name": name,
  "role": role,
  "contacts": {
    "email": "<a href=\"mailto:hape.porter@gmail.com\">hape.porter@gmail.com</a>",
    "mobile": "<a href=\"tel:+64216303100\">+64-216-303-100</a>",
    "github": "<a href=\"http://github.com/hapekituarangi\">hapekituarangi</a>",
    "blog": "<a href=\"http://hapekituarangi.github.io\">hapekituarangi</a>",
    "location": "Otaki, Aotearoa, New Zealand"
  },
  "bioPic": "images/profile.jpg",
  "skills": skills,
  "welcomeMessage": "Kia ora, Welcome! My name is Hape. This is my resume created as part of the online Udacity JavaScript basics course."
};

var work = {
  "jobs": [{
    "Position": "Moodle Administrator | Developer",
    "Employer": "Te Wananga o Raukawa",
    "location": "Otaki, Aotearoa | New Zealand",
    "Dates": "2011 - 2016 ",
    "Description": "For the past 5 years I have been Moodle Administrator. During that time I have help setup and maintain a Learningmanagement system along with a handful of there projects. One of key parts of my roles have been working with the academic areas developing their online content and courses."
  }, {
    "Position": "Kaimanaki Whenua | Groundsmen",
    "Employer": "Te Wananga o Raukawa",
    "location": "Otaki, Aotearoa | New Zealand",
    "Dates": "2007 - 2010 ",
    "Description": "My first job after leaving school I worked as a Kaimanaki Whenua|Groundsmen role at Te Wananga o Raukawa for 3 years. Our teams job was to maintain the campus grounds and buildings. We had a carpenter, plumber and electrician and two other Groundsmen part of the Manaki Whenua team. Part of my job was regularly helping the tradies so after three years I managed to pick up a few handy skills here and there."
  }]
}

var education = {
  "schools": [{
    "name": "Enspiral Dev Academy",
    "subjects": "Web Development",
    "dates": "2016 - Present",
    "location": "Wellington, Aotearoa | New Zealand",
    "major": "HTML, CSS, Javascript, jQuery, NodeJS, SQL, NoSQL"
  }, {
    "name": 'Te Wananga o Raukawa',
    "subjects": 'Poutuarongo Kawa Oranga | Bachelor of Health Promotion, Sport and Exercise',
    "dates": '2016 - Present / Ongoing',
    "location": 'Otaki, Aotearoa | New Zealand',
    "major": 'Poutuarongo Kawa Oranga | Bachelor of Health Promotion, Sport and Exercise'
  }, {
    "name": 'Te Wananga o Raukawa',
    "subjects": 'Poupou Whaikorero',
    "dates": '2015',
    "location": 'Otaki, Aotearoa | New Zealand',
    "major": 'Poupou Whaikorero | Certificate of Whaikōrero'
  }, {
    "name": "Te Wananga o Raukawa",
    "subjects": "Whare Tapere",
    "dates": "2014 - 2015",
    "location": "Otaki, Aotearoa | New Zealand",
    "major": "Heke Whare Tapere | Diploma of Literary Performing Arts"
  }, {
    "name": "Te Wananga o Raukawa",
    "subjects": "Heke Kawa Oranga | Diploma of Health Promotion, Sport and Exercise",
    "dates": "2011 - 2012",
    "location": "Otaki, Aotearoa | New Zealand",
    "major": "Heke Kawa Oranga | Diploma of Health Promotion, Sport and Exercise"
  }]
}

var projects = {
  "project": {
    "dates": "February 2016 - Ongoing",
    "title": "hapekituarangi",
    "description": "Github blog site capturing parts of my journey at the Enspiral Dev Academy. It will also serve as space to share any projects completed.",
    "skills": "HTML, CSS, Responsive Design",
    "url": "hapekituarangi.github.io"
  }
};

bio.display = function() {
  var formattedPicture = HTMLbioPic.replace('%data%', bio.bioPic);
  var formattedWelcomeMsg = HTMLwelcomeMsg.replace('%data%', bio.welcomeMessage)
  var formattedmobile = HTMLmobile.replace('%data%', bio.contacts.mobile)
  var formattedemail = HTMLemail.replace('%data%', bio.contacts.email)
  var formattedgithub = HTMLgithub.replace('%data%', bio.contacts.github)
  var formattedblog = HTMLblog.replace('%data%', bio.contacts.blog)
  var formattedSkill = HTMLskills.replace('%data%', bio.skills);

  //  APPEND UPDATED DATA

  $("#header").prepend(formattedRole);
  $("#header").prepend(formattedName);
  $('#header').append(formattedPicture);
  $('#header').append(formattedWelcomeMsg);
  $("#topContacts").prepend(formattedgithub);
  $("#topContacts").append(formattedemail);
  $("#topContacts").append(formattedmobile);
  $("#topContacts").append(formattedblog);

  if (bio.skills.length > 0) {
    $("#header").append(HTMLskillsStart);
    var formattedSkills = HTMLskills.replace("%data%", bio.skills[0]);

    $("#skills").append(formattedSkills);
    formattedSkills = HTMLskills.replace("%data%", bio.skills[1]);

    $("#skills").append(formattedSkills);
    formattedSkills = HTMLskills.replace("%data%", bio.skills[2]);

    $("#skills").append(formattedSkills);
    formattedSkills = HTMLskills.replace("%data%", bio.skills[3]);

    $("#skills").append(formattedSkills);
    formattedSkills = HTMLskills.replace("%data%", bio.skills[4]);

    $("#skills").append(formattedSkills);
    formattedSkills = HTMLskills.replace("%data%", bio.skills[5]);

    $("#skills").append(formattedSkills);
    formattedSkills = HTMLskills.replace("%data%", bio.skills[6]);
  };
}

bio.display();

work.displayWork = function displayWork() {
  for (job in work["jobs"]) {

    var employer = HTMLworkEmployer.replace('%data%', work["jobs"][job]["Employer"]);
    var position = HTMLworkTitle.replace('%data%', work["jobs"][job]["Position"]);
    var formattedDate = HTMLworkDates.replace('%data%', work["jobs"][job]["Dates"]);
    var formattedLocation = HTMLworkLocation.replace('%data%', work["jobs"][job]["location"]);
    var formattedDescription = HTMLworkDescription.replace('%data%', work["jobs"][job]["Description"]);
    $('#workExperience').append(HTMLworkStart);
    $('.work-entry:last').append(employer + position);
    $('.work-entry:last').append(formattedDate);
    $('.work-entry:last').append(formattedLocation);
    $('.work-entry:last').append(formattedDescription);
  };
  $("#workExperience").click(function() {
    $(".work-entry").toggleClass("hide");
  });
};
work.displayWork();

projects.display = function() {
  for (project in projects) {
    $("#projects").append(HTMLprojectStart);

    var formattedDates = HTMLprojectDates.replace("%data%", projects.project.dates);
    $(".project").append(formattedDates);

    var formattedTitle = HTMLprojectTitle.replace("%data%", projects.project.title);
    $(".project").append(formattedTitle);

    var formattedDescription = HTMLprojectDescription.replace("%data%", projects.project.description);
    $(".project").append(formattedDescription);
  }
}

$("#projects").click(function() {
  $(".project-entry").toggleClass("hide");
});

projects.display();

education.displayEducation = function() {
  for (var school in education.schools) {
    var formattedName = HTMLschoolName.replace('%data%', education.schools[school].name);
    var formattedDegree = HTMLschoolDegree.replace('%data%', education.schools[school].subjects);
    var formattedDates = HTMLschoolDates.replace('%data%', education.schools[school].dates);
    var formattedLocation = HTMLschoolLocation.replace('%data%', education.schools[school].location);
    var formattedMajor = HTMLschoolMajor.replace('%data%', education.schools[school].major);

    $('#education').append(HTMLschoolStart);
    $('.education-entry:last').append(formattedName + formattedDegree);
    $('.education-entry:last').append(formattedDates);
    $('.education-entry:last').append(formattedLocation);
    $('.education-entry:last').append(formattedMajor);

    console.log(school);
  }
  $("#education").click(function() {
    $(".education-entry").toggleClass("hide");
  })

}

education.displayEducation();

$("#mapDiv").append(googleMap);

$("#mapDiv").click(function() {
  $("#map").toggleClass("hide");
});