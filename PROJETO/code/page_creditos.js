
(function()
{
	window.addEventListener("load", main);
}());

function main(){

	var exitBtn = document.getElementById("exitBtn");

	var bh = function(ev){
		allBtnHandler(exitBtn);
	}
	exitBtn.addEventListener("click", bh);
}


function allBtnHandler(exitBtn){

	window.location.replace("../html/pmain.html");
}