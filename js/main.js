var HG = $('#helpGo');
var HR = $('#helpResult');

HG.on("click", function () {
	var rN = $('#helpNum').val();
	numConvert(rN);
	HR.text(nsComb);
});

var question = $('#question');
var answer = $('#answer');
var check = $('#check');
var ansRes =$('#ansRes');

randomMe();

check.on("click", function () {
	qText = question.text();
	numConvert(qText);
	if (nsComb == answer.val()){
		ansRes.text("You \'re right")
		ansRes.css("color", "green")
	} else {
		ansRes.text("No " + qText + " is " + nsComb);
		ansRes.css("color", "red");
	}
	randomMe();
});


function randomMe () {
	randNum = Math.floor((Math.random() * 100) + 1);
	question.text(randNum);
};

//LOGIC
var nsComb;
var und = "und",
	toTens = "zig",
	toTens3 = "ßig",
	toTeens = "zehn";
var	t = [
	"null",
	"eins",
	"zwei",
	"drei",
	"vier",
	"fünf",
	"sechs",
	"sieben",
	"acht",
	"neun"
];

var exceptions = ["elf", "zwölf", "zwanzig"];

function numConvert (ns) {
	var nsTens = Math.floor(ns/10);
	var nsOnes = ns - nsTens*10;
	var tens = t[nsTens].substring(0,4);
	var ones = t[nsOnes].substring(0,4);
	if (ns >= 0 && ns < 11) {
		window.nsComb = t[ns];
	} else if (ns == 11) {
		window.nsComb = exceptions[0];
	} else if (ns == 12) {
		window.nsComb = exceptions[1];
	} else if (ns < 30) {
		if (ns < 20) {
			window.nsComb = ones + toTeens;
		} else if (ns == 20) {
			window.nsComb = exceptions[2] + toTens;
		} else if (ns > 20) {
			window.nsComb = t[nsOnes] + und + exceptions[2];
		}
	} else if ( ns >= 30 ) {
		if (nsOnes > 0) {
			if (nsTens == 3) {
				window.nsComb = t[nsOnes] + und + tens + toTens3;
			} else {
				window.nsComb = t[nsOnes] + und + tens + toTens;
			};
		} else {
			if (nsTens == 3) {
				window.nsComb = tens + toTens3;
			} else {
				window.nsComb = tens + toTens;
			};
		};
	};
};