class beatmap {
    constructor(songName, baseCps, baseCost, buttonId) {
        this.songName = songName;
        this.baseCps = baseCps / (1000 / tickRate);
        this.cost = baseCost;
        this.buttonId = buttonId;
        this.amountOwned = 0;
        this.cps = 0;
        this.visible = true; // change this to false!!!!!!
    }

    purchase(){
        score -= this.cost;
        this.amountOwned++;
        this.cps = this.baseCps * this.amountOwned;
        this.cost = Math.ceil(this.cost * 1.15 ** this.amountOwned)
    }
}