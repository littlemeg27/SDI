//alert("JavaScript works!");

//Brenna Pavlinchak
//SDI 1209
//Assignment 1
//Thursday August 30
//This is the first assignment for SDI we use if/else statements to tell a story

//Initiate Variables 
var onTimeToWork = 9;
var managerOpenDoor = true;
var computersAreTurnedOn = false;
var string = "computers";
var escStr = "\"Good Morning!\"";


console.log("When I get out of my car and head into work and long as I get there at " + onTimeToWork + ".");
console.log("I have to ring the doorbell and wait for a " + managerOpenDoor + " manager to open the door for me.");
console.log("I walk inside and think I see that the monitors are turned on, but this is " + computersAreTurnedOn + ".");
console.log("I clock in at the Geek Squad " + string + " then put my purse in the Hub.");
console.log("I start walking back to " + string + " I walk past Customer Service and say " + escStr + " I then turn on the " + string + ".");

//This is the main body of my program/story


if (managerOpenDoor === true) //If the manager hears the doorbell 
    {
        if (onTimeToWork === 9) //If i am on time to work
    {
        console.log("After I am done I set up the Daily Sales Tracker");
    }

		else //If i am late to work
    {
        console.log("I will clock in at Geek Squad before I put my purse in the Hub");
    }
    }

else //The manager does not hear the doorbell
    {
        if (computersAreTurnedOn !== true) //If all the computers are not turned on when i get back to computers
    {
        console.log("I do have to turn on all of the computers in the department");
    }

    	else //If the computers are turned on when i get back to computers
    {
        console.log("I do not have to turn on all of the computers in the department");
    }
    }

