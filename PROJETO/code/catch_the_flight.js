"use strict";

(function()
{	
	window.addEventListener("load", main);
}());


function main()
{
	var sWidth = window.screen.availWidth;
	var wWidth = 900;
	var wHeight = 600;
	var wLeft = (sWidth - wWidth)/2;	//center window on the screen
	var myWindow = window.open("html/pmain.html", "mainWindow", "width = " + wWidth + ", height = " + wHeight + ", left = " + wLeft);
}

