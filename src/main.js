const tickRate = 1000 / 30;
let score = 0;

let Harumachi = new beatmap('harumachi', 0.1, 15, 'buyHarumachiClover');
let inferno = new beatmap('inferno', 0.5, 50, 'buyInferno');
let songthatmightplaywhenyoufightsans = new beatmap('songthatmightplaywhenyoufightsans', 5, 500, 'buySongthatmightplaywhenyoufightsans');

function incScore() {
    score += Harumachi.cps;
    score += inferno.cps;
    score += songthatmightplaywhenyoufightsans.cps;
}

function scorePlusPlus(){
    score++;
}

function updateButtons() {
    Harumachi.buttonState();
    inferno.buttonState();
    songthatmightplaywhenyoufightsans.buttonState();
}

function updatePage() {
    incScore();
    updateButtons();
    document.getElementById('score').innerHTML = 
    Math.floor(score).toLocaleString();
}

setInterval(updatePage, tickRate);