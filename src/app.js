var tempInp = [];
var $ = require('jQuery');
require("../jquery.js");
require("../style.css");


var button = document.getElementsByClassName("button")[0];
var buttonDeleteNew = document.getElementsByClassName("buttonDeleteNew")[0];
var ulEl = document.getElementsByClassName("widget-list")[0];
var content = document.getElementById("content");
var buttonDeleteLast = document.getElementsByClassName("buttonDeleteLast")[0];
var widgetEvent = document.getElementsByClassName("widgetEvent")[0];
var buttonExit = document.createElement("button");
buttonExit.classList.add("buttonExit");

var FormD = document.createElement("div");  
FormD.classList.add("box");
var center = document.createElement("div");
center.classList.add("upper");
var form = document.createElement("form");
var input = document.createElement("input");
var selectMinutes = document.createElement("select");
var selectHours = selectMinutes.cloneNode();
var submit = input.cloneNode();


input.setAttribute("name", "myInput");
selectMinutes.setAttribute("name", "selectMinutes");
submit.setAttribute("type", "submit");
submit.value = "OK";
input.value = "event";

var container = document.createElement("div");
container.classList.add("container");

var containerTime = document.createElement("div");
containerTime.classList.add("containerTime");

var containerDate = document.createElement("div");
containerDate.classList.add("containerDate");

var leftDate = document.createElement("div");
leftDate.classList.add("leftDate");

var rightDay = document.createElement("div");
rightDay.classList.add("rightDay");



for (var index = 0;index < 60;index++){
	if(index<10)
		var option = new Option('0' + index, '0' + index, false, false)
	else if(index==24){
        selectHours = selectMinutes.cloneNode(true);
        var option = new Option(index, index, false, false);
		selectHours.setAttribute("name", "selectHours");
	}
	else
		var option = new Option(index, index, false, false)
	selectMinutes.appendChild(option);	
}


form.appendChild(input);
form.appendChild(selectHours);
form.appendChild(selectMinutes);
form.appendChild(submit);



container.appendChild(containerTime);
containerDate.appendChild(leftDate);
containerDate.appendChild(rightDay);
container.appendChild(containerDate);
document.getElementById("parent").appendChild(container);


buttonExit.onclick = function endThis(e){
    document.getElementById("main").removeChild(FormD);
}

button.onclick = function offAll(e) {
    e.preventDefault();
    if (buttonExit.parentNode==center)
        center.removeChild(buttonExit);
    center.appendChild(form);
    FormD.appendChild(center);
    document.getElementById("main").appendChild(FormD);
};

buttonDeleteNew.onclick = function offAll2(e) {
    e.preventDefault();
    var el = content.getElementsByClassName("event");
    while (content.childNodes) {
        content.removeChild(el[0]);
      }
};

buttonDeleteLast.onclick = function offAll3(e) {
    e.preventDefault();
    var el = widgetEvent.getElementsByClassName("eventLast");
    while (widgetEvent.childNodes) {
        widgetEvent.removeChild(el[0]);
      }
};

form.addEventListener("submit", function(e){
	e.preventDefault();
	var StrDiv = document.createElement("div");
    StrDiv.innerHTML = input.value + " at  " +  selectHours.value + ':' + selectMinutes.value ;
    StrDiv.classList.add("event");
	StrDiv.classList.add(selectHours.value + selectMinutes.value);
    document.getElementById("content").appendChild(StrDiv);
    document.getElementById("main").removeChild(FormD);
    tempInp = Object.values(content.getElementsByTagName("div"));
});

function saveOldEvent(temp){
    temp.addEventListener("click", function(e){
    if(form.parentNode == center)
        center.removeChild(form);
    buttonExit.innerHTML = temp.innerHTML;
    center.appendChild(buttonExit);
    document.getElementById("main").appendChild(FormD);
    })
}
function checkEvent(temp){	

    temp.addEventListener("click", function(e){
        if(form.parentNode == center)
            center.removeChild(form);
        buttonExit.innerHTML = temp.innerHTML;
        center.appendChild(buttonExit);
        document.getElementById("main").appendChild(FormD);
    })
    
	var d = new Date();
	var hours = d.getHours();
	var minutes = d.getMinutes();
	var time = "0";
	if (hours < 10)
		time +=  String(hours);
	else
		time =  String(hours);
	if (minutes < 10){
		time += "0";
		time += String(minutes);
	}
	else
        time += String(minutes);
	if (temp.classList[1] == time){
        var ANew = document.createElement("div");
        ANew.classList = temp.classList; 
        ANew.classList.remove("event");
        ANew.classList.add("eventLast");
        ANew.innerHTML = temp.innerHTML;
		document.getElementsByClassName("widgetEvent")[0].appendChild(ANew);
		content.removeChild(temp);
		tempInp = Object.values(content.getElementsByTagName("div"));
	}
	
}
function all2(){
    tempInp.forEach(checkEvent);
    var elementsLast = widgetEvent.getElementsByTagName("div");
    elementsLast = Array.from(elementsLast);
    if(elementsLast.length){ 
       elementsLast.forEach(saveOldEvent);
    }
}

var createDivTime = function(temp){
	var resourceTemplate = function (number) {
    	var content = '<div class = the' + number + '></div>';
    	return content;
	};
	containerTime.innerHTML += resourceTemplate(temp);
};

var createDivDate = function(temp){
	var resourceTemplate = function (number) {
    	var content = '<div class = date' + number + '></div>';
    	return content;
	};
	leftDate.innerHTML += resourceTemplate(temp);
};

var createDivDay = function(temp){
	var resourceTemplate = function (number) {
		var week = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    	var content = '<div class = dayOfTheWeek>' + week[number]  + '</div>';
    	return content;
	};
	rightDay.innerHTML = resourceTemplate(temp);
};

function all(){
		var d = new Date();
		var day = d.getDate();
		var month = d.getMonth() + 1;
		var hours = d.getHours();
		var minutes = d.getMinutes();
		var seconds = d.getSeconds();
		var time =[];
		var date = [];
		var year = d.getFullYear();
		var dayWeek = d.getDay();

		if (day < 10)
			date.push(0 , day, "Day");
		else
			date.push(Math.trunc(day/10), day % 10, "Day" ) ;

		if (month < 10)
			date.push(0 , month, "Month");
		else
			date.push(Math.trunc(month/10), month % 10, "Month") ;
		date.push(Math.trunc(year/1000), Math.trunc((year%1000)/100), Math.trunc((year%100)/10), year % 10, "Year");

		if (hours < 10)
			time.push(0 , hours, 11);
		else
			time.push(Math.trunc(hours/10), hours % 10, 11) ;

		if (minutes < 10)
			time.push(0 , minutes, 11);
		else
			time.push(Math.trunc(minutes/10), minutes % 10, 11);

		if (seconds < 10)
			time.push(0 , seconds);
		else
			time.push(Math.trunc(seconds/10), seconds % 10) ;


		containerTime.innerHTML = "";
		leftDate.innerHTML="";

		time.forEach(createDivTime);
		date.forEach(createDivDate);
		createDivDay(dayWeek);
		if(tempInp.length>0)
			tempInp.forEach(checkIvent);
};

(function timer(){
	timerId = setInterval(all,1000);
}());
    setInterval(all2,1000);

