"use strict";


(function()
{
	window.addEventListener("load", main);
}());

function main(){

	var playBtn = document.getElementById("playBtn");
	var rankBtn = document.getElementById("rankBtn");
	var optionBtn = document.getElementById("optionBtn");
	var creditBtn = document.getElementById("creditBtn");
	//var exitBtn = document.getElementById("exitBtn");

	var bh = function(ev){
		allBtnHandler(playBtn, rankBtn, optionBtn, creditBtn, ev);
	}
	playBtn.addEventListener("click", bh);
	rankBtn.addEventListener("click", bh);
	optionBtn.addEventListener("click", bh);
	creditBtn.addEventListener("click", bh);
	//exitBtn.addEventListener("click", bh);
}


function allBtnHandler(playBtn, rankBtn, optionBtn, creditBtn, ev){

	if (ev.currentTarget.id=="playBtn"){
		//play
		window.location.replace("../html/modo_mini_jogo.html");
	} else if (ev.currentTarget.id=="rankBtn"){
		//rank
		window.location.replace("../html/page_ranking.html");
	} else if (ev.currentTarget.id=="optionBtn"){
		//option
		window.location.replace("../html/page_opcoes.html");
	} else if (ev.currentTarget.id=="creditBtn"){
		//credit
		window.location.replace("../html/page_creditos.html");
	}
}