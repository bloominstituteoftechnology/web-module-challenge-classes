//  ISSUES I HAD
// I did not put the "speak()" method in the correct curly backet position.
// speak() doe not need a parameter.
// the "new" keyword is an instance and that is where you can -
// pass an argumanet like the cats actual name. 
// I also forgot to use parentheses in my final console log for the speak method.


// class Cat {
//   constructor(name) {
//     this.name = name;
//   }
//   speak() {
//     return `${this.name}, says MEEEOOOOW!!!`;
//   }
// }
// let gus = new Cat("Gus");
// let wookie = new Cat("Wookie");


// console.log(gus.speak()); // Gus, says MEEEOOOO!!!
// console.log(gus.name); // Gus


// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@


//  ISSUES I HAD
// I learned that the constructor parameter must be the same as the variables "name."


// class Dog {
//   constructor(name){
//     this.name = name;
//   }
//   speak() {
//     return "Skeet skeet!"
//   }
// }
// let cujo = new Dog ("Cujo");

// console.log(cujo.speak());



// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

// learned how to apply objects.

// class Kids {
//   constructor(x){
//     this.name = x.name;
//     this.height = x.height;
//     this.weight = x.weight;
//   }
//   toString(){
//     return `${this.name} is ${this.weight} pounds, and ${this.height} tall.`
//   }
// }
// let audrey = new Kids({
//   name: "Audrey", 
//   height: "4 foot", 
//   weight: 46});

// let claire = new Kids({
//   name: "Claire Bear",
//   height: "3 feet",
//   weight: 29
// });
// console.log(audrey.toString());
// console.log(claire.toString());


//  @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@



// I am learning what classes ("parent" & "child.") work with what methods.


// class Parent {
//   constructor (value) {
//     this.name = value.name;
//   }
//     pMethod(){
//     return `${this.name} parent method`;
//   }
// }

// class Child extends Parent {
//   constructor(x) {
//     super(x);
//   }  
//   cMethod(){
//     return `${this.name} child method`;
//   }
// }

// const mom = new Parent({
//   name:'Billie',
// });

// const son = new Child({
//   name:'Aaron',
// });

// console.log(mom.pMethod()); 
// // console.log(mom.cMethod()); // DOES NOT WORK

// console.log(son.pMethod());
// console.log(son.cMethod());
// console.log(Parent.);




// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@



// const myArray = [2, 3, 4, 5, 35];
// const myOtherArray = myArray.map(function(item) {
//     return item * 2
// })
// console.log(myOtherArray);





// function Animal(name, food){
//     this.name = name;
//     this.food = food;
// }
// Animal.prototype.eat = function(){
//   console.log(`My favorite food is ${this.food}`);
// }
// const llama = new Animal('llama', 'grass');
// llama.eat()

