
var awesomeThought = "I am Haitong and I am AWESOME";
funThought = awesomeThought.replace("AWESOME", "FUN");

formattedName = HTMLheaderName.replace("%data%", "Haitong Chen");
formattedRole = HTMLheaderRole.replace("%data%", "Sofware Engineer");

$("#header").append(formattedName).append(formattedRole);
