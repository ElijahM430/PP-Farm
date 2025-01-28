class Upgrade {
    constructor(cost, buttonId, upgradeName) {
        this.upgradeName = upgradeName;
        this.cost = cost;
        this.buttonId = buttonId;
        this.owned = false;
        this.visible = false;
    }
    purchase(){
        score -= this.cost;
        this.owned = true;
    }
    
    buttonState() {
        if (this.owned) {
            document.getElementById(this.buttonId).style.display = 'none';
        }

        if (!this.visible) {
            document.getElementById(this.buttonId).style.display = 'none';
            if (score >= this.cost) {
                this.visible = true;
                document.getElementById(this.buttonId).style.display =
                    'initial';
            }
        }

        if (score < this.cost) {
            document.getElementById(this.buttonId).disabled = true;
        } else {
            document.getElementById(this.buttonId).disabled = false;
        }

        document.getElementById(this.buttonId).innerHTML = 'Buy '  +
        this.upgradeName + ' (cost: PP '+ Math.ceil(this.cost).toLocaleString() +
        ' PP)';
    }
}