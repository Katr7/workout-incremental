function NewGame() {
	this.pushups = 0;
	this.pullups = 0;
	this.chest = 0;
	this.shoulders = 0;
	this.triceps = 0;
	this.lats = 0;
	this.middleBack = 0;
	this.rt = 0;
	this.rpd = 25;
	this.money = 10;
	this.gfuel = 0;
}

var Game = new NewGame();
var g = Game;

function buyGfuel(){
	var gfuelCost = Math.floor(10 * Math.pow(1.1,g.gfuel));
	if(g.money >= g.gfuelPrice){
		g.rpd = g.rpd++;
	}
	var nextCost = Math.floor(10 * Math.pow(1.1,g.gfuel));
    document.getElementById('gfuelCost').innerHTML = nextCost;
	document.getElementById('rpd').innerHTML = "Reps Per Day: " + g.rpd;
}


function onPushUp(){
	if(g.rt < g.rpd){
		g.pushups = g.pushups + 1;
		g.chest = g.chest + 1;
		g.shoulders = g.shoulders + 0.5;
		g.triceps = g.triceps + 0.5;
		g.rt = g.rt + 1;
		document.getElementById("pushups").innerHTML = "Push Ups: " + g.pushups;
		document.getElementById("chest").innerHTML = g.chest;
		document.getElementById("shoulders").innerHTML = g.shoulders;
		document.getElementById("triceps").innerHTML = g.triceps;
		document.getElementById("rt").innerHTML = "Reps Today: " + g.rt;
		document.getElementById("rpd").innerHTML = "Reps Per Day: " + g.rpd;
	}
}

function onPullUp(){
	if(g.rt < g.rpd){
		g.pullups = g.pullups + 1;
		g.lats = g.lats + 1;
		g.middleBack = g.middleBack + 0.5;
		g.rt = g.rt + 1;
		document.getElementById("pullups").innerHTML = "Pull Ups: " + g.pullups;
		document.getElementById("lats").innerHTML = g.lats;
		document.getElementById("middleBack").innerHTML = g.middleBack;
		document.getElementById("rt").innerHTML = "Reps Today: " + g.rt;
		document.getElementById("rpd").innerHTML = "Reps Per Day: " + g.rpd;
	}
}

function save(){
	window.localStorage['SaveName'] = JSON.stringify(Game);

	window.GameTwo = JSON.parse(window.localStorage['SaveName']);
}

window.onload = function(){
	window.GameTwo = JSON.parse(window.localStorage['SaveName']);
	var gt = GameTwo;
	g.pushups = gt.pushups;
	g.pullups = gt.pullups;
	g.chest = gt.chest;
	g.shoulders = gt.shoulders;
	g.triceps = gt.triceps;
	g.lats = gt.lats;
	g.middleBack = gt.middleBack;
	g.rt = gt.rt;
	g.money = gt.money;
	document.getElementById("pushups").innerHTML = "Push Ups: " + g.pushups;
	document.getElementById("pullups").innerHTML = "Pull Ups: " + g.pullups;
	document.getElementById("chest").innerHTML = g.chest;
	document.getElementById("shoulders").innerHTML = g.shoulders;
	document.getElementById("triceps").innerHTML = g.triceps;
	document.getElementById("lats").innerHTML = g.lats;
	document.getElementById("middleBack").innerHTML = g.middleBack;
	document.getElementById("rt").innerHTML = "Reps Today: " + g.rt;
	document.getElementById("rpd").innerHTML = "Reps Per Day: " + g.rpd;
	document.getElementById("money").innerHTML = "Money: $" + g.money;
}

function load(){
	window.GameTwo = JSON.parse(window.localStorage['SaveName']);
	var gt = GameTwo;
	g.pushups = gt.pushups;
	g.pullups = gt.pullups;
	g.chest = gt.chest;
	g.shoulders = gt.shoulders;
	g.triceps = gt.triceps;
	g.lats = gt.lats;
	g.middleBack = gt.middleBack;
	g.rt = gt.rt;
	g.money = gt.money;
	document.getElementById("pushups").innerHTML = "Push Ups: " + g.pushups;
	document.getElementById("pullups").innerHTML = "Pull Ups: " + g.pullups;
	document.getElementById("chest").innerHTML = g.chest;
	document.getElementById("shoulders").innerHTML = g.shoulders;
	document.getElementById("triceps").innerHTML = g.triceps;
	document.getElementById("lats").innerHTML = g.lats;
	document.getElementById("middleBack").innerHTML = g.middleBack;
	document.getElementById("rt").innerHTML = "Reps Today: " + g.rt;
	document.getElementById("rpd").innerHTML = "Reps Per Day: " + g.rpd;
	document.getElementById("money").innerHTML = "Money: $" + g.money;
}

function deleteSave(){
	window.GameTwo = JSON.parse(window.localStorage['SaveName']);
	var gt = GameTwo;
	g.pushups = 0;
	g.pullups = 0;
	g.chest = 0;
	g.shoulders = 0;
	g.triceps = 0;
	g.lats = 0;
	g.middleBack = 0;
	g.rt = 0;
	gt.pushups = g.pushups;
	gt.pullups = g.pullups;
	gt.chest = g.chest;
	gt.shoulders = g.shoulders;
	gt.triceps = g.triceps;
	gt.lats = g.lats;
	gt.middleBack = g.middleBack;
	gt.rt = g.rt
	document.getElementById("pushups").innerHTML = "Push Ups: " + g.pushups;
	document.getElementById("pullups").innerHTML = "Pull Ups: " + g.pullups;
	document.getElementById("chest").innerHTML = g.chest;
	document.getElementById("shoulders").innerHTML = g.shoulders;
	document.getElementById("triceps").innerHTML = g.triceps;
	document.getElementById("lats").innerHTML = g.lats;
	document.getElementById("middleBack").innerHTML = g.middleBack;
	document.getElementById("rt").innerHTML = "Reps Today: " + g.rt;
	window.GameTwo = JSON.parse(window.localStorage['SaveName']);
}

function onSleep(){
	g.chest = Math.floor(g.chest * 0.8);
	g.shoulders = Math.floor(g.shoulders * 0.8);
	g.triceps = Math.floor(g.triceps * 0.8);
	g.lats = Math.floor(g.lats * 0.8);
	g.middleBack = Math.floor(g.middleBack * 0.8);
	g.rt = 0;
	document.getElementById("lats").innerHTML = g.lats;
	document.getElementById("middleBack").innerHTML = g.middleBack;
	document.getElementById("chest").innerHTML = g.chest;
	document.getElementById("shoulders").innerHTML = g.shoulders;
	document.getElementById("triceps").innerHTML = g.triceps;
	document.getElementById("rt").innerHTML = "Reps Today: " + g.rt;
}


window.setInterval(function(){
	save()
}, 1000);
