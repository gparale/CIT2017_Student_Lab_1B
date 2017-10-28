var popup = 0;
control_widgets = document.getElementById("controls")

bg1 = document.getElementById("bg1")
bg2 = document.getElementById("bg2")
bg3 = document.getElementById("bg3")
slider = document.getElementById("resize")
add_thumbs = document.getElementById("add_thumbs")

center = document.getElementById("center")
keypadders = document.getElementById("keypadders")
horizontal = parseInt(window.getComputedStyle(center).getPropertyValue("background-position-x"))
vertical = parseInt(window.getComputedStyle(center).getPropertyValue("background-position-y"))
document.getElementById("cont_widget").addEventListener("click",function(){
	if (popup == 0){
		control_widgets.style.top = "0px";
		popup = 1;
	}
	else if (popup == 1){
		control_widgets.style.top = "-350px";
		popup = 0;
	}
});

bg1.addEventListener("click",function(){
	center.style.backgroundImage = "url(sample1.gif)";
});
bg2.addEventListener("click",function(){
	center.style.backgroundImage = "url(sample2.gif)";
});
bg3.addEventListener("click",function(){
	center.style.backgroundImage = "url(sample3.gif)";
});
slider.addEventListener("change",function(){
	center.style.width = slider.value + "vw"
	center.style.height = slider.value + "vh"
});
add_thumbs.addEventListener("click",function(){
	image = document.createElement("div")
	image.style.backgroundImage = center.style.backgroundImage
	
	image.className = "image_prop"
	document.getElementById("thumbs").appendChild(image)
});


keypadders.addEventListener("keydown",function(event){
	if(event.keyCode == 37){
		horizontal -= 1
		center.style.backgroundPosition = horizontal + "% " + vertical + "%"
	}
	else if(event.keyCode == 38){
		vertical -= 3
		center.style.backgroundPosition = horizontal + "% " + vertical + "%"
	}
	else if(event.keyCode == 39){
		horizontal += 1
		center.style.backgroundPosition = horizontal + "% " + vertical + "%"
	}
	else if(event.keyCode == 40){
		vertical += 3
		center.style.backgroundPosition = horizontal + "% " + vertical + "%"
	}
});

