const tickRate = 1000 / 30;
let score = 0;

let harumachi = new beatmap('harumachi', 0.1, 15, 'buyHarumachiClover');

function incScore() {
    score += harumachi.cps;
}

function scorePlusPlus(){
    score++;
}

function updatePage() {
    incScore();
    document.getElementById('score').innerHTML = 
    Math.floor(score).toLocaleString();
}

setInterval(updatePage, tickRate);

