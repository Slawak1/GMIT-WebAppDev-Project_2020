




function pie_starter(form){
	var val1 = form.Value1.value
	var val2 = form.Value2.value
	var val3 = form.Value3.value
	var val4 = form.Value4.value
	var val5 = form.Value5.value
	var val6 = form.Value6.value
	
	pieChart(val1, val2, val3, val4, val5, val6)
}


// Code adapted from https://www.youtube.com/watch?v=P8KNr0pDqio tutorial. 
function pieChart(val1, val2, val3, val4, val5, val6) {
	
	// remove already existing svg from div
	d3.select("#chart1").select("svg").remove();

	
	// read values from form

	
	
	// Read data from array
	var details = [{grade:"A+", number:val1},
					{grade:"A", number:val2},
					{grade:"B", number:val3},
					{grade:"C", number:val4},
					{grade:"D", number:val5},
					{grade:"F", number:val6}];
					
					
	// set pie chart width and height
	var width = 600, height = 500;
	
	// set color schema
	var colors = d3.scaleOrdinal(d3.schemeSet2 );
	
	// append svg to html div with attributes 
	var svg = d3.select("#chart1").append("svg")
		.attr("width",width)
		.attr("height",height)
		
					
	var data = d3.pie()
		.sort(null)
		.value(function(d){return d.number;})(details);
		
	
	var segments = d3.arc()
		
		.innerRadius(40)
		.outerRadius(200)
		.padAngle(.05)
		.padRadius(50);
		
	
	// Code to add shadow to pie chart.
	// Code taken from https://stackoverflow.com/a/17373466		
	var defs = svg.append("defs");

    var filter = defs.append("filter")
        .attr("id", "dropshadow")

    filter.append("feGaussianBlur")
        .attr("in", "SourceAlpha")
        .attr("stdDeviation", 5)
        .attr("result", "blur");
    filter.append("feOffset")
        .attr("in", "blur")
        .attr("dx", 4)
        .attr("dy", 5)
        .attr("result", "offsetBlur");

    var feMerge = filter.append("feMerge");

    feMerge.append("feMergeNode")
        .attr("in", "offsetBlur")
    feMerge.append("feMergeNode")
        .attr("in", "SourceGraphic");	
		
		
	  
	var sections = svg.append("g")
		.attr("transform", "translate(250,250)")
		.selectAll("path")
		.data(data);
	
	sections.enter().append("path")
		.transition()
		.delay(function(d,i) {return 1000 + i * 400; })
		.duration(800)
		.attr("filter", "url(#dropshadow)") // add filter 
		.attr("d",segments)
		.attr("fill", function(d){return colors(d.data.number)
		;
		});
		
		
	var content = d3.select("g")
		.selectAll("text")
		.data(data);
		
	content.enter().append("text")
		.each(function(d){
			var center = segments.centroid(d);
			d3.select(this)
				.transition()
				.delay(3500)
				.duration(500)
				.attr("x",center[0])
				.attr("y",center[1])
				.text(d.data.number);
				
		})
	
	
}

// Method to animate transition of DIV - change opacity from 0 to 100 
function transition_container(val) {
	d3.select(val)
    .transition()
    .duration(3000)
    .style("opacity", "100")
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



