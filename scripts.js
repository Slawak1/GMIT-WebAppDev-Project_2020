

// Code adapted from https://www.youtube.com/watch?v=P8KNr0pDqio tutorial. 
function pieChart() {
	var width = 600, height = 500;
	var colors = d3.scaleOrdinal(d3.schemeSet2 );
	var svg = d3.select("#chart1").append("svg")
		.attr("width",width)
		.attr("height",height)
		
	var details = [{grade:"A+", number:8},
					{grade:"A", number:21},
					{grade:"B", number:15},
					{grade:"C", number:29},
					{grade:"D", number:11},
					{grade:"F", number:6}];
					
	var data = d3.pie()
		.sort(null)
		.value(function(d){return d.number;})(details);
		console.log(data)
	
	var segments = d3.arc()
		
		.innerRadius(40)
		.outerRadius(200)
		.padAngle(.05)
		.padRadius(50);
		
	var sections = svg.append("g")
		
		.attr("transform", "translate(250,250)")
		.selectAll("path")
		.data(data);
	
	sections.enter().append("path")
		.transition()
		.delay(function(d,i) {return i * 400; })
		.duration(200)
		.attr("d",segments)
		.attr("fill", function(d){return colors(d.data.number);
		});
		
		
	var content = d3.select("g")
		.selectAll("text")
		.data(data);
		
	content.enter().append("text")
		.each(function(d){
			var center = segments.centroid(d);
			d3.select(this)
				.transition()
				.delay(2500)
				.duration(500)
				.attr("x",center[0])
				.attr("y",center[1])
				.text(d.data.number);
				
		})
	
	
}

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



