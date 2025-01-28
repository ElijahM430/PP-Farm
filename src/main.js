const tickRate = 1000 / 30;
clickStrength = 1;
let score = 500;

//Below are beatmaps
let Harumachi = new beatmap('Harumachi Clover', 0.5, 15, 'buyHarumachiClover');
let inferno = new beatmap('Inferno', 3, 250, 'buyInferno');
let songthatmightplaywhenyoufightsans = new beatmap('Song that might play when you fight sans', 5, 750, 'buySongthatmightplaywhenyoufightsans');
let backstabber = new beatmap('backstabber', 20, 2500, 'buyBackstabber');

// Below are upgrades
let hidden1 = new hidden('Hidden for Harumachi Clover', 500, Harumachi, "buyHidden1");
let hidden2 = new hidden('Hidden for Inferno', 1000, inferno, "buyHidden2");
let hidden3 = new hidden('Hidden for Sans', 2000, songthatmightplaywhenyoufightsans, "buyHidden3");

function scorePlusPlus() {
    score += clickStrength;
}

function incScore() {
    score += Harumachi.cps;
    score += inferno.cps;
    score += songthatmightplaywhenyoufightsans.cps;
    score += backstabber.cps;
}


function updateButtons() {
    Harumachi.buttonState();
    inferno.buttonState();
    songthatmightplaywhenyoufightsans.buttonState();
    backstabber.buttonState();
    hidden1.buttonState();
    hidden2.buttonState();
    hidden3.buttonState();
}

function updatePage() {
    incScore();
    updateButtons();
    document.getElementById('score').innerHTML = 
    Math.floor(score).toLocaleString();
}

setInterval(updatePage, tickRate);