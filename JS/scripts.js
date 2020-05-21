

/*Dictionary stored for registered users*/



var db = openDatabase("users", "3.30.1", "users", 200000);




/* Method to validate entered password*/
function pass_validate() {
	
	var pass1 = document.getElementById('password').value;
	var pass2 = document.getElementById('confirm_password').value;
	var email = document.getElementById('email').value;
	
	
	  if (pass1 == pass2 && pass1.length > 6) {
		document.getElementById('message').style.color = 'green';
		document.getElementById('message').innerHTML = 'matching';
	  } else {
		document.getElementById('message').style.color = 'red';
		document.getElementById('message').innerHTML = 'not matching';
	  }
	
	return email, pass1, pass2
	
	
	}
	
	
function save_user() {
		
	var pass1 = document.getElementById('password').value;
	var pass2 = document.getElementById('confirm_password').value;
	var email = document.getElementById('email').value;
	
	
	if (pass1 == pass2 && pass1.length > 6) {
		
		
		// Writing registered data into txt file to store
		db.transaction(function (tx) {   
		   tx.executeSql("INSERT INTO users (email,pass) VALUES('costam','222');"); 
		});
		alert("Registered Succesfuly");
	}
	else {

		alert("Some Errors Occured");
	}

}
	
/* Function to load registration form and insert it into div id= rightn-box  */
	function myReg() {
		document.getElementById("right-box").innerHTML='<object type="text/html" data="register.html" width="800px" height="700px" ></object>'; 
}