class GuessingGame {
    constructor() {
        this.number = 0;
        this.min= 0;
        this.max = 0;
    }
    setRange(min, max) {
        this.min = min;
        this.max = max;
    }
    guess() {
        this.number = Math.round((this.min + this.max)/2)
        return this.number;
    }
    lower() {
        this.max = this.number;
        this.setRange(this.min, this.max)
    }
    greater() {
        this.min = this.number;
        this.setRange(this.min, this.max)
    }
  }

module.exports = GuessingGame;
