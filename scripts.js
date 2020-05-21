function login(form) {
  // the following code checkes whether the entered password is matching 
  if (form.user_email.value == "admin@admin.com" && form.user_password.value == "1234") {
    window.open("main.html") // opens the target page while password matches
	}else if (form.user_email.value === "" && form.user_password.value === "") {
		document.getElementById('message').style.color = 'red';
		document.getElementById('message').innerHTML = 'Empty Values Detected';
	
	}else {
		document.getElementById('message').style.color = 'red';
		document.getElementById('message').innerHTML = 'Wrong Email or Password';
	}
	
}



