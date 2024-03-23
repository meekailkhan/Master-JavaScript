// class keyword part 2

class Animal{
    // function work
    constructor(animalName,animalAge,food){
        this.animalName = animalName;
        this.animalAge = animalAge;
        this.food = food
        
    }

    // prototype work
    eate(){
        return console.log(`name of animal is ${this.animalName} and age of this animal ${this.animalAge} and is eate ${this.food}`)
    }
    adult(){
        if(this.animalAge>6){
            console.log(`the ${this.animalName} is adult`)
        }else{
            console.log(`the ${this.animalName} is not adult`)
        }
    }

    
}

const animal1 = new Animal("cat",8,"milk and meat")
const animal2 = new Animal("dog",4,"biscute and meat")

console.log(animal1)
animal1.eate()
animal2.eate()
animal2.adult()
