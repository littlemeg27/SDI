//alert("JavaScript works!");



//Brenna Pavlinchak
//SDI 1209
//Project 3
//In this project we are using objects and methods

var json = 
{
 "bestBuyEmployees": [
      {
      "employeeNum": 901078,
      "name": "Brenna",
      "payRate": 9.00,
      "position": "Apple Specialist"
      },
     
      {
      "employeeNum": 901079,
      "name": "CJ",
      "payRate": 8.50,
      "position": "PC Specialist"
      },
      
      {
      "employeeNum": 901080,
      "name": "Chris",
      "payRate": 10.50,
      "position": "Apple Specialist"
      },
      
      {
      "employeeNum": 901081,
      "name": "Mark M.",
      "payRate": 10.00,
      "position": "Tablet Specialist"
      },
      
      {
      "employeeNum": 901082,
      "name": "Mark S.",
      "payRate": 9.50,
      "position": "PC Specialist"
      },
      
      {
      "employeeNum": 901083,
      "name": "Mikey",
      "payRate": 8.00,
      "position": "PC Specialist"
      },
      
      {
      "employeeNum": 901084,
      "name": "Steve",
      "payRate": 9.00,
      "position": "Tablet Specialist"
      },
      
      {
      "employeeNum": 901085,
      "name": "Rylan",
      "payRate": 8.00,
      "position": "Department Host"
      }
 ]
};
 
//Initialize variables
    var thursday;
    var compDept = "Computer Department";
    var managers = "Managers";
    var areWeBusy = false;
    var itsNotThursday = 0;
    var itsThursday = 1;
    var zombiesAtWork = 200;
    var choresList;
    var len;
    var employees = [];

	loadEmployees = function() 
	{
    var i = 0,
        len = json.bestBuyEmployees.length;
    
    for (; i < len; i++) {
        employees.push(new Employee(json.bestBuyEmployees[i]));        
    } 
}


//Procedure Function
var procedureFunction = function (busy)
{
    if (busy === false) 
        {
            console.log("The " + compDept + " is not busy so the " + managers + " are in a meeting.");
        } 
    
    else //return int
        {
            console.log("The " + compDept + " is busy so the " + managers + " cannot be in a meeting.");
        };
}    

//Boolean Function Keep and change
var boolFunction = function (itsNotThursday, itsThursday)
{
    if (((itsNotThursday || itsThursday) < 1) && !((itsNotThursday && itsThursday) === 50)) 
        {
            console.log("On thursday its usually very slow in the store.");
        } 
    
    else //return string
        {
            console.log("On thursday its not slow in the store.");
        };
    
    return true;
};

//While Function
var whileFunction = function (zombieTotal) 
{
    var zombieTotal = 0;
    var aahh = "All of a sudden! "

    while (zombieTotal <= 100) 
        {
            zombieTotal = zombieTotal + zombiesAtWork
            zombieTotal++
            
        };
    
    return console.log(aahh + zombieTotal + " Zombies walk into work and start eating people!");
};

//String Function
var stringFunction = function () 
{
 
	var weirdWeather = "The weather got really weird";
	var strangeNoises = "there were a lot of strange noises outside";
	var creepyFeeling = "the air just felt creepy";

    return "While the managers where in the meeting: "
    		+ " " + weirdWeather + ", "
    		+ strangeNoises + " and "
            + creepyFeeling + "."
};




//Array Function
var arrayFunction = function (choresList) 
{
    var chores = ["Downstock", "Clean The Floor", "Clean Answer Center", "Clean The Tablets"];
        
        console.log("When we are not busy we have to: ");
        
        for (var count = 0; count < chores.length; count++) 
            {
                console.log((count + 1) + ". " + chores[count]);
            };
    
    return count; 
};


//Main Code
    
    procedureFunction(areWeBusy);
    
    console.log("It's " + boolFunction(itsNotThursday, itsThursday) + " on Thursdays the managers have a Leadership meeting.");
    
    var returnedNumber = arrayFunction(choresList);
    
    console.log(stringFunction(thursday))
    
    whileFunction(zombiesAtWork);




var Employee = function(obj) 
{
    var undead = false;

    var employeeNum = obj.employeeNum || -1;
    var name = obj.name || 'No Name';
    var payRate = obj.payRate || 0;
    var position = obj.position || 'Unemployeed';

    var zombify = function() 
    {
        undead = true;
    };

    var isUndead = function() 
    {
        return undead;
    };

    return 
    {
        employeeNum: employeeNum,
        name: name,
        payrate: payRate,
        position: position,
        zombify: zombify,
        isUndead: isUndead
    };
};

loadEmployees();

	for (var i = 0; i < employees.length; i++)
    {
    var e = employees[i];
 	console.log(e.name + ' is a ' + (e.isUndead() ? 'ZOMBIE!' : 'human'));    

    e.zombify();
   
	console.log(e.name + ' is a ' + (e.isUndead() ? 'ZOMBIE!' : 'human'));

	};