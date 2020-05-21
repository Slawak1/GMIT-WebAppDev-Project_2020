	
function myLogin() {
	var email = "admin@admin.com";
	var psw = "password";

	var _email = document.getElementById("email").value;
	var _pass = document.getElementById("password").value;

	if (_email === email && _pass === psw) {
		
		window.open = 'main.html';

		
	} else if (_email === "" || _pass === "") {
		document.getElementById('message').style.color = 'red';
		document.getElementById('message').innerHTML = 'Empty Values Detected';
	
	}
	else {
		document.getElementById('message').style.color = 'red';
		document.getElementById('message').innerHTML = 'Wrong Email or Password';
	}
	
}



