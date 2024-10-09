window.onload = pageLoad;

function pageLoad(){
	var startButton = document.getElementById("start");
    startButton.onclick = startGame;
}

function startGame(){
	alert("Ready");
	addBox();
	timeStart();
}

function timeStart(){
	var TIMER_TICK = 1000;
	var timer = null;
	var min = 0.5;
	var second = min*10; 
	var x = document.getElementById('clock');
	x.innerHTML = second;
	
	timer = setInterval(timeCount, TIMER_TICK);
	
	function timeCount(){
		var allbox = document.querySelectorAll("#layer div"); 
		second--;
		x.innerHTML = second;

		if (second <= 0) {
            clearInterval(timer);
            if (allbox.length == 0) {
                alert("You win!");
            } else {
                alert("Game over");
                clearScreen();
            }
        }
        if (allbox.length == 0 && second > 0) {
            clearInterval(timer);
            alert("You win!");
        }
	}
}

function addBox(){
	var numbox = document.getElementById("numbox").value;
	var gameLayer = document.getElementById("layer");
	var colorDrop = document.getElementById("color").value;

	for (var i =0; i<numbox;i++){
		var tempbox = document.createElement("div");
		tempbox.className = "square";
		tempbox.id = "box"+i;
		tempbox.style.left = Math.random() * (500 - 25) + "px";
		tempbox.style.top = Math.random() * (500 - 25) + "px";
		tempbox.style.backgroundColor = colorDrop;
		gameLayer.appendChild(tempbox);
		bindBox(tempbox);
	}
}

function bindBox(box){
	box.onclick = function(){
		box.parentNode.removeChild(box);
	}
}

function clearScreen(){
	var allbox = document.querySelectorAll("#layer div");

	for (var i=0;i<allbox.length;i++){
		allbox[i].parentNode.removeChild(allbox[i]);
	}
}