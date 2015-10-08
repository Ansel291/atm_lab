console.log("main js loaded.");

//Create Variables

var checking = 0;
var savings = 0;


//Select Button Elements on the Dom and Add Event Listeners

// 	//For Checking
// var checkDepButton = document.getElementById('checking-deposit');
// var checkWithdrawButton = document.getElementById('checking-withdraw');
// var saveDepButton = document.getElementById('savings-deposit');
// var saveWithdrawButton = document.getElementById('savings-withdraw');


// checkDepButton.addEventListener('click', function(event){
// 	checking = event.target.value;
// 		if (withdrawal < )



var checkDepButton = document.getElementById('checking-deposit').onclick = function(){
	checking = parseInt(+document.getElementById('checking-input').value)+(+ checking);
	document.getElementById('checking-balance').innerHTML='$'+checking;
	document.getElementById('checking-input').value="";
	return checking;
};

var checkWithdrawButton = document.getElementById('checking-withdraw').onclick = function(){
	checking = parseInt(-document.getElementById('checking-input').value)+(+ checking);
	document.getElementById('checking-balance').innerHTML='$'+checking;
	document.getElementById('checking-input').value="";
		if (checking < 0) {
		alert("Not Enough Funds!");
	}
	// return checking;
};

var saveDepButton = document.getElementById('savings-deposit').onclick = function(){
	savings = parseInt(+document.getElementById('savings-input').value)+(+ savings);
	document.getElementById('savings-balance').innerHTML='$'+savings;
	document.getElementById('savings-input').value="";
	return savings;
};

var saveWithdrawButton = document.getElementById('savings-withdraw').onclick = function(){
	savings = parseInt(-document.getElementById('savings-input').value)+(+ savings);
	document.getElementById('savings-balance').innerHTML='$'+savings;
	document.getElementById('savings-input').value="";
		if (savings < 0) {
		alert("Not Enough Funds!");
	}
	// return savings;
};














// var saveWithdrawButton = document.getElementById('savings-withdraw');
		
		//Deposit Button

			//Link to Deposit Function

		//Withdrawal Button

			//Link to Withdrawal Function

	//For Savings

		//Deposit Button

			//Link to Deposit Function

		//Withdrawal Button

			//Link to Withdrawal Function


//Activate the Inputs Boxes

	//Checking Input Box links to deposit and withdrawal function
	//Savings Input Box links to deposit and withdrawal functions





// Create Functions

// 	Create Function for Deposit

var deposit = function(accountName, amountDeposited) {
	var currentBalance;
	if(accountName === "checking") {
		checking = checking + amountDeposited;
		return checking;
	} else {
		savings = savings + amountDeposited;
		return savings;
	}
};

	//Create Function for Withdrawal

var withdrawal = function(accountName, amountWithdrawn) {
	var currentBalance;
	if(accountName === "checking") {
		checking = checking - amountWithdrawn;
		return checking;
	} else {
		savings = savings - amountWithdrawn;
		return savings;
	}
}

// var stop = function(deposit)
// 	if 



	//Function for if deposit equals zero

		//If deposit equals zero

			//Deactivate Buttons, "False"

			//Button Turns Red signifying Lack of Funds

			//create alert("Lack of Funds");







// alertUser: message
// // -> "NSF"
// -> undefined



// isEmpty: which account
// -> true/false (boolean)

// philIsTheCoolest = false;

