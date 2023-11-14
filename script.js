var timeOfDay = [6, "noon", 8, "morning", "evening", 12];
//console.log(timeOfDay.length);

//indexing

var timeOfDay = [6, "noon", 8, "morning", "evening", 12];
//console.log(timeOfDay);

//identify element index position
var timeOfDay = [6, "noon", 8, "morning", "evening", 12];
//console.log(timeOfDay[3]);

//replacing array elements
var timeOfDay = [6, "noon", 8, "morning", "evening", 12];

timeOfDay[3] = "midnight";
//console.log(timeOfDay[3]);
//console.log(timeOfDay);

//array methods includes()....
var timeOfDay = [6, "noon", 8, "morning", "evening", 12];
//console.log(timeOfDay.includes("morning"));
//true
//console.log(timeOfDay.includes(9));
//false

//push()&pop()..

//push()...
var timeOfDay = [6, "noon", 8, "morning", "evening", 12];

timeOfDay.push("midnight");
//console.log(timeOfDay);

//pop()...
var timeOfDay = [6, "noon", 8, "morning", "evening", 12];

timeOfDay.pop();
//console.log(timeOfDay);

//splice()...
var timeOfDay = [6, "noon", 8, "morning", "evening", 12];

timeOfDay.splice(0, 2);
//console.log(timeOfDay);

//replace...
var timeOfDay = [6, "noon", 8, "morning", "evening", 12];
timeOfDay.splice(0, 2, "mid-afternoon", 7);
//console.log(timeOfDay);

//add...
var timeOfDay = [6, "noon", 8, "morning", "evening", 12];

timeOfDay.splice(4, 0, "twilight", 2, 9);
//console.log(timeOfDay);

//indexOf()...
var employeeAges = [15, 36, 78, 25, 17, 42, 19, 18];

var age = employeeAges.indexOf(36);
//console.log(age);

//indexOf() no exist..
var employeeAges = [15, 36, 78, 25, 17, 42, 19, 18];

var age = employeeAges.indexOf(45);
//console.log(age);
//-1
