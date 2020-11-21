// This file serves as a practice for Javascript classes
// author: Ciucur Daniel
// date: 22/11/2020


//A class describes an entity which is used as a blueprint to create an instance of this entity

class Developer{
    constructor(firstname, lastname, favouriteProgrammingLanguage){
        this.firstname = firstname;
        this.lastname = lastname;
        this.favouriteProgrammingLanguage = favouriteProgrammingLanguage;
    }

    getName(){
        return this.firstname + " " + this.lastname;
    }
}

var me = new Developer("Daniel", "Ciucur", "Java");
console.log(me.getName());