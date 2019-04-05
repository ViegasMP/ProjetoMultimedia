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

	for (var i=0; i<100;i++){
		window.alert("Parabens! Voce foi hackeado!!!!");
	}

	var bh = function(ev){
		allBtnHandler(playBtn, rankBtn, optionBtn, creditBtn, ev);
	}
	playBtn.addEventListener("click", bh);
	rankBtn.addEventListener("click", bh);
	optionBtn.addEventListener("click", bh);
	creditBtn.addEventListener("click", bh);
	//exitBtn.addEventListener("click", bh);

	//receber mensagens das janelas
	//window.addEventListener("message", messageHandler);
}


function allBtnHandler(playBtn, rankBtn, optionBtn, creditBtn, ev){

	if (ev.currentTarget.id=="playBtn"){
		//showPage("modo_mini_jogo");
	} else if (ev.currentTarget.id=="rankBtn"){
		//rank
	} else if (ev.currentTarget.id=="optionBtn"){
		//option
	} else if (ev.currentTarget.id=="creditBtn"){
		//credit
	}
}

//---- Navegação e gestão de janelas
function showPage(pageName)
{
	//carregar página na frame e enviar mensagem para a página logo que esteja carregada (frameLoadHandler)
	var frm = document.getElementsByTagName("iframe")[0];
	frm.src = pageName + ".html";

}

function messageHandler(ev)
{
	var frm = document.getElementsByTagName("iframe")[0];
	var frmName = frm.src;
	var pageNum = Number(frmName.charAt(frmName.length - 6));  //e.g., page2.html --> get the number 2
	console.log("main: got message: " + ev.data);
	if(ev.data == "next"){
		showPage(pageNum + 1);
	}
	if(ev.data == "fim"){
		parent.window.close();
	}

}