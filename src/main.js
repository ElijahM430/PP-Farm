const tickRate = 1000 / 30;
let score = 0;

let Harumachi = new beatmap('harumachi', 0.5, 15, 'buyHarumachiClover');
let inferno = new beatmap('inferno', 3, 150, 'buyInferno');
let songthatmightplaywhenyoufightsans = new beatmap('songthatmightplaywhenyoufightsans', 5, 500, 'buySongthatmightplaywhenyoufightsans');
let backstabber = new beatmap('backstabber', 10, 1200, 'buyBackstabber');

function incScore() {
    score += Harumachi.cps;
    score += inferno.cps;
    score += songthatmightplaywhenyoufightsans.cps;
    score += backstabber.cps;
}

function scorePlusPlus(){
    score++;
}

function updateButtons() {
    Harumachi.buttonState();
    inferno.buttonState();
    songthatmightplaywhenyoufightsans.buttonState();
    backstabber.buttonState();
}

function updatePage() {
    incScore();
    updateButtons();
    document.getElementById('score').innerHTML = 
    Math.floor(score).toLocaleString();
}

setInterval(updatePage, tickRate);