var bio = {
    'name' : 'Vinod Thimmapuram',
    'role' : 'Full Stack Software Engineer',
    'contacts' : {
        'mobile' : '513-237-9425',
        'email' : 'tgvinodkumar@gmail.com',
        'github' : 'https://github.com/tgvinodkumar',
        'location' : 'Austin TX'
    },
    'welcomeMessage' : ' Thank you for visiting my online resume page.',
    'skills' : [ 'JavaScript', 'jQuery', 'Node.js/Express', 'React', 'AngularJS', 'HTML', 
                'CSS', 'Neo4j', 'MongoDB', 'SQLite', 'SQL server',  'Socket.io', 
                'Grunt', 'Gulp', 'Browserify', 'Git', 'Fortran'],
    'biopic' : 'images/bramhi.jpg',
    display : function() {

        var formattedName = HTMLheaderName.replace('%data%', bio.name);
        var fomattedRole = HTMLheaderRole.replace('%data%',bio.role);
        $('#header').prepend(formattedName,fomattedRole);

        $('#topContacts').prepend(HTMLmobile.replace('%data%', bio.contacts.mobile));
        $('#topContacts').append(HTMLemail.replace('%data%', bio.contacts.email));
        $('#topContacts').append(HTMLgithub.replace('%data%', bio.contacts.github));
        $('#topContacts').append(HTMLlocation.replace('%data%', bio.contacts.location));
        $('#header').append(HTMLbioPic.replace('%data%',bio.biopic));
        $('#header').append(HTMLWelcomeMsg.replace('%data%',bio.welcomeMessage));
        if (bio.skills.length > 0){
            $('#header').append(HTMLskillsStart);
            bio.skills.forEach(function(item) {
                $('#skills').append(HTMLskills.replace('%data%',item));
            });
        }
        $('#footerContacts').prepend(HTMLmobile.replace('%data%', bio.contacts.mobile));
        $('#footerContacts').append(HTMLemail.replace('%data%', bio.contacts.email));
        $('#footerContacts').append(HTMLgithub.replace('%data%', bio.contacts.github));
    }
};

var work = {
    'jobs' : [
        {
            'employer' : 'NCI Building Systems',
            'title' : 'Software Developer',
            'dates' : '2010 - 2014',
            'location' : 'Oklahoma City, OK',
            'description' : [`Improved the proprietary Fortran-based design software to automate 
                                hand calculations resulting in an average of 20%  increase in engineer 
                                productivity in designing prefabricated metal buildings`,
                                `Managed a team of 2 junior developers, overseeing work and resolving 
                                issues to meet deadlines`,
                                `Standardized the team’s build process using open source CruiseControl 
                                continuous integration tool`,
                                `Worked with the client to understand their business needs and translate 
                                to technical requirements`]
        },
        {
            'employer' : 'Tutor Perini Building Company',
            'title' : 'Senior Project Engineer',
            'dates' : '2014 - 2015',
            'location' : 'New York City, NY',
            'description' : [`Coordinated the construction process with all stakeholders to ensure the 
                            deadlines are met`,
                            `Prepared project schedule and resource allocation charts with a team of 4 
                            engineers and managers`]
        },
        {
            'employer' : 'Tutor Perini Building Company',
            'title' : 'Senior Project Engineer',
            'dates' : '2006 - 2010',
            'location' : 'Las Vegas, NV',
            'description' : [`Contributed in a key role on $600 million 300,000 sq.ft. area MGM Aria Resort 
                            and Casino project in Las Vegas`,
                            `Coordinated the construction process with all stakeholders to ensure the 
                            deadlines are met`,
                            `Prepared project schedule and resource allocation charts with a team of 4 
                            engineers and managers`]
        },
        {
            'employer' : 'KPFF Consulting Engineers',
            'title' : 'Design Engineer',
            'dates' : '2005 - 2006',
            'location' : 'Los Angeles, CA',
            'description' : [`Provided technical, analytical, and design support for over 5 civil engineering projects`]
        },

    ],
    display : function() {
        work.jobs.forEach(function(job) {
            $('#workExperience').append(HTMLworkStart);
            $('.work-entry:last').append(HTMLworkEmployer.replace('%data%',job.employer)+HTMLworkTitle.replace('%data%',job.title));
            $('.work-entry:last').append(HTMLworkDates.replace('%data%', job.dates));
            $('.work-entry:last').append(HTMLworkDescriptionStart);
            job.description.forEach(function(desc){
                $('.work-entry:last').append(HTMLworkDescription.replace('%data%', desc));
            })
        });
    }
};

var projects = {
    'projects' : [
    {
        'title' : 'project #1',
        'dates' : '2016',
        'description': 'project #1 description',
        'images':['http://lorempixel.com/350/200/animals/', 'http://lorempixel.com/350/200/animals/']
    },
    {
        'title' : 'project #2',
        'dates' : '2016',
        'description': 'project #2 description',
        'images':['http://lorempixel.com/350/200/animals/', 'http://lorempixel.com/350/200/animals/']
    }
    ],
    display : function() {
        projects.projects.forEach(function(projectNumber) {

            $('#projects').append(HTMLprojectStart);
            $('.project-entry:last').append(HTMLprojectTitle.replace('%data%',projectNumber.title));
            $('.project-entry:last').append(HTMLprojectDates.replace('%data%',projectNumber.dates));
            $('.project-entry:last').append(HTMLprojectDescription.replace('%data%',projectNumber.description));
            $('.project-entry:last').append(HTMLprojectImage.replace('%data%',projectNumber.images[0]));
            $('.project-entry:last').append(HTMLprojectImage.replace('%data%',projectNumber.images[1]));
        });
    }
};

var education = {
    'schools': [
        {
            'name' : 'JNTU',
            'location' : 'Hyderabad',
            'degree' : 'B.S',
            'dates' : '2002',
            'majors' : ['Civil Engineering'],
            'url' : 'http://www.jntuh.ac.in/new/'
        },
        {
            'name' : 'University of Cincinnati',
            'location' : 'Cincinnati, OH',
            'degree' : 'M.S',
            'dates' : '2005',
            'majors' : ['Civil Engineering'],
            'url' : 'http://www.uc.edu/'
        }
    ],
    'onlineCourses' : [
        {
            'title' :'Front End Developer Nanodegree Course',
            'school' : 'Udacity',
            'date' : '2016',
            'url' : 'https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001'
        }
    ],
    display : function() {
        $('#education').append(HTMLschoolStart);
        education.schools.forEach(function(item) {
            $('.education-entry').append(HTMLschoolName.replace('%data%',item.name)+HTMLschoolDegree.replace('%data%',item.degree));
            $('.education-entry').append(HTMLschoolDates.replace('%data%',item.dates));
            $('.education-entry').append(HTMLschoolLocation.replace('%data%',item.location));
            item.majors.forEach(function(major) {
                $('.education-entry').append(HTMLschoolMajor.replace('%data%',major));
            });
        });
        $('#education').append(HTMLonlineClasses);
        $('#education').append(HTMLschoolStart);
        education.onlineCourses.forEach(function(item) {
            $('.education-entry:last').append(HTMLonlineTitle.replace('%data%',item.title)+HTMLonlineSchool.replace('%data%',item.school));
            $('.education-entry:last').append(HTMLonlineURL.replace('%data%',item.url));
        });
    }
};

bio.display();

work.display();

projects.display();

education.display();

$('#mapDiv').append(googleMap);

// CODE FOR ADDING INTERNATIONALIZATION BUTTON
$('#main').append(internationalizeButton);

function inName() {
    nameArray = bio.name.split(' ');
    nameArray[0] = nameArray[0].slice(0,1).toUpperCase() + nameArray[0].slice(1).toLowerCase();
    nameArray[1] = nameArray[1].toUpperCase();
    return nameArray[0]+' '+nameArray[1];
}

//CODE TO ADD NAVIGATION TABS AT THE TOP

function displayNav() {
    $('#main').prepend('<nav class="navigation"></nav>');
    $('.navigation').append('<ul class="nav"></ul>');
    $('.nav').append('<li class="nav-item"><a class="white-text" href = "#header">Home</a></li>');
    $('.nav').append('<li class="nav-item"><a class="white-text" href = "#skillsH3">Skills</a></li>');
    $('.nav').append('<li class="nav-item"><a class="white-text" href = "#workExperience">Work</a></li>');
    $('.nav').append('<li class="nav-item"><a class="white-text" href = "#projects">Projects</a></li>');
    $('.nav').append('<li class="nav-item"><a class="white-text" href = "#education">Education</a></li>');
}

displayNav();