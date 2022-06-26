// Write your code here
// class Dog {
//     constructor(name, breed){
//         this.name = name;
//         this.breed = breed;
//     }
// }

// let bigFluffyDog1 = new Dog('Buzz', 'greatPyrenees');
// let bigFluffyDog2 = new Dog('Woody', 'labrador');

// bigFluffyDog1; // => Dog { name: 'Buzz', breed: 'greatPyrenees' }
// bigFluffyDog2; // => Dog { name: 'Woody', breed: 'labrador' }

class Breakfast{
    constructor(food, drink){
        this.food = food;
        this.drink = drink;
    }
}
let breakfast = new Breakfast('pancake', 'coffee');
class Lunch{
    constructor(salad, soup, drink){
        this.salad = salad;
        this.soup = soup;
        this.drink = drink;
    }
}
let lunch = new Lunch('ceasar', 'birdsnest', 'pineapple juice')
class Dinner{
    #dessert;
    constructor(salad, soup, entree, dessert){
        this.salad = salad;
        this.soup = soup;
        this.entree = entree;
        this.#dessert = dessert;
    }
}
let dinner =  new Dinner('thousand island', 'eggsoup', 'ribeye', 'lava cake')

