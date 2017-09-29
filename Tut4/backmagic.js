var x = 0;

document.getElementById("but_size").addEventListener("click",
	function(){
		if (x == 0){
			document.getElementById("back_widgets").style.left = "0px";
			x = 1}
		else if (x == 1){
			document.getElementById("back_widgets").style.left = "-200px";
			x = 0}
});
/*document.getElementById("out_button").addEventListener("click",
	function(){
		if (x == 0){
			document.getElementById("back_widgets").style.left = "0px";
			x = 1}
		else if (x == 1){
			document.getElementById("back_widgets").style.left = "-200px";
			x = 0}
});*/

document.getElementById("sel1").addEventListener("click",
	function(){
		document.getElementById("background").style.backgroundImage = "url(img/Slide1.png)";
});

document.getElementById("sel2").addEventListener("click",
	function(){
		document.getElementById("background").style.backgroundImage = "url(img/Slide2.png)";
});

document.getElementById("sel3").addEventListener("click",
	function(){
		document.getElementById("background").style.backgroundImage = "url(img/Slide3.png)";
});

document.getElementById("sel4").addEventListener("click",
	function(){
		document.getElementById("background").style.backgroundImage = "url(img/Slide4.png)";
});