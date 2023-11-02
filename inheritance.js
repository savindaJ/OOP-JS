class Animals {
    constructor(name, specie) {
        this.name = name;
        this.specie = specie;
    }
    sing() {
        return `${this.name} can sing`;
    }
    dance() {
        return `${this.name} can dance`;
    }
}

class Cat extends Animals{
    constructor(name, age, whiskerColor) {
        super(name, age);
        this.whiskerColor = whiskerColor;
    }
    whiskers() {
        return `I have ${this.whiskerColor} whiskers`;
    }
}
let bingo = new Animals("Bingo", "Hairy");
console.log(bingo);
console.log(bingo.sing());
console.log(bingo.dance());

const cat = new Cat("Garfieald",4,"brown and white");
console.log(cat.whiskers());
console.log(cat.sing());
console.log(cat.dance());

