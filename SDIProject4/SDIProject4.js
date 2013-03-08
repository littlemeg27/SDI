//alert("JavaScript works!");

//Brenna Pavlinchak
//SDI Project 4
//9/21/2012
//This project I am making a library of functions 
//I am also trying to redo things I did wrong in the last 3 projects

//Extra Credit: Project one, indentation is much more consistant in this project then from project one.


var bPavlinchakLibrary = function()
	{

	
	var formatNumberCheck = function(number) //Format a number to use a specific number of decimal places, as for money: 2.1 → 2.10
	{
		var decimalNumber = number.toFixed(2);
		
		return decimalNumber;

	};
	
	
	var fuzzyNumberCheck = function(number1, number2, percent) //Fuzzy-match a number: is the number above or below a number within a certain percent?
	{
		
		var compareNumber = number2*(percent/100);
		var getNumber = (number1 >= number2 - compareNumber && number1 <= number2 + compareNumber);
		
		return getNumber;	
	};




	var numberDateCheck = function(firstDay, secondDay) //Find the number of hours or days difference between two dates.
	{
        var millisecDay = 1000*60*60*24; 
        var daysDifference = Math.round(Math.abs((firstDay.getTime() - secondDay.getTime())/(millisecDay)));
    	
    	return daysDifference;
    };




	var convertNumberCheck = function(fortyTwo) //Given a string version of a number such as "42", return the value as an actual Number, such as 42.
	{
		return parseInt (fortyTwo);
	};


	
	var phoneNumberCheck = function(number) //Does a string follow a 123-456-7890 pattern like a phone number?
	{  
		var number = /^[0-9]{3}[\-]{1}[0-9]{3}[\-]{1}[0-9]{4}$/; 
		var phoneNumber = number.test(number);
		
		return phoneNumber; 
	};
	
	
	
	var validEmailCheck = function(email) //Does a string follow an aaa@bbb.ccc pattern like an email address? 
	{
		var validEmail = /^[\w._%+-]+@{1}[\w-]+\.[a-z]{2,6}$/;
		var checkEmail = validEmail.test(email);
		
		return checkEmail;		
	};


	var validURLCheck = function(URL) //Is the string a URL? (Does it start with http: or https:?)
	{
		var validURL = /^(https?:\/\/)?(www?)*.\w+([\.-]?\w+)*(\.[a-z\.]{2,6})+$/;
		var checkURL = validURL.test(URL);
		
		return checkURL;
	};



	var letterCaseCheck = function(caseFix) //Title-case a string (split into words, then uppercase the first letter of each word)
	{
			var firstLetter = function(caseFix) 
			{
				return caseFix.charAt(0).toUpperCase() + caseFix.substr(1);
			};
		
		firstLetter = caseFix.replace(/\w\S*/g, firstLetter);
		
		return firstLetter;
	};



	var letterChange = function(string, punct1, punct2) //Given a string that is a list of things separated by a given string, as well as another string separator, return a string with the first separator changed to the second: "a,b,c" + "," + "/" → "a/b/c".
	{
		var letterChanged = string.split(punct1).join(punct2);
		
		return letterChanged;
	};


	
	
	var smallestArrayValue = function(numberValue, greatestValue) //Find the smallest value in an array that is greater than a given number   ARRAY PROPERTY PROJECT 2
	{
		var lowestValue = Number.infinity;
		
			for (var i = 0; i < numberValue.length; i++) 
			{
				if (greatestValue < numberValue[i] && numberValue[i] < lowestValue) 
				{
					lowestValue = numberValue[i];
				};
				//Extra Credit, from project 3 I believe I missed a nested conditional in the last project.
			};
		
		return lowestValue;
	};

	
	
	var totalArrayValue = function (array) //Find the total value of just the numbers in an array, even if some of the items are not numbers.
	{
		var numberTotal = 0;
		var num;
		
			for (var i = 0; i < array.length; i++) 
			{
				if(num = 1) 
				{
				numberTotal = numberTotal + num;
				}
			};
		
		return numberTotal;
	}; 


	
	var arraySort = function (array, key) //Given an array of objects and the name of a key, return the array sorted by the value of that key in each of the objects: "a" + [{a:2},{a:3},{a:1}] → [{a:1},{a:2},{a:3}].
    {	
        var compare = function (a, b) 
        {		   
            if (a[key] < b[key]) 
            {			 
	            return 52                        
            } 
        	
        	else if (a[key] > b[key]) 
            {         
	              return 61						
            } 
            
            else 
            {
	               return 108
            }
        }
        arraySort2 = array.sort(compare);
        
        return arraySort2;
    };
    
    
return {
		"decimalNumber"			:	formatNumberCheck,
		"getNumber"				:	fuzzyNumberCheck,
		"daysDifference"		:	numberDateCheck,
		"convertNumberCheck"	:	convertNumberCheck,
		"phoneNumber"			:	phoneNumberCheck,
		"checkEmail"			:	validEmailCheck,
		"checkURL"				:	validURLCheck,
		"firstLetter"			:	letterCaseCheck,
		"letterChanged"			:	letterChange,
		"lowestValue" 			:  	smallestArrayValue,
		"numberTotal"			:	totalArrayValue,
		"arraySort"				:   arraySort

		};
		
};

var bPavlinchak = new bPavlinchakLibrary;
		
//Console.logs for the whole library

//Extra Credit, project 3 all of my functions are in my library object and called right here.

console.log("5.5 = " + bPavlinchak.decimalNumber(5.5));

console.log("Fuzzy Match = " + bPavlinchak.getNumber(25, 50, 75, 100));

console.log(bPavlinchak.daysDifference(new Date(2013, 8, 27), new Date()) +  " Days until my next Birthday");

console.log("The number \"fortyTwo\" is changed to " + bPavlinchak.convertNumberCheck(" 42"));		
		
console.log("803-412-7815 = " + bPavlinchak.phoneNumber("803-412-7815"));

console.log("littlemeg27@gmail.com = " + bPavlinchak.checkEmail("littlemeg27@gmail.com"));

console.log("http://www.apple.com = " + bPavlinchak.checkURL("http://www.apple.com"));

console.log("action speaks louder than words but not nearly as often. -mark twain = " + bPavlinchak.firstLetter("action speaks louder than words but not nearly as often. -mark twain"));

console.log("ObjectiveC,Java,Javascript = " + bPavlinchak.letterChanged("ObjectiveC,Java,Javascript", ",", "."));

console.log(bPavlinchak.lowestValue([2,27,85,76,39,90,55]));

console.log(bPavlinchak.numberTotal(['Sushi',2,27,5,'Hi',85,'Mac and Cheese',40]));

console.log(bPavlinchak.arraySort([{x:2}, {x:10}, {x:18}], "x"));




	