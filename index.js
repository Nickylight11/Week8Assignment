// created 3 classes: Dog, Pack, and Menu
class Dog {
    constructor(name, breed) {
        this.name = name;
        this.breed = breed;
    }

    describe() {
        return `${this.name} is ${this.breed}.`;
    }
}
//an array is created below for each dog that is in a particular pack.
class Pack {
    constructor(name) {
        this.name = name;
        this.dogs = [];
    }
//here we have the push method which allows a new dog to be added to the array.
    addDog(dog) {
        if (dog instanceof Dog) {
            this.dogs.push(dog);
        } else {
            throw new Error('You can only add an instance of Dog. Argument is not a dog: ${dog}');
    }
}

describe() {
    return `${this.name} has ${this.dogs.length} dogs.`;
 }
}
//Menu has the ability to create, view, and delete elements, 
//in this case dogs and dog packs.
class Menu {
    constructor() {
        this.packs = [];
        this.selectedPack = null;
    }
// another array is designed to withhold the various packs we can create.
    start() {
        let selection = this.showMainMenuOptions();

        while (selection !=0) {
            switch (selection) {
                case '1':
                    this.createPack();
                    break;
                case '2':
                    this.viewPack();
                    break;
                case '3':
                    this.deletePack();
                case '4':
                    this.displayPacks();
                    break;
                default:
                    selection = 0;
            }
            selection = this.showMainMenuOptions();
        }

        alert('Ruff Choice!');
    }

    showMainMenuOptions(){
        return prompt(`
        0) exit
        1) create new pack
        2) view pack
        3) delete pack
        4) display all packs
        `);
    }


    showPackMenuOptions(packInfo) {
        return prompt(`
        0) back
        1) create dog
        2) delete dog
        --------------------
        ${packInfo}        
        `);
    }
    //for loop is established
    displayPacks() {
        let packString = '';
        for (let i = 0; i < this.packs.length; i++) {
            packString += i + ') ' + this.packs[i].name + '\n';
        }
        alert(packString);
    }

    createPack() {
        let name = prompt('Enter name for new pack:');
        this.packs.push(new Pack(name));
    }

    viewPack() {
        let index = prompt('Enter the index of the pack you wish to view:');
        if (index > -1 && index < this.packs.length) {
            this.selectedPack = this.packs[index];
            let description = 'Pack Name; ' + this.selectedPack.name + '\n';

            for (let i =0; i < this.selectedPack.dogs.length; i++) {
                description += i + ') ' + this.selectedPack.dogs[i].name 
                + ' - ' + this.selectedPack.dogs[i].breed + '\n';
        //array ^^
            }

            let selection = this.showPackMenuOptions(description);
            switch (selection) {
                case '1':
                    this.createDog();
                    break;
                case '2':
                    this.deleteDog();
            }
        }
    }

    deletePack() {
        let index = prompt('Enter the index of the pack you wish to delete:');
        if (index >-1 && index < this.packs.length) {
            this.packs.splice(index, 1);
        }
    }

    createDog() {
        let name = prompt('Enter name for new dog:');
        let breed = prompt('Enter breed for new dog:');
        this.selectedPack.dogs.push(new Dog(name, breed));
    }

    deleteDog() {
        let index = prompt('Enter the index of the dog you wish to delete:');
        if (index > -1 && index < this.selectedPack.dogs.length) {
            this.selectedPack.dogs.splice(index, 1);
        }
    }
} 

let menu = new Menu();
menu.start();