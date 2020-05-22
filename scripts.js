
// Method to animate transition of DIV - change opacity from 0 to 100 




function transition_container() {
	d3.select("#cont2")
    .transition()
    .duration(3000)
    .style("opacity", "100")
}

function data_from_array(arr) {
	
	let svgCount = d3.select("#chart1").append("SVG")
		.attr("width",500)
		.attr("height",500);
		
	let myRect = svgCount.selectAll("rect")
		.data(arr);
		
	myRect.enter()
		.append("rect")
		.attr("x",function(d,i){return 50+(i*10);})
		.attr("y", 50)
		.attr("width",100)
		.attr("height",function(d){return d;})
		attr("fill","green")
	
}


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



