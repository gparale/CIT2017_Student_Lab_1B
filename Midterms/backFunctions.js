var popup = 0;
var horizontal = 0;
var vertical = 0;
var height = 300;
var dupl_divs = 0;
var sel_div = 0;

menu = document.getElementById("menu")
control = document.getElementById("controls")
back_input = document.getElementById("back_input")
displayer = document.getElementById("display")
title = document.getElementById("title")
descriptions = document.getElementById("description")
title_input = document.getElementById("title_input")
colour_input = document.getElementById("color_input")
desc_input = document.getElementById("desc_input")
body_input = document.getElementById("keypadders")
add_div = document.getElementById("add_div")

menu.addEventListener("click",function(){
	if (popup == 0){
		control.style.bottom = "0px";
		popup = 1;
	}
	else if (popup == 1){
		control.style.bottom = "-160px";
		popup = 0;
	}
});

displayer.addEventListener("click", function(){
	sel_div = 0
});

function changeBG(tobeChanged){
	if (back_input.value == "horse"){
		tobeChanged.style.backgroundImage = "url(img/horse.jpg)"
	}
	else if (back_input.value == "mountain"){
		tobeChanged.style.backgroundImage = "url(img/mountain.jpg)"
	}
	else if (back_input.value == "night"){
		tobeChanged.style.backgroundImage = "url(img/night.jpg)"
	}
	else if (back_input.value.indexOf("epic") != -1){
		tobeChanged.style.backgroundImage = "url(img/epic.jpg)"
	}
	else{
		tobeChanged.style.backgroundImage = "url(" + back_input.value + ")";
	}
}
back_input.addEventListener("keypress", function(event){
	if(event.keyCode == 13){
		if(sel_div == 0){
			changeBG(displayer);
		}
		else{
			changeBG(document.getElementById("duplDiv_"+sel_div));
		}
		
	}
});

back_input.addEventListener("keydown", function(event){
	if(sel_div == 0){
		if(event.keyCode == 37){
			horizontal -= 10
			displayer.style.backgroundPosition = horizontal + "px " + vertical + "px"
		}
		else if(event.keyCode == 38){
			vertical -= 10
			displayer.style.backgroundPosition = horizontal + "px " + vertical + "px"
		}
		else if(event.keyCode == 39){
			horizontal += 10
			displayer.style.backgroundPosition = horizontal + "px " + vertical + "px"
		}
		else if(event.keyCode == 40){
			vertical += 10
			displayer.style.backgroundPosition = horizontal + "px " + vertical + "px"
		}
		else if(event.keyCode == 189){
			height -= 10
			displayer.style.height = height + "px "
		}
		else if(event.keyCode == 187){
			height += 10
			displayer.style.height = height + "px "
		}
		
	}
	else{
		if(event.keyCode == 37){
			horizontal -= 10
			document.getElementById("duplDiv_"+sel_div).style.backgroundPosition = horizontal + "px " + vertical + "px"
		}
		else if(event.keyCode == 38){
			vertical -= 10
			document.getElementById("duplDiv_"+sel_div).style.backgroundPosition = horizontal + "px " + vertical + "px"
		}
		else if(event.keyCode == 39){
			horizontal += 10
			document.getElementById("duplDiv_"+sel_div).style.backgroundPosition = horizontal + "px " + vertical + "px"
		}
		else if(event.keyCode == 40){
			vertical += 10
			document.getElementById("duplDiv_"+sel_div).style.backgroundPosition = horizontal + "px " + vertical + "px"
		}
		else if(event.keyCode == 189){
			height -= 10
			document.getElementById("duplDiv_"+sel_div).style.height = height + "px "
		}
		else if(event.keyCode == 187){
			height += 10
			document.getElementById("duplDiv_"+sel_div).style.height = height + "px "
		}
	}
});

title_input.addEventListener("keyup", function(event){
	if(sel_div == 0){
		title.innerHTML = title_input.value;
	}
	else{
		document.getElementById("duplTitle_"+sel_div).innerHTML = title_input.value;
	}
});

desc_input.addEventListener("keyup", function(event){
	if(sel_div == 0){
		descriptions.innerHTML = desc_input.value;
	}
	else{
		document.getElementById("duplDesc_"+sel_div).innerHTML = desc_input.value;
	}
});
colour_input.addEventListener("change", function(){
	if(sel_div == 0){
		title.style.color = colour_input.value
		descriptions.style.color = color_input.value
		title.style.borderColor = color_input.value
	}
	else{
		document.getElementById("duplTitle_"+sel_div).style.color = colour_input.value
		document.getElementById("duplDesc_"+sel_div).style.color = color_input.value
		document.getElementById("duplTitle_"+sel_div).style.borderColor = color_input.value
	}
});

function copy_changes(){
	if(dupl_divs == 1){
		smallStuff.style.backgroundImage = displayer.style.backgroundImage
		smallStuff.style.backgroundPosition = displayer.style.backgroundPosition
		
		smallTitle.style.color = title.style.color
		smallDesc.style.color = descriptions.style.color
		smallTitle.style.borderColor = title.style.borderColor
		
		smallTitle.innerHTML = title.innerHTML
		smallDesc.innerHTML = descriptions.innerHTML
	}
	else{
		console.log(document.getElementById("duplDiv_"+(dupl_divs-1)).style.backgroundImage)
		smallStuff.style.backgroundImage = document.getElementById("duplDiv_"+(dupl_divs-1)).style.backgroundImage
		smallStuff.style.backgroundPosition = document.getElementById("duplDiv_"+(dupl_divs-1)).style.backgroundPosition
		
		smallTitle.style.color = document.getElementById("duplTitle_"+(dupl_divs-1)).style.color
		smallDesc.style.color = document.getElementById("duplDesc_"+(dupl_divs-1)).style.color
		smallTitle.style.borderColor = document.getElementById("duplTitle_"+(dupl_divs-1)).style.borderColor
		
		smallTitle.innerHTML = document.getElementById("duplTitle_"+(dupl_divs-1)).innerHTML
		smallDesc.innerHTML = document.getElementById("duplDesc_"+(dupl_divs-1)).innerHTML
	}
	
}

add_div.addEventListener("click",function(){
	smallStuff = document.createElement("div")
	smallTitle = document.createElement("div")
	smallDesc = document.createElement("div")
	
	body_input.appendChild(smallStuff)
	
	smallStuff.appendChild(smallTitle)
	smallStuff.appendChild(smallDesc)
	
	dupl_divs += 1;
	smallStuff.id = "duplDiv_" + dupl_divs;
	smallTitle.id = "duplTitle_" + dupl_divs;
	smallDesc.id = "duplDesc_" + dupl_divs;
	
	smallStuff.addEventListener("click",function(event){
		dsdss = event.target.id.split("_")
		sel_div = parseInt(dsdss[1])
	})
	
	sel_div = dupl_divs
	
	copy_changes();
	
	smallStuff.className = "smallDivs col-xs-12 col-sm-6 col-md-4 col-lg-3"
	smallTitle.className = "smallTitle"
	smallDesc.className = "smallDesc"
	
});
