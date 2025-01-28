class hidden extends Upgrade{
    constructor(upgradeName, cost, beatmap, buttonId){
        super(cost, buttonId, upgradeName);
        this.beatmap = beatmap;
    }

    purchase() {
        super.purchase();
        clickStrength++;
        this.beatmap.doubleUpgrade++;
        this.beatmap.applyDoubleUpgrade();
    }
}