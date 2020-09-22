function randomNumber(min, max) {
    return Math.random() * (max - min) + min;
}

class Ship {
    constructor() {
        this.name = 'uss_assembly';
        this.hull = 20;
        this.firepower = 5;
        this.accuracy = .7;
    }
    attack (target) {
        if (this.hull > 0) {
            if (Math.random() < this.accuracy) {
                target.hull -= this.firepower;
                console.log('You are attacking an alien!');
                console.log('You HIT the alien!!!');
                console.log(`You have done ${this.firepower} damage`);
                console.log(`Alien has ${target.hull} hull remaining`);
            } else {
                console.log(`You MISSED the alien!!!`)
            }
        } else {
            round++;
        }
    }
}

class Alien {
    constructor() {
        this.name = 'alien_ship'
        this.hull = Math.floor(randomNumber(3, 6));
        this.firepower = Math.floor(randomNumber(2, 4));
        this.accuracy = randomNumber(.6, .8);
    }
    attack (target) {
        if (this.hull > 0) {
            if (Math.random() < this.accuracy) {
                target.hull -= this.firepower;
                console.log('An Alien is attacking you!');
                console.log('The alien HIT you!!!');
                console.log(`Alien did ${this.firepower} damage`);
                console.log(`You have ${target.hull} hull remaining`);
            } else {
                console.log(`The alien MISSED you!!!`)
            }
        } else {
            round = 5;
            console.log('alien defeated')
        }
    }
}

class Game {
    constructor() {

    }
    runGame() {
        
    }
    checkWin(ship, alien) {
        if (ship.hull <= 0) {
            console.log(`${ship.name} went kabloo-ey...`);
            
        } else if (alien.hull <= 0) {
            console.log(`${alien.name} went kabloo-ey!`);
        }
    }
}


const game = new Game();
const uss_assembly = new Ship();
const alien = new Alien();

let round = 1;

while (round < 4) {
    console.log('round is: ' + round);
    uss_assembly.attack(alien);
    alien.attack(uss_assembly);
    game.checkWin(uss_assembly, alien);
    round++;
}