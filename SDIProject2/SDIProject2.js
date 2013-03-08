//alert("JavaScript works!");

//Brenna Pavlinchak
//SDI 1209
//Project 2
//This is the second project and we are working with functions, loops and arrays

//Initialize variables
	var onRecSheet;
	var host = "Rylan";
	var zone = "\"Zone\"";
	var areWeBusy = true;
	var noRecSheet = 0;
	var recSheet = 1;
	var hoursWork = 7;
	var solutionsList;

//Procedure Function
var procedureFunction = function (busy)
{
	if (busy === true) 
		{
			console.log("If we are busy at work I go to " + host + " to see who needs to be helped first.");
		} 
	
	else 
		{
			console.log("I stand in my " + zone + " and wait till someone needs help.");
		};
}	

//Boolean Function
var boolFunction = function (noRecSheet, recSheet)
{
	if (((noRecSheet || recSheet) > 1) && !((noRecSheet && recSheet) === 50)) 
		{
			console.log("I have some Rec Sheets on my clipboard and do not need to go get some.");
		} 
	
	else 
		{
			console.log("I dont have any Rec Sheets on my clip board and I need to go get some.");
		};
	
	return true;
};

//While Function
var whileFunction = function (hoursTotal) 
{
	var hoursTotal = 0;
	var hours = "I work "

	while (hoursTotal <= 30) 
		{
			hoursTotal = hoursTotal + hoursWork
			hoursTotal++
			
		};
	
	return console.log(hours + hoursTotal + " hours a week usually so I get put in a different " + zone + " every shift");
};

//String Function
var stringFunction = function (onRecSheet) 
{
	var customerInfo = "A block with the Customers Information";
	var questions = "8 questions we have to ask customers to help find the right computer";
	var connections = "How do they connect to the internet?";
	var recommendations = "A box to put recommendations for services, software or accessories they might need";
	var notes = "Any random notes that we might need for the customer";
	var accessories = "The list of all the services, printers, or other things they might need to make a complete solution";



	return "The different parts of a Rec Sheet I have to fill out are" + " " + customerInfo + ", " + questions + ", "
			+ connections + ", " + recommendations + ", " + notes + ", " + "and " + accessories + ".";
};




//Array Function
var arrayFunction = function (solutionsList) 
{
	var solutions = ["G.S. Protection", "G.S. Services", "Anti Virus", "Microsoft Office", "Accessories", "Networking", "External Storage", "Financing and Rewards"];
		
		console.log("These are the different solutions from the accessories list");
		
		for (var count = 0; count < solutions.length; count++) 
			{
				console.log((count + 1) + ". " + solutions[count]);
			};
	
	return count; 
};



//Main Code
	
	console.log("It's " + boolFunction(noRecSheet, recSheet) + " that if I do not have and use a Rec Sheet I could get in trouble.");
	
	procedureFunction(areWeBusy);
	
	whileFunction(hoursWork);
	
	var returnedNumber = arrayFunction(solutionsList);
	
	console.log(stringFunction(onRecSheet))