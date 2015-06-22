
var awesomeThought = "I am Haitong and I am AWESOME";
funThought = awesomeThought.replace("AWESOME", "FUN");

formattedName = HTMLheaderName.replace("%data%", "Haitong Chen");
formattedRole = HTMLheaderRole.replace("%data%", "Sofware Engineer");

$("#header").append(formattedName).append(formattedRole);

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

