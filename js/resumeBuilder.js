
var awesomeThought = "I am Haitong and I am AWESOME";
funThought = awesomeThought.replace("AWESOME", "FUN");

formattedName = HTMLheaderName.replace("%data%", "Haitong Chen");
formattedRole = HTMLheaderRole.replace("%data%", "Sofware Engineer");

$("#header").append(formattedName).append(formattedRole);

var bio = {
    "name": "Haitong Chen",
    "role": "Software Engineer",
    "age": 34,
    "location": "Hangzhou",
    "bioPic": "http://haitong.tk"
};

var work = {
    "jobs": [
        {
            "employer": "Nokia Newworks",
            "years": "2011 - present",
            "title": "Software Specialist",
        },
        {
            "employer": "Motorola",
            "years": "2008-2011",
            "title": "Senior Software Engineer"
        },
        {
            "employer": "ZTE",
            "years": "2006-2008",
            "title": "Embedded Software Engineer"
        }
    ]
};

var project = {
    "motoProjects": [
        {
            "name": "RUA/RUI",
            "description": "RUA/RUI feature for Motorola Dimetra PDR",
            "skills": ["C", "Linux", "Socket programming", "TCP/UP"]
        },
        {
            "name": "PDR performance testing tool",
            "description": "Performance testing tool design and development",
            "skills": ["Python", "Linux", "Socket programming"]
        }
    ],
    "nokiaProjects": [
        {
            "name": "WBTS Software development & maintenance",
            "description": "new feature development, bug fix, problem-solving",
            "skills": ["embedded", "DSP", "C", "OSEck"]
        }
    ]
};

var education = {
    "schools": [
     {
        "school": "Nanjing University of Aero. & Astro",
        "city": "Nanjing",
        "major": "Mechanical engineering",
        "graduation": "2003"
    },
    {
        "school": "Nanjing University of Aero. & Astro",
        "city": "Nanjing",
        "major": "Automation engineering",
        "graduation": "2006"
    }],
    "onlineCourses": [
    {
        "title": "Javascript basics",
        "school": "Udacity",
        "date": "2015"
    }]
};
